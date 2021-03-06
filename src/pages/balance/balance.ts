import { LoginInfo, BalanceInfo, Result, NeoAsset, Nep5Balance, Task, ConfirmType, TaskType, TaskFunction, TaskState } from '../../tools/entity';
import Vue from "vue";
import { Component } from "vue-property-decorator";
import WalletLayout from "../../layouts/wallet.vue";
import Spinner from "../../components/Spinner.vue";
import { tools } from "../../tools/importpack";
import { TaskManager } from '../../tools/taskmanager';
import Store from '../../tools/StorageMap';

declare const mui;

@Component({
  components: {
    "wallet-layout": WalletLayout,
    "spinner-wrap": Spinner
  }
})
export default class balance extends Vue 
{
  // Data property
  neoasset: NeoAsset;
  balances: Array<BalanceInfo>;
  currentAddress: string = "";
  chooseAddressarr: Array<LoginInfo>;
  chooseAddress: string = "";
  loadmsg: string = "";
  claimbtn: boolean = true;
  nncBalance: string = '0';
  /**
   * 是否可领取gas 0为可领取状态，1为不可以领取,2为正在领取
   */
  getGas: number;
  openToast: Function;
  /**
   * 是否可领取NNC 0为可领取状态，1为不可以领取,2为正在领取
   */
  getNNC: number;
  constructor()
  {
    super();
    this.neoasset = new NeoAsset();
    this.balances = new Array();
    this.neoasset.gas = 0;
    this.neoasset.neo = 0;
    this.neoasset.claim = '';
    this.chooseAddressarr = new Array();
    this.getGas = 0;
    this.getNNC = 0;
    // this.chooseAddressarr = tools.storagetool.getLoginArr();
  }
  // Component method
  mounted()
  {
    // tools.coinTool.claimgas();   签名测试
    this.currentAddress = LoginInfo.getCurrentAddress();
    this.getBalances();
    this.initGetGas()
    let claimState = sessionStorage.getItem("claimState");
    if (claimState)
    {
      this.claimbtn = false;
      this.loadmsg = (claimState == "1") ? "" + this.$t("balance.msg2") : "" + this.$t("balance.msg3");
    }
    this.openToast = this.$refs.toast["isShow"];

    TaskManager.functionList = [];
    TaskManager.functionList.push(this.getBalances);
    TaskFunction.claimGas = this.startClaimGas;
    TaskFunction.claimState = this.claimState;
    TaskFunction.getGasTest = this.btnState;
    TaskFunction.getNNCTest = this.nncBtnState;
  }

  async initGetGas()
  {

    let res = await tools.wwwtool.api_hasclaimgas(this.currentAddress);
    if (res)
    {
      if (res[0].code == "3010")//可领取
      {
        this.btnState(0);
      } else if (res[0].code == "3012")//已领取
      {
        this.btnState(1);
      } else if (res[0].code == "3011")//正在领取
      {
        this.btnState(2);
      }
    }
    let nncres = await tools.wwwtool.api_hasclaimnnc(this.currentAddress);
    if (nncres)
    {
      if (nncres[0].code == "3001")//可领取
      {
        this.nncBtnState(0);
      } else if (nncres[0].code == "3002")//可再次领取
      {
        this.nncBtnState(0);
      } else if (nncres[0].code == "3004")//已领取
      {
        this.nncBtnState(1);
      } else if (nncres[0].code == "3003")//正在领取
      {
        this.nncBtnState(2);
      }
    }
  }
  // 索取gas按钮状态
  btnState(state: number)
  {
    this.getGas = state;
  }
  // 索取nnc按钮状态
  nncBtnState(state: number)
  {
    this.getNNC = state;
  }

  claimState(state: number)
  {
    if (state == 0)
    {
      this.claimbtn = true;
      this.loadmsg = "";
      sessionStorage.removeItem("claimState");
    }
    if (state == 1)
    {
      this.claimbtn = true;
      this.loadmsg = "" + this.$t("balance.msg4");
      sessionStorage.removeItem("claimState");
    }
    if (state == 2)
    {
      this.loadmsg = "" + this.$t("balance.msg3");
    }
  }


