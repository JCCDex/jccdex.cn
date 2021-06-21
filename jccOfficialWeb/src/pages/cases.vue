<template>
  <div :class="isBigScreen?'cases_pc':'cases_mobile'">
      <!-- 融合媒体内容，数据安全防护 -->
   <img :src="isEnglish?protection_en:protection" class="img" />
    <div class="protection">
      <div class="left">
          <div class="div_class">
              <div class="one">{{$t("message.home.protectionTitle")}}</div>
              <div class="two" @mouseleave="currentValue='';" @mouseover="setCurrentValue('protection')" :style="getStyle('protection')">
                <div class="head">
                    <img :src="protectionOne"  class="image" />
                    <div class="title">{{$t("message.home.standardTitle")}}</div>
                </div>
                <div class="bodyOne" v-for="item in standardList" :key="item.id">
                    <div class="bodyLeft">
                        <img :src="protectionFour" class="image" />
                    </div>
                    <div class="bodyRight">
                        {{$t(`message.home.${item.text}`)}}
                    </div>
                </div>
              </div>
          </div>
      </div>
      <div class="right" >
         <div class="one" :class="!isBigScreen?'one_mobile':''" @mouseleave="currentValue='';" @mouseover="setCurrentValue('market')" :style="getStyle('market')">
             <div class="head">
                 <img :src="protectionTwo"  class="image" />
                 <div class="title">{{$t("message.home.marketTitle")}}</div>
             </div>
             <div class="body" >
                 <div class="image_class">
                    <img :src="protectionFive" class="image" />
                 </div>
                 <div class="content">{{$t("message.home.marketOne")}}</div>
             </div>
         </div>
         <div  class="one"  @mouseleave="currentValue='';" @mouseover="setCurrentValue('advantage')" :style="getStyle('advantage')">
             <div class="head">
                 <img :src="protectionThree"  class="image" />
                 <div class="title">{{$t("message.home.advantageTitle")}}</div>
             </div>
             <div class="body" v-for="item in advantageList" :key="item.id">
                 <div class="image_class">
                    <img :src="protectionSix" class="image_two" />
                 </div>
                 <div class="content">{{$t(`message.home.${item.text}`)}}</div>
             </div>
         </div>
      </div>
    </div>
    <!-- 埃及电子支付 -->
    <img :src="isEnglish?payment_en:payment" class="img" />
    <div class="payment">
        <div class="one" v-for="item in paymentList" :key="item.id">
          <div class="body" @mouseleave="currentValue='';" @mouseover="setCurrentValue(item.name)" :style="getStyle(item.name,item.isDouble)">
            <img :src="item.image" class="image" />
          </div>
        </div>
        <div class="two">
          <div class="body">
            <div class="contentOne">{{$t("message.home.paymentOne")}}</div>
            <div class="contentOne">{{$t("message.home.paymentTwo")}}</div>
         </div>
         <div class="body">
           <div class="contentTwo">{{$t("message.home.paymentThree")}}</div>
         </div>
        </div>
    </div>
    <!-- 椰子竞技积分 -->
     <img :src="isEnglish?integral_en:integral" class="img" />
     <div v-if="!isBigScreen" class="body_mobile">
            <div class="bodyOne">
               <div class="title">{{$t("message.home.integralTilte")}}</div>
               <div class="content">{{$t("message.home.integralOne")}}</div>
               <div class="foot">
                   <button @click.stop="goTo()" class="button">{{$t("message.home.integralTwo")}}</button>
               </div>
            </div> 
         </div>
     <div class="integral">
         <div v-if="isBigScreen" class="one">
            <div class="bodyOne">
               <div class="title">{{$t("message.home.integralTilte")}}</div>
               <div class="content">{{$t("message.home.integralOne")}}</div>
               <div class="foot">
                   <button @click.stop="goTo()" class="button">{{$t("message.home.integralTwo")}}</button>
               </div>
            </div> 
         </div>
         <div class="two" v-for="item in integralList" :key="item.id">
            <div class="body" @mouseleave="currentValue='';" @mouseover="setCurrentValue(item.name)" :style="getStyle(item.name)">
               <img :src="item.image" class="image" /> 
            </div>
         </div>
     </div>
     <!-- 更多行业应用案例 -->
     <img :src="isEnglish?anyMore_en:anyMore" class="img" />
     <div class="anyMore">
       <div v-for="item in anyMoreList" :key="item.id" class="body" >
         <div class="bodyContent" @mouseleave="currentValue='';" @mouseover="setCurrentValue(item.name)" :style="getStyle(item.name)">
            <div class="content">
                <div class="contentOne">
                <div class="one" v-for="data in item.title" :key="data">{{$t(`message.home.${data}`)}}</div>
                </div>
                <div class="contentTwo">
                <div class="two" v-for="data in item.content" :key="data">{{$t(`message.home.${data}`)}}</div>
                </div>
            </div>
            <div class="contentThree">
            <img :src="item.image" class="image" />
            </div>
        </div>
       </div>
     </div>
  </div>
