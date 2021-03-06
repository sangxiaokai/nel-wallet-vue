import { LoginInfo, BalanceInfo, Result, Nep5Balance, Task, ConfirmType, TaskType } from '../../tools/entity';
import WalletLayout from "../../layouts/wallet.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { tools } from "../../tools/importpack";
import Store from '../../tools/StorageMap';
import { TaskManager } from '../../tools/taskmanager';
import { Watch } from 'vue-property-decorator';
import { services } from '../../services';
import { History } from '../../entity/TransferEntitys';

declare const mui;
@Component({
    components: {
        "wallet-layout": WalletLayout
    }
})
export default class transfer extends Vue 
{
    target: string;
    isDomain: boolean;
    toaddress: string;    //转账地址
    expiryTime: string;   //域名到期时间
    tipAddress: string;    //域名转账提示
    amount: string;
    asset: string;
    balances: BalanceInfo[] = [];
    balance: BalanceInfo = new BalanceInfo();
    addrerr: number = 0; //0默认,1 success成功，2 test错误，3 address错误，4 domain错误
    amounterr: string = "";
    txs: History[] = [];
    nextpage: boolean = true;
    txpage: number;
    cutshow: boolean = true;
    openToast: Function;
    tranConfirm: Function;
    isAddress: boolean;//判断输入的交易地址是否正确
    isNumber: boolean;//判断输入的交易金额是否正确
    constructor() 
    {
        super();
        this.isAddress = false;//地址错误
        this.isNumber = false;//金额错误
        this.target = "";
        this.isDomain = false;
        this.toaddress = "";
        this.expiryTime = "";
        this.tipAddress = "";
        this.amount = "";
        this.asset = "";
        this.txpage = 1;
        // this.openToast = this.$refs.toast[ "isShow" ];
    }
    @Watch("$i18n.locale")
    valueChange(val, oldval)
    {
        if (val == "cn")
        {
            this.tipAddress = "" + this.$t("transfer.timeMsg") + this.expiryTime;
        } else
        {
            this.tipAddress = "" + this.$t("transfer.timeMsg") + this.expiryTime;
        }
    }
    mounted() 
    {
        this.openToast = this.$refs.toast["isShow"];
        this.tranConfirm = this.$refs.tranConfirm["open"];
        var str = tools.storagetool.getStorage("balances_asset");
        if (str == null)
            this.balances = new Array<BalanceInfo>();
        else
        {
            this.balances = JSON.parse(str) as BalanceInfo[];
            var choose = tools.storagetool.getStorage("transfer_choose");
            this.asset = (choose == null ? this.balances[0].asset : choose);
            var n: number = this.balances.findIndex(b => b.asset == this.asset);
            n = n < 0 ? 0 : n;
            this.balance = this.balances[n];
            this.history();
            // this.awaitHeight();
        }
        TaskManager.functionList = [];
        TaskManager.functionList.push(this.updateBalances);
    }

    cutPage(btn: string)
    {
        btn == "next" ? this.txpage++ : (this.txpage <= 1 ? this.txpage = 1 : this.txpage--);
        this.history();
    }
    choose(assetid: string)
    {
        this.asset = assetid
        tools.storagetool.setStorage("transfer_choose", assetid);
        var n: number = this.balances.findIndex(b => b.asset == this.asset);
        this.balance = this.balances[n];
        this.verify_Amount();
    }

    async updateBalances()
    {
        let currcountAddr = LoginInfo.getCurrentAddress();
        var balances = await tools.wwwtool.api_getBalance(currcountAddr) as BalanceInfo[];
        var nep5balances = await tools.wwwtool.api_getnep5Balance(currcountAddr) as Nep5Balance[];
        let height = await tools.wwwtool.api_getHeight();
        this.balances = BalanceInfo.getBalancesByArr(balances, nep5balances, height);
        tools.storagetool.setStorage("balances_asset", JSON.stringify(this.balances));
    }