  //手动领取测试gas
  async getTestGas()
  {
    this.getGas = 2;
    let res = await tools.wwwtool.api_claimgas(this.currentAddress, 10);
    if (res)
    {
      if (res[0].code == "3000")//交易待发送
      {
        this.openToast("success", "" + this.$t("balance.successmsg"), 4000);
        // this.getGas = 1;
        let task = new Task(ConfirmType.tranfer, "", { amount: 10, address: this.currentAddress });
        TaskManager.addTask(task, TaskType.getGasTest);
      }
      else if (res[0].code == "3002")//余额不足
      {
        this.openToast("error", "" + this.$t("balance.errmsg2"), 4000);
        this.getGas = 0;
      }
      else if (res[0].code == "3003")//已领取
      {
        this.openToast("error", "" + this.$t("balance.errmsg1"), 4000);
        this.getGas = 1;
      }
      else if (res[0].code == "3004")//超出领取金额
      {
        this.openToast("error", "" + this.$t("balance.errmsg1"), 4000);
        this.getGas = 1;
      }
      else
      {
        this.openToast("error", "" + this.$t("balance.errmsg3"), 4000);
        this.getGas = 0;
      }
    }
    else
    {
      this.openToast("error", "" + this.$t("balance.errmsg3"), 4000);
      this.getGas = 0;
    }
  }
  //手动领取测试NNC
  async getTestNNC()
  {
    this.getNNC = 2;
    let res = await tools.wwwtool.api_claimNNC(this.currentAddress);
    if (res)
    {
      if (res[0].code == "3003")//交易处理中
      {
        this.openToast("success", "" + this.$t("balance.successmsg"), 4000);
        // this.getGas = 1;
        let task = new Task(ConfirmType.tranfer, "", { amount: 100, address: this.currentAddress });
        TaskManager.addTask(task, TaskType.requestNNC);
      }
      else if (res[0].code == "3012")//余额不足
      {
        this.openToast("error", "" + this.$t("balance.errmsg2"), 4000);
        this.getNNC = 0;
      }
      else if (res[0].code == "3004")//已领取
      {
        this.openToast("error", "" + this.$t("balance.errmsg1"), 4000);
        this.getNNC = 1;
      }
      else if (res[0].code == "3011")//超出领取金额
      {
        this.openToast("error", "" + this.$t("balance.errmsg1"), 4000);
        this.getNNC = 1;
      }
      else
      {
        this.openToast("error", "" + this.$t("balance.errmsg3"), 4000);
        this.getNNC = 0;
      }
    }
    else
    {
      this.openToast("error", "" + this.$t("balance.errmsg3"), 4000);
      this.getNNC = 0;
    }
  }
  addressSwitch()
  {
    LoginInfo.setCurrentAddress(this.chooseAddress);
    this.currentAddress = this.chooseAddress;
    this.getBalances();
  }

  //获取余额
  async getBalances()
  {
    tools.coinTool.initAllAsset();
    //获得balance列表
    var balances = await tools.wwwtool.api_getBalance(this.currentAddress) as BalanceInfo[];
    var claims = await tools.wwwtool.api_getclaimgas(this.currentAddress, 0);
    var claims2 = await tools.wwwtool.api_getclaimgas(this.currentAddress, 1);
    var nep5balances = await tools.wwwtool.api_getnep5Balance(this.currentAddress) as Nep5Balance[];
    let height = await tools.wwwtool.api_getHeight();
    this.neoasset.neo = 0;
    this.neoasset.gas = 0;

    if (balances) //余额不唯空
    {
      let sum1 = Neo.Fixed8.parse(claims["gas"].toFixed(8));
      let sum2 = Neo.Fixed8.parse(claims2["gas"].toFixed(8));
      let sum = sum1.add(sum2).toString()
      this.neoasset.claim = sum;   //塞入claim
      balances.forEach //取NEO 和GAS
        (balance =>
        {
          if (balance.asset == tools.coinTool.id_NEO)
          {
            this.neoasset.neo = balance.balance;
          }
          if (balance.asset == tools.coinTool.id_GAS)
          {
            this.neoasset.gas = balance.balance;
          }
        });
      // 获取nnc资产
      if (nep5balances)
      {
        Object.keys(nep5balances).filter((keys: string) =>
        {
          const nnc = '0x' + tools.coinTool.id_NNC.toString();
          if (nep5balances[keys].assetid == nnc)
          {
            this.nncBalance = nep5balances[keys].balance
            return true;
          }
          return false;
        })
      }
    }
    this.balances = await BalanceInfo.getBalancesByArr(balances, nep5balances, height);
    tools.storagetool.setStorage("balances_asset", JSON.stringify(this.balances));
  }

  async toClaimGas()
  {
    if (Neo.Fixed8.parse(this.neoasset.claim).compareTo(Neo.Fixed8.Zero) > 0)
    {
      if (this.neoasset.neo > 0)
      {
        let res = await tools.coinTool.rawTransaction(this.currentAddress, tools.coinTool.id_NEO, this.neoasset.neo.toString());
        if (res.info)
        {
          this.claimbtn = false;
          this.loadmsg = "" + this.$t("balance.msg1");
          TaskManager.addTask(
            new Task(ConfirmType.tranfer, res.info, { type: "Claim", amount: this.neoasset.neo, assetname: "NEO", toaddress: this.currentAddress }),
            TaskType.tranfer
          );
          sessionStorage.setItem("claimState", "1");
          this.loadmsg = "" + this.$t("balance.msg2");
          // this.queryNEOTx(res.info);
        }
      } else
      {
        this.startClaimGas();
      }
    }
  }

  async startClaimGas()
  {
    let res = await tools.coinTool.claimGas();
    if (res["sendrawtransactionresult"])
    {
      this.loadmsg = "" + this.$t("balance.msg3");
      let txid = res["txid"];
      let amount = JSON.parse(res['amount']);
      TaskManager.addTask(
        new Task(ConfirmType.tranfer, txid, { amount }),
        TaskType.ClaimGas
      );
      sessionStorage.setItem("claimState", "2");
    }
  }

  toTransfer(asset: string)
  {
    tools.storagetool.setStorage("transfer_choose", asset);
    this.$router.push("transfer");
  }

}