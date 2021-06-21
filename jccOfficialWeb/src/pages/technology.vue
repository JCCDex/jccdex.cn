<template>
  <div :class="isBigScreen?'technology_pc':'technology_mobile'">
    <!-- 智能合约银关跨链技术 -->
    <img :src="isEnglish?techbannerOne_en:techbannerOne" class="img" />
    <div class="bodyOne">
      <div class="left">
        <div v-for="item in contractList" :key="item.id" class="content">
          <div class="one">{{$t(`message.home.${item.name}`)}}</div>
        </div>
      </div>
      <div class="right">
          <img :src="techbannerTwo" class="img" />
      </div>
    </div>
    <!-- 去中心化跨链技术 -->
    <img :src="isEnglish?techbannerThree_en:techbannerThree" class="img" />
    <div class="bodyTwo">
      <div class="left">
        <img :src="techbannerFour" class="img" />
      </div>
      <div class="right">
          <div class="one">{{$t("message.home.decentralizedOne")}}</div>
          <div class="one">{{$t("message.home.decentralizedTwo")}}</div>
      </div>
    </div>
    <!-- 资产通证化智能孵化技术 -->
    <img :src="isEnglish?techbannerFive_en:techbannerFive" class="img" />
    <div class="bodyThree">
      <div class="left">
        <div class="one">{{$t("message.home.incubationOne")}}</div>
        <div class="two">{{$t("message.home.incubationTwo")}}</div>
      </div>
      <div class="right">
          <img :src="techbannerSix" class="img" />
      </div>
    </div>
    <!-- ERC721标准交易体系 -->
    <img :src="isEnglish?techbannerSeven_en:techbannerSeven" class="img" />
    <div class="bodyFour">
       <div class="left">
         <img :src="techbannerEight" class="img" />
       </div>
       <div class="right">
         <div class="one">{{$t("message.home.ERC721_one")}}</div>
         <div class="two">{{$t("message.home.ERC721_two")}}</div>
         <div class="two">{{$t("message.home.ERC721_three")}}</div>
       </div>
    </div>
  </div>
</template>

<script>
import techbannerOne from "images/techbannerOne.png"
import techbannerOne_en from "images/techbannerOne_en.png"
import techbannerTwo from "images/techbannerTwo.png"
import techbannerThree from "images/techbannerThree.png"
import techbannerThree_en from "images/techbannerThree_en.png"
import techbannerFour from "images/techbannerFour.png"
import techbannerFive from "images/techbannerFive.png"
import techbannerFive_en from "images/techbannerFive_en.png"
import techbannerSix from "images/techbannerSix.png"
import techbannerSeven from "images/techbannerSeven.png"
import techbannerSeven_en from "images/techbannerSeven_en.png"
import techbannerEight from "images/techbannerEight.png"
export default {
  name: "technology",
  data() {
    return {
      techbannerOne,
      techbannerOne_en,
      techbannerTwo,
      techbannerThree,
      techbannerThree_en,
      techbannerFour,
      techbannerFive,
      techbannerFive_en,
      techbannerSix,
      techbannerSeven,
      techbannerSeven_en,
      techbannerEight,
      contractList: [{
        id: 1,
        name: "contractOne",
      },
      {
        id: 2,
        name: "contractTwo",
      }]
    };
  },
  created() {
    // 更新导航栏当前选中的名称 用于刷新
    let currentView = this.$route.name;
    this.$store.dispatch("updateCurrentMenu", currentView);
  },
  computed: {
    isBigScreen() {
      return this.$store.getters.isBigScreen;
    },
    isEnglish() {
      return this.$i18n.locale === "en";
    }
  }
};
</script>

<style lang="scss" scoped>
.technology_pc {
  background-color: #f9f9f9;
  .img {
    width: 100%;
    height: 100%;
  }
  .bodyOne {
    padding: 40px 0 80px;
    display: flex;
    .left {
      padding-left: 6%;
      width: 19%;
      .content {
        .one {
          text-align: left;
          padding: 5px 20px 0 20px;
          color: #494a53;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
        }
      }
    }
    .right {
      width: 75%;
      text-align: left;
      .img {
        width: 90%;
        height: 100%;
      }
    }
  }
  .bodyTwo {
    display: flex;
    padding: 60px 0;
    .left {
      width: 60%;
      text-align: right;
      .img {
        width: 90%;
        height: 90%;
      }
    }
    .right {
      padding-left: 20px;
      padding-top: 6%;
      text-align: left;
      .one {
        color: #494a53;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-bottom: 3%;
      }
    }
  }
  .bodyThree {
    display: flex;
    padding: 60px 0;
    .left {
      width: 30%;
      text-align: right;
      .one {
        padding-left: 20%;
        text-align: left;
        padding-top: 20%;
        color: #494a53;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .two {
        padding-left: 20%;
        text-align: left;
        padding-top: 10%;
        color: #494a53;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
    .right {
      width: 70%;
      .img {
        width: 90%;
        height: 90%;
      }
    }
  }
  .bodyFour {
    display: flex;
    padding: 60px 0;
    .left {
      width: 60%;
      text-align: right;
      .img {
        width: 90%;
        height: 90%;
      }
    }
    .right {
      width: 30%;
      padding: 0 5%;
      .one {
        padding-top: 10%;
        text-align: left;
        color: #494a53;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .two {
        padding-top: 5%;
        text-align: left;
        color: #494a53;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }
}
.technology_mobile {
  background-color: #f9f9f9;
  .img {
    width: 100%;
    height: 100%;
  }
  .bodyOne {
    padding: 0.4rem 0 0.8rem;
    .left {
      padding-bottom: 0.5rem;
      .content {
        .one {
          padding: 0.1rem 0.3rem;
          text-align: left;
          color: #494a53;
          font-size: 0.22rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
        }
      }
    }
    .right {
      text-align: center;
      padding: 0 0.3rem;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .bodyTwo {
    padding: 0.6rem 0;
    .left {
      padding: 0.2rem 0.3rem;
      text-align: right;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      padding: 0.2rem 0.3rem;
      text-align: left;
      .one {
        text-align: left;
        color: #494a53;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }
  .bodyThree {
    padding: 0.3rem 0;
    .left {
      text-align: left;
      .one {
        text-align: left;
        padding: 0.2rem 0.3rem 0.1rem;
        color: #494a53;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .two {
        padding: 0.1rem 0.3rem;
        text-align: left;
        color: #494a53;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
    .right {
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .bodyFour {
    padding: 0.3rem 0;
    .left {
      padding: 0.1rem 0.3rem;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      font-size: 0.22rem;
      .one {
        padding: 0.05rem 0.3rem;
        text-align: left;
        color: #494a53;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .two {
        padding: 0.05rem 0.3rem;
        text-align: left;
        color: #494a53;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }
}
</style>