    async verify_addr()
    {
        let isDomain = tools.nnstool.verifyDomain(this.target);
        let isAddress = tools.nnstool.verifyAddr(this.target);
        let neoDomain = tools.nnstool.verifyNeoDomain(this.target);
        if (isDomain)
        {
            this.target = this.target.toLowerCase();
            let res = await tools.wwwtool.getresolvedaddress(this.target);
            // let addr = await tools.nnstool.resolveData(this.target);
            if (res && res.data)
            {
                this.toaddress = res.data
                this.expiryTime = tools.timetool.getTime(res.TTL);
                this.tipAddress = "" + this.$t("transfer.timeMsg") + this.expiryTime;
                this.isDomain = true;
                this.addrerr = 1;
                this.isAddress = true;
                return true;
            }
            else
            {
                this.toaddress = "";
                this.expiryTime = "";
                this.tipAddress = "";
                this.addrerr = 2;
                this.isDomain = false;
                this.isAddress = false;
                return false;
            }
        }
        else if (isAddress)
        {
            if (tools.neotool.verifyPublicKey(this.target))
            {
                this.toaddress = this.target;
                this.addrerr = 1;
                this.tipAddress = "";
                this.isAddress = true;
                return true;
            } else
            {
                this.toaddress = "";
                this.addrerr = 3;
                this.tipAddress = "";
                this.isAddress = false;
                return false;
            }
        }
        else if (neoDomain)
        {
            let res = await tools.wwwtool.getresolvedaddress(this.target);
            // let addr = await tools.nnstool.resolveData(this.target);
            if (res)
            {
                this.toaddress = res.data
                this.expiryTime = tools.timetool.getTime(res.TTL);
                this.tipAddress = "" + this.$t("transfer.timeMsg") + this.expiryTime;
                this.isDomain = true;
                this.addrerr = 1;
                this.isAddress = true;
                return true;
            }
            else
            {
                this.toaddress = "";
                this.expiryTime = "";
                this.tipAddress = "";
                this.addrerr = 4;
                this.isDomain = false;
                this.isAddress = false;
                return false;
            }
        }
        else
        {
            this.addrerr = 3;
            this.toaddress = "";
            this.isAddress = false;
            return false;
        }
    }
    verify_Amount()
    {
        if (this.amount.length == 0)
        {
            this.isNumber = false;
            return false;
        }
        let balancenum = Neo.Fixed8.parse(this.balance.balance + '');
        let inputamount = Neo.Fixed8.parse(this.amount);
        let compare = balancenum.compareTo(inputamount);
        compare >= 1 ? this.amount = this.amount : this.amount = balancenum.toString();
        this.isNumber = true;
        return true;
    }
    async send()
    {
        let msgs = [
            { title: this.$t("confirm.transferTo"), value: this.toaddress },
            { title: this.$t("confirm.transferAmount"), value: this.amount + " " + this.balance.names }
        ]
        let confrimres = await this.tranConfirm(this.$t("confirm.transferConfirm"), msgs);
        console.log(confrimres);
        if (confrimres)
        {
            try
            {
                if (this.verify_addr() && this.verify_Amount())
                {
                    let height = Store.blockheight.select("height");
                    if (!!this.balance["type"] && this.balance.type == "nep5")
                    {
                        let res = await tools.coinTool.nep5Transaction(LoginInfo.getCurrentAddress(), this.toaddress, this.asset, parseFloat(this.amount));
                        TaskManager.addTask(
                            new Task(ConfirmType.tranfer, res.info, { amount: this.amount, assetname: this.balance.names, toaddress: this.toaddress }),
                            TaskType.tranfer
                        );
                        if (!res["err"])
                        {
                            // mui.toast("" + this.$t("transfer.msg2"));
                            this.openToast("error", "" + this.$t("transfer.msg2"), 3000);
                            let num = parseFloat(this.balance.balance + "");
                            let bear = num - parseFloat(this.amount);
                            this.balance.balance = bear;
                            BalanceInfo.setBalanceSotre(this.balance, height);
                            this.amount = "";
                            tools.storagetool.setStorage("current-height", height + "");
                        }
                        else
                        {
                            this.openToast("error", "" + this.$t("transfer.msg3") + res.info, 3000);
                        }
                    } else
                    {
                        let res: Result = await tools.coinTool.rawTransaction(this.toaddress, this.asset, this.amount);
                        if (res.err)
                        {
                            this.openToast("error", "" + this.$t("transfer.msg3") + res.info, 3000);
                        } else
                        {
                            this.openToast("success", "" + this.$t("transfer.msg2"), 3000);
                        }
                        this.isNumber = false;
                        let num = parseFloat(this.balance.balance + "");
                        let bear = num - parseFloat(this.amount);
                        this.balance.balance = bear;
                        TaskManager.addTask(
                            new Task(ConfirmType.tranfer, res.info, { amount: this.amount, assetname: this.balance.names, toaddress: this.toaddress }),
                            TaskType.tranfer
                        );
                        BalanceInfo.setBalanceSotre(this.balance, height);
                        this.amount = "";
                        tools.storagetool.setStorage("current-height", height + "");
                    }
                }
            } catch (error)
            {
                if (error == "Signature interrupt")
                {
                } else
                {
                    // mui.alert("" + this.$t("transfer.msg4"));
                    this.openToast("error", "" + this.$t("transfer.msg4"), 3000);
                }
            }
        }
    }
    async history()
    {
        this.txs = await services.transfer.history(LoginInfo.getCurrentAddress(), 5, this.txpage);
        // console.log(this.txs);

    }

    async awaitHeight()
    {
        let str = tools.storagetool.getStorage("current-height");
        let currentheight = await tools.wwwtool.api_getHeight();
        let oldheight = currentheight;
        str ? oldheight = parseInt(str) : tools.storagetool.setStorage("current-height", currentheight + "");
        if (currentheight - oldheight >= 2)
        {
            await this.history();
            sessionStorage.removeItem("current-height");
            return;
        }
        setTimeout(() =>
        {
            this.awaitHeight();
        }, 30000);
    }

}