</template>

<script>
import protection from "images/protection.png"
import protection_en from "images/protection_en.png"
import protectionOne from "images/protectionOne.png"
import protectionTwo from "images/protectionTwo.png"
import protectionThree from "images/protectionThree.png"
import protectionFour from "images/protectionFour.png"
import protectionFive from "images/protectionFive.png"
import protectionSix from "images/protectionSix.png"
import payment from "images/payment.png"
import payment_en from "images/payment_en.png"
import paymentOne from "images/paymentOne.png"
import paymentTwo from "images/paymentTwo.png"
import paymentThree from "images/paymentThree.png"
import integral from "images/integral.png"
import integral_en from "images/integral_en.png"
import integralOne from "images/integralOne.png"
import integralTwo from "images/integralTwo.png"
import integralThree from "images/integralThree.png"
import anyMore from "images/anyMore.png"
import anyMore_en from "images/anyMore_en.png"
import anyMoreOne from "images/anyMoreOne.png"
import anyMoreTwo from "images/anyMoreTwo.png"
import anyMoreThree from "images/anyMoreThree.png"
export default {
  name: "cases",
  data() {
    return {
      protection,
      protection_en,
      protectionOne,
      protectionTwo,
      protectionThree,
      protectionFour,
      protectionFive,
      protectionSix,
      payment,
      payment_en,
      paymentOne,
      paymentTwo,
      paymentThree,
      integral,
      integral_en,
      integralOne,
      integralTwo,
      integralThree,
      anyMore,
      anyMore_en,
      anyMoreOne,
      anyMoreTwo,
      anyMoreThree,
      standardList: [{
        id: 1,
        text: "standardOne"
      },
      {
        id: 2,
        text: "standardTwo"
      }],
      advantageList: [{
        id: 1,
        text: "advantageOne"
      }, {
        id: 2,
        text: "advantageTwo"
      }, {
        id: 3,
        text: "advantageThree"
      }],
      paymentList: [{
        id: 1,
        image: paymentOne,
        isDouble: false,
        name: "paymentOne"
      },
      {
        id: 2,
        image: paymentTwo,
        isDouble: true,
        name: "paymentTwo"
      },
      {
        id: 3,
        image: paymentThree,
        isDouble: false,
        name: "paymentThree"
      }],
      integralList: [{
        id: 1,
        image: integralOne,
        name: "integralOne"
      },
      {
        id: 2,
        image: integralTwo,
        name: "integralTwo"
      },
      {
        id: 3,
        image: integralThree,
        name: "integralThree"
      }],
      anyMoreList: [{
        id: 1,
        title: ["anyMoreOne", "anyMoreTwo"],
        content: ["anyMoreThree", "anyMoreFour"],
        image: anyMoreOne,
        name: "anyMoreOne"
      },
      {
        id: 2,
        title: ["anyMoreFive", "anyMoreSix"],
        content: ["anyMoreSeven", "anyMoreEight"],
        image: anyMoreTwo,
        name: "anyMoreTwo"
      },
      {
        id: 3,
        title: ["anyMoreNine"],
        content: ["anyMoreTen"],
        image: anyMoreThree,
        name: "anyMoreThree"
      }],
      currentValue: ""
    };
  },
  computed: {
    isBigScreen() {
      return this.$store.getters.isBigScreen;
    },
    isEnglish() {
      return this.$i18n.locale === "en";
    }
  },
  created() {
    // 更新导航栏当前选中的名称 用于刷新
    let currentView = this.$route.name;
    this.$store.dispatch("updateCurrentMenu", currentView);
  },
  methods: {
    setCurrentValue(value) {
      this.currentValue = value;
    },
    getStyle(value, isDouble = false) {
      let str = "";
      if (isDouble) {
        str = "margin-top:30px;"
      }
      let currentValue = this.currentValue;
      if (currentValue === value) {
        return "box-shadow:1px 2px 3px 4px #D4D8F5;" + str;
      } else {
        return str;
      }
    },
    goTo() {
      window.open("https://www.cocogc.cn/");
    }
  }
};
</script>

