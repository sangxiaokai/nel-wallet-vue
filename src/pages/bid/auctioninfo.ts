import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Valert from "../../components/Valert.vue";
import Spinner from "../../components/Spinner.vue";
import { tools } from "../../tools/importpack";
@Component({
    components: {
        "v-alert": Valert,
        "spinner-wrap": Spinner
    }
})
export default class AuctionInfo extends Vue
{
    address: string;
    myBidPrice: string;
    bidPrice: string;
    updatePrice: string;
    bidDetailList: any;
    currentpage: number;
    pagesize: number;
    state_getDomain: number;
    btnShowmore: boolean;
    @Prop() item: any;
    constructor()
    {
        super();
        this.address = tools.storagetool.getStorage("current-address");
        // this.address = 'AeYiwwjiy2nKXoGLDafoTXc1tGvfkTYQcM';
        // this.myBidPrice = this.item.mybidprice;
        // this.updatePrice = this.myBidPrice;
        this.myBidPrice = "";
        this.updatePrice = "";
        console.log(this.item);
        this.bidDetailList = [];
        this.currentpage = 1;
        this.pagesize = 5;
        this.state_getDomain = 0;
        this.btnShowmore = true;
        this.getBidDetail(this.item.domain, this.currentpage, this.pagesize)
    }

    async mounted()
    {
        let info = await tools.nnssell.getSellingStateByDomain(this.item.domain);
        console.log(ThinNeo.Helper.GetAddressFromScriptHash(info.owner));
        if (info.owner.toString() == this.address)
        {
            alert("以领取")
        }

    }
    myBidInput($event)
    {
        let price = $event.target.value;
        this.bidPrice = price;
        let res = this.checkInput(price);
        if (res)
        {
            let bidPrice = Neo.Fixed8.parse(this.myBidPrice + "");

            let sum = bidPrice.add(Neo.Fixed8.parse(price + ""));
            this.updatePrice = sum.toString();
            //this.myBidPrice = ((parseFloat(this.item.mybidprice) + parseFloat(price)) * 10) / 10;
            console.log(bidPrice + "+" + Neo.Fixed8.parse(price + ""))
            console.log(this.updatePrice)
        }

    }

    checkInput(price)
    {
        let reg = /^[0-9]+(.[0-9]{1})?$/;
        if (!reg.test(price))
        {
            return false;
        }
        return true;
    }

    async getDomain()
    {
        this.state_getDomain = 1;
        let info = await tools.nnssell.getSellingStateByDomain(this.item.domain);
        if (info.endBlock.compareTo(Neo.BigInteger.Zero) <= 0)
        {
            let res = await tools.nnssell.endSelling(info.id.toString());
            this.endSelling_confirm(res.info, 1);
        } else
        {
            if (!!info.owner && info.owner.toString() == this.address)
            {
                this.state_getDomain = 2;
                return;
            } else
            {
                let res = await tools.nnssell.getsellingdomain(info.id.toString());
                this.endSelling_confirm(res.info, 2);
            }
        }

    }


    async endSelling_confirm(txid: string, method: number)
    {
        let res = await tools.wwwtool.getrawtransaction(txid);
        if (!!res)
        {
            switch (method)
            {
                case 1:
                    this.getDomain();
                    break;
                case 2:
                    this.state_getDomain = 2;
                default:
                    break;
            }
            return;
        }
        else
        {
            setTimeout(() =>
            {
                this.endSelling_confirm(txid, method);
            }, 5000)
        }
    }

    async getBidDetail(domain, currentpage, pagesize)
    {
        let res = await tools.wwwtool.api_getBidDetail(domain, currentpage, pagesize);
        if (res)
        {
            if (res[ 0 ].count < pagesize)
            {
                this.btnShowmore = false;
            }
            if (res[ 0 ].list.length < pagesize)
            {
                this.btnShowmore = false;
            }
            for (let i in res[ 0 ].list)
            {
                res[ 0 ].list[ i ].addPriceTime = tools.timetool.dateFtt("yyyy/MM/dd hh:mm:ss", new Date(res[ 0 ].list[ i ].addPriceTime * 1000));
                this.bidDetailList.push(res[ 0 ].list[ i ]);
            }

        }
    }

    async bidDomain()
    {
        tools.nnssell.rechargeReg(this.bidPrice);

    }


    async bid_confirm(txid: string)
    {
        let res = await tools.wwwtool.getrawtransaction(txid);
        if (!!res)
        {
            alert('加价成功');
            return;
        }
        else
        {
            setTimeout(() =>
            {
                this.recharg_confirm(txid);
            }, 5000)
        }
    }

    async recharg_confirm(txid: string)
    {
        let res = await tools.wwwtool.getrawtransaction(txid);
        if (!!res)
        {
            // let res = await tools.nnssell.addprice(this.item.domain, Neo.Fixed8.parse(this.bidPrice).getData().toNumber());
            // let txid = res.info;
            this.bid_confirm(txid);
            return;
        }
        else
        {
            setTimeout(() =>
            {
                this.recharg_confirm(txid);
            }, 5000)
        }
    }

    getMoreBidDetail()
    {
        this.currentpage += 1;
        this.getBidDetail(this.item.domain, this.currentpage, this.pagesize);
    }
    onBack()
    {
        this.$emit('onBack');
    }
}