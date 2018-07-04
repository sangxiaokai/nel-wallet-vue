import { MyAuction, LoginInfo } from "../entity";
import { tools } from "../importpack";

export class NeoaucionData
{
    static session_open = new tools.localstoretool("auction-openSession");

    static async getBidList(address: string)
    {
        //获得加价列表
        let res = await tools.wwwtool.api_getBidListByAddress(address);
        let arr = new Array<MyAuction>();
        //获得session列表
        let obj = this.session_open.getList();
        let list = res ? res[ 0 ][ "list" ] as Array<MyAuction> : [];
        if (res)
        {
            for (let i in list)
            {
                const element = list[ i ];
                //根据时间判断状态
                element.auctionState = tools.nnssell.compareTime(list[ i ].startAuctionTime * 1000);
                //开始时间日期格式化
                element.startAuctionTime = tools.timetool.dateFtt("yyyy/MM/dd hh:mm:ss", new Date(list[ i ].startAuctionTime * 1000));
                if (element.auctionState == 0)
                {   //判断地址是不是自己的
                    element[ "endedState" ] = element.maxBuyer == address ? 1 : 2;
                }
                if (obj && obj[ element.domain ])   //判断域名在开标缓存中是否存在
                {
                    this.session_open.delete(element.domain);    //如果存在就删除该域名的缓存
                }
                let bidlist = tools.localstoretool.getTable("bidInfo-" + element.domain)    //获得域名的加价列表
                //获得当前账户该域名下的余额
                let balanceOfSelling = await tools.nnssell.getBalanceOfSeling(Neo.Uint256.parse(element.id.replace('0x', '')));
                list[ i ].receivedState = 0;
                //根据余额和所有者判断当前账户是否领取过了域名或退币
                if (element.auctionState == 0)
                {
                    list[ i ].balanceOfSelling = balanceOfSelling.toString();
                    let current = LoginInfo.getCurrentAddress();
                    if (element.maxBuyer == current)
                    {
                        list[ i ].receivedState = element.owner == current ? 1 : 0
                    } else
                    {
                        list[ i ].receivedState = balanceOfSelling.compareTo(Neo.BigInteger.Zero) == 0 ? 2 : 0;
                    }
                }

                if (bidlist && Object.keys(bidlist).length > 0)
                {
                    let bidSession = new tools.localstoretool("bidInfo-" + element.domain);
                    for (const key in bidlist)
                    {
                        if (bidlist.hasOwnProperty(key))
                        {
                            const element = bidlist[ key ];
                            let res = await tools.wwwtool.getrawtransaction(key);
                            if (res)
                            {
                                bidSession.delete(key);
                            }
                        }
                    }
                    element.bidListSession = bidlist;
                }
            }
        }
        obj = this.session_open.getList();
        for (const key in obj)
        {
            if (obj.hasOwnProperty(key))
            {
                const element = obj[ key ] as MyAuction;
                element.endedState = 0;
                element.auctionState = 2;
                element.maxBuyer = null;
                element.maxPrice = '0';
                let bidSession = new tools.localstoretool("bidInfo-" + element.domain);
                let bidlist = bidSession.getList();
                if (bidlist)
                {
                    for (const key in bidlist)
                    {
                        if (bidlist.hasOwnProperty(key))
                        {
                            const element = bidlist[ key ];
                            let res = await tools.wwwtool.getrawtransaction(key);
                            if (res)
                            {
                                bidSession.delete(key);
                            }
                        }
                    }
                    element.bidListSession = bidlist;
                }
                arr.push(element)
            }
        }

        arr = arr.concat(list);

        return arr
    }

    static async setOpenSession(auction: MyAuction)
    {
        this.session_open.put(auction.domain, auction);
    }

    static async setBidSession(auction: MyAuction, amount: string, txid: string)
    {
        let session_bid = new tools.localstoretool("bidInfo-" + auction.domain);
        this.session_open.put(auction.domain, auction);
        session_bid.put(txid, amount);
    }

    static async getAssetBalance()
    {
        let sgas = tools.coinTool.id_SGAS.toString();
        let gas = tools.coinTool.id_GAS;
        let obj = {}
        let nep5 = await tools.wwwtool.getnep5balanceofaddress(sgas, LoginInfo.getCurrentAddress());
        let res = await tools.wwwtool.api_getBalance(LoginInfo.getCurrentAddress());
        let balances = res as Array<any>;
        let balance;
        balances.map((item, index, array) =>
        {
            if (item.asset == gas)
            {
                balance = item.balance;
                return;
            }
        })
        obj[ gas ] = balance;
        obj[ sgas ] = nep5[ "nep5balance" ];
        return obj;
        // obj[gas] = await tools.wwwtool.api_getBalance()
        // tools.coinTool.initAllAsset()
    }

}