<style lang="scss" scoped>
.cases_pc {
  .img {
    width: 100%;
    height: 100%;
  }
  .protection {
    display: flex;
    background-color: #f9f9f9;
    .left {
      width: 50%;
      padding: 150px 0 30px;
      .div_class {
        float: right;
        margin-right: 100px;
        .one {
          width: 260px;
          text-align: center;
          color: #494a53;
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          padding-bottom: 30px;
        }
        .two {
          width: 260px;
          background-color: #ffffff;
          text-align: center;
          padding: 0 10px 30px;
          .head {
            text-align: center;
            padding-top: 10px;
            .image {
              width: 10%;
              height: 10%;
            }
            .title {
              color: #222222;
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              padding-bottom: 20px;
            }
          }
          .bodyOne {
            display: flex;
            padding-bottom: 10px;
            .bodyLeft {
              padding-left: 5px;
              padding-right: 5px;
              .image {
                width: 14px;
                height: 12px;
              }
            }
            .bodyRight {
              text-align: left;
              color: #585858;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
            }
          }
        }
      }
    }
    .right {
      width: 50%;
      text-align: left;
      padding: 60px 10px 30px 0;
      .one {
        width: 260px;
        margin-bottom: 80px;
        padding-bottom: 50px;
        background-color: #ffffff;
        .head {
          text-align: center;
          padding-top: 10px;
          .image {
            width: 10%;
            height: 10%;
          }
          .title {
            color: #222222;
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            padding-bottom: 20px;
          }
        }
        .body {
          display: flex;
          padding: 5px 10px;
          .image_class {
            padding: 0 5px 0 5px;
            .image {
              width: 10px;
              height: 10px;
            }
            .image_two {
              width: 14px;
              height: 14px;
            }
          }
          .content {
            color: #585858;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }
    }
  }
  .payment {
    display: flex;
    background-color: #f9f9f9;
    padding: 40px 10% 50px;
    .one {
      width: 20%;
      margin-right: 20px;
      .body {
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .two {
      width: 20%;
      padding: 30px;
      .body {
        width: 260px;
        padding: 10px;
        text-align: left;
        .contentOne {
          color: #494a53;
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .contentTwo {
          color: #494a53;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .integral {
    display: flex;
    background-color: #f9f9f9;
    padding: 30px 10% 50px 10%;
    .one {
      width: 29%;
      .bodyOne {
        .title {
          color: #52535b;
          text-align: left;
          font-size: 22px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          padding-bottom: 30px;
        }
        .content {
          color: #52535b;
          text-align: left;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          padding-bottom: 50px;
        }
        .foot {
          text-align: left;
          padding-bottom: 80px;
          .button {
            cursor: pointer;
            // width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: none;
            border-inline: none;
            outline: none;
            background-color: #4554ce;
            border-radius: 4px;
            color: #ffffff;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }
    }
    .two {
      width: 17%;
      padding-left: 50px;
      .body {
        padding: 5px;
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .anyMore {
    display: flex;
    background-color: #f9f9f9;
    padding: 30px 12.5%;
    .body {
      width: 26%;
      margin-left: 70px;
      .bodyContent {
        height: 100%;
        .content {
          background-color: #ffffff;
          width: 100%;
          .contentOne {
            min-height: 120px;
            padding-left: 20px;
            text-align: left;
            padding-top: 20%;
            background-color: #ffffff;
            .one {
              padding-bottom: 5px;
              color: #222222;
              font-size: 18px;
              font-family: STYuanti-SC-Regular, STYuanti-SC;
              font-weight: 400;
            }
          }
          .contentTwo {
            min-height: 180px;
            text-align: left;
            padding: 0 15px;
            white-space: break;

            .two {
              background-color: #ffffff;
              padding: 0 10px 20px 0;
              color: #585858;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
            }
          }
        }
        .contentThree {
          bottom: 0;
          .image {
            width: 100%;
            padding: 0;
          }
        }
      }
    }
  }
}
.cases_mobile {
  .img {
    width: 100%;
    height: 100%;
  }
  .protection {
    background-color: #f9f9f9;
    padding-bottom: 0.5rem;
    .left {
      padding: 0.5rem 0 0.6rem;
      .div_class {
        .one {
          text-align: center;
          color: #494a53;
          font-size: 0.28rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          padding-bottom: 0.3rem;
        }
        .two {
          margin-left: 20%;
          width: 2.6rem;
          padding: 0 0.3rem 0.5rem;
          background-color: #ffffff;
          text-align: center;
          .head {
            text-align: center;
            padding-top: 0.1rem;
            .image {
              width: 0.5rem;
              height: 0.5rem;
            }
            .title {
              color: #222222;
              font-size: 0.26rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              padding-bottom: 0.2rem;
            }
          }
          .bodyOne {
            display: flex;
            padding-bottom: 0.2rem;
            .bodyLeft {
              padding-right: 0.2rem;
              margin-top: -0.1rem;
              .image {
                width: 0.14rem;
                height: 0.12rem;
              }
            }
            .bodyRight {
              text-align: left;
              color: #585858;
              font-size: 0.22rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
            }
          }
        }
      }
    }
    .right {
      text-align: left;
      padding-left: 20%;
      .one {
        margin-bottom: 0.8rem;
        padding: 0.2rem 0.2rem 0.5rem;
        width: 2.8rem;
        background-color: #ffffff;
        .head {
          text-align: center;
          padding-top: 0.1rem;
          .image {
            width: 0.5rem;
            height: 0.5rem;
          }
          .title {
            color: #222222;
            font-size: 0.26rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            padding-bottom: 0.2rem;
          }
        }
        .body {
          display: flex;
          padding: 0.05rem 0;
          .image_class {
            padding: 0 0.15rem;
            margin-top: -0.12rem;
            .image {
              width: 0.1rem;
              height: 0.1rem;
            }
            .image_two {
              width: 0.14rem;
              height: 0.14rem;
            }
          }
          .content {
            color: #585858;
            font-size: 0.22rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }
    }
    .one_mobile {
      margin-left: 20%;
    }
  }
  .payment {
    display: flex;
    -webkit-flex-wrap: wrap;
    background-color: #f9f9f9;
    margin-top: -0.3rem;
    padding: 0.7rem 10% 0.5rem;
    .one {
      width: 33%;
      .body {
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .two {
      padding: 0.3rem 0;
      .body {
        padding: 0.1rem;
        text-align: left;
        .contentOne {
          color: #494a53;
          font-size: 0.28rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .contentTwo {
          color: #494a53;
          font-size: 0.22rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .integral {
    display: flex;
    background-color: #f9f9f9;
    padding: 0 0.3rem 0.5rem;

    .two {
      width: 33%;
      padding-right: 0.5rem;
      .body {
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .body_mobile {
    .bodyOne {
      padding: 0.3rem 30% 0.3rem 0.3rem;
      background-color: #f9f9f9;
      .title {
        color: #52535b;
        text-align: left;
        font-size: 0.28rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        padding-bottom: 0.3rem;
      }
      .content {
        color: #52535b;
        text-align: left;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
      .foot {
        text-align: left;
        padding-bottom: 0.8rem;
        .button {
          cursor: pointer;
          //   width: 1rem;
          height: 0.4rem;
          line-height: 0.3rem;
          text-align: center;
          border: none;
          border-inline: none;
          outline: none;
          background-color: #4554ce;
          border-radius: 0.04rem;
          color: #ffffff;
          font-size: 0.2rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .anyMore {
    background-color: #f9f9f9;
    padding: 0.3rem 0;
    .body {
      margin: 0.3rem 0 0.6rem 20%;
      width: 60%;
      .bodyContent {
        height: 100%;
        .content {
          background-color: #ffffff;
          width: 100%;
          .contentOne {
            min-height: 1.2rem;
            padding-left: 0.2rem;
            text-align: left;
            padding-top: 10%;
            background-color: #ffffff;
            .one {
              padding-bottom: 5px;
              color: #222222;
              font-size: 0.26rem;
              font-family: STYuanti-SC-Regular, STYuanti-SC;
              font-weight: 400;
            }
          }
          .contentTwo {
            min-height: 1.8rem;
            text-align: left;
            padding: 0 0.15rem;
            white-space: break;

            .two {
              background-color: #ffffff;
              padding: 0 0.1rem 0.2rem 0;
              color: #585858;
              font-size: 0.22rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
            }
          }
        }
        .contentThree {
          bottom: 0;
          .image {
            width: 100%;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>