<template>
  <div :class="isBigScreen?'home_pc':'home_mobile'">
    <img :src="isEnglish?homeHead_en:homeHead"  class="img" />
    <!-- 井畅—区块链价值交换机 -->
    <div class="exchange">
      <div class="head">{{$t("message.home.exchange")}}</div>
      <div class="body">
        <div :span="8" v-for="item in exchangeList" :key="item.id" class="content">
         <div style="text-align:center;" >
             <div class="polygon_class">
               <img :src="item.image" class="image" />
             </div>
             <div class="name">{{$t(`message.home.${item.name}`)}}</div>
         </div>
         <div class="text">{{$t(`message.home.${item.content}`)}}</div>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="profile">
      <div class="head">{{$t("message.home.profile")}}</div>
      <div class="content">
          <div class="one">
            <img :src="profileOne" class="img" />
          </div>
          <div class="two">{{$t("message.home.profileOne")}}</div>
          <div class="three">{{$t("message.home.profileTwo")}}</div>
          <div class="four">
            <img :src="profileTwo" class="img" />
          </div>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="advantage">
      <div class="head">{{$t("message.home.advantage")}}</div>
      <div class="body">
          <div v-for="item in advantageList" :key="item.id" class="content">
            <div class="one">
             <img :src="item.image" class="img" />
            </div>
            <div class="two">{{$t(`message.home.${item.name}`)}}</div>
            <div v-for="data in item.contentList" :key="data" class="three">{{$t(`message.home.${data}`)}}</div>
        </div>
      </div>
    </div>
    <!-- 企业历程 -->
    <div class="course">
      <div class="head">{{$t("message.home.course")}}</div>
      <div v-for="item in courseList" :key="item.id" class="body">
        <div class="one">
           <img :src="item.image" :style="getWidth(item)" />
        </div>
        <div class="two" :class="item.isFirst?'' : 'addBorder'">
          <div class="image_div">
           <img :src="item.isFirst ? ringLogo : ring" class="img" />
         </div>
         {{$t(`message.home.${item.text}`)}}
        </div>
      </div>
    </div>
    <!-- 我们的合作机构 -->
    <img :src="isEnglish ? homeMiddle_en : homeMiddle"  class="img" />
    <div class="journey">
      <div class="head">{{$t("message.home.journey")}}</div>
      <div class="body">
        <div class="one" v-for="item in journeyList" :key="item.id" @mousemove="setCurrentValue(item.name)" @mouseleave="currentValue='';">
          <div class="div_class">
            <img :src="item.name===currentValue ? item.image : item.image_com"  class="image" />
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contactUs">
      <div class="head">{{$t("message.home.contactUs")}}</div>
      <div class="image_class">
          <img :src="contactUs" class="img" />
      </div>
      <div class="body">
          <div class="title">{{$t("message.home.address")}}</div>
          <div class="one">
              <div class="iamge_class">
                <img :src ="addressImage" class="img" />
              </div>
             <div class="text">{{$t("message.home.addressValue")}}</div>
          </div>
          <div class="two">
              <div v-for="item in contactUsList" :key="item.id" class="content">
                <div class="name">{{$t(`message.home.${item.name}`)}}</div>
                <div class="text">{{$t(`message.home.${item.text}`)}}</div>
              </div>
              <div v-if="isBigScreen" class="qrCode">
                  <div class="title">{{$t("message.home.weiChat")}}</div>
                  <div class="body">
                     <img :src="qrCode" class="img"  />
                  </div>
                  <div class="foot">{{$t("message.home.qrFoot")}}</div>
              </div>
          </div>
          <div class="three">
              <div class="value" v-for="item in contactUsList" :key="item.name" >
                 <div class="valueOne">
                  <img :src="item.image" :style="'width:'+item.width+';height:'+item.height+';'" style="margin-left:0;"/>
                 </div>
                 <div class="valueTwo">
                  <span class="span"> {{$t(`message.home.${item.value}`)}}</span>
                 </div>
              </div>
          </div>
          <div v-if="!isBigScreen" class="qrCode_mobile">
             <div class="title">{{$t("message.home.weiChat")}}</div>
                  <div class="body">
                     <img :src="qrCode" class="img"  />
                  </div>
                  <div class="foot">{{$t("message.home.qrFoot")}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHead from "images/homeHead.png"
import homeHead_en from "images/homeHead_en.png"
import security from "images/security.png"
import credible from "images/credible.png"
import intelligence from "images/Intelligence.png"
import profileOne from "images/profileOne.png"
import profileTwo from "images/profileTwo.png"
import technology from "images/technology.png"
import professional from "images/professional.png"
import resources from "images/resources.png"
import service from "images/service.png"
import ring from "images/ring.png"
import ringLogo from "images/ringLogo.png"
import homeMiddle from "images/homeMiddle.png"
import homeMiddle_en from "images/homeMiddle_en.png"
import journeyOne from "images/journeyOne.png"
import journeyTwo from "images/journeyTwo.png"
import journeyThree from "images/journeyThree.png"
import journeyFour from "images/journeyFour.png"
import journeyFive from "images/journeyFive.png"
import journeySix from "images/journeySix.png"
import journeySeven from "images/journeySeven.png"
import journeyOne_com from "images/journeyOne_com.png"
import journeyTwo_com from "images/journeyTwo_com.png"
import journeyThree_com from "images/journeyThree_com.png"
import journeyFour_com from "images/journeyFour_com.png"
import journeyFive_com from "images/journeyFive_com.png"
import journeySix_com from "images/journeySix_com.png"
import journeySeven_com from "images/journeySeven_com.png"
import contactUs from "images/contactUs.png"
import addressImage from "images/addressImage.png"
import mobileImage from "images/mobileImage.png"
import emailImage from "images/emailImage.png"
import serviceImage from "images/serviceImage.png"
import qrCode from "images/qrCode.png"
import courseOne from "images/courseOne.png"
import courseTwo from "images/courseTwo.png"
import courseThree from "images/courseThree.png"
import courseFour from "images/courseFour.png"
import courseFive from "images/courseFive.png"
import courseSix from "images/courseSix.png"
import courseSeven from "images/courseSeven.png"

export default {
  name: "home",
  data() {
    return {
      homeHead,
      homeHead_en,
      security,
      credible,
      intelligence,
      profileOne,
      profileTwo,
      technology,
      professional,
      resources,
      service,
      ring,
      ringLogo,
      homeMiddle,
      homeMiddle_en,
      journeyOne,
      journeyTwo,
      journeyThree,
      journeyFour,
      journeyFive,
      journeySix,
      journeySeven,
      journeyOne_com,
      journeyTwo_com,
      journeyThree_com,
      journeyFour_com,
      journeyFive_com,
      journeySix_com,
      journeySeven_com,
      contactUs,
      addressImage,
      mobileImage,
      emailImage,
      serviceImage,
      qrCode,
      courseOne,
      courseTwo,
      courseThree,
      courseFour,
      courseFive,
      courseSix,
      courseSeven,
      currentValue: "",
      exchangeList: [{
        id: 1,
        name: "security",
        image: security,
        content: "securityContent"
      },
      {
        id: 2,
        name: "credible",
        image: credible,
        content: "credibleContent"
      }, {
        id: 3,
        name: "intelligence",
        image: intelligence,
        content: "intelligenceContent"
      }],
      advantageList: [{
        id: 1,
        name: "technology",
        image: technology,
        contentList: [
          "technologyOne",
          "technologyTwo",
          "technologyThree",
          "technologyFour"
        ]
      },
      {
        id: 2,
        name: "professional",
        image: professional,
        contentList: [
          "professionalOne",
          "professionalTwo",
          "professionalThree",
          "professionalFour"
        ]
      },
      {
        id: 3,
        name: "resources",
        image: resources,
        contentList: [
          "resourcesOne",
          "resourcesTwo",
          "resourcesThree",
          "resourcesFour"
        ]
      },
      {
        id: 4,
        name: "service",
        image: service,
        contentList: [
          "serviceOne",
          "serviceTwo",
          "serviceThree",
          "serviceFour"
        ]
      }],
      courseList: [{
        id: 7,
        text: "courseSeven",
        image: courseSeven,
        width_pc: "20%",
        width_mobile: "40%",
        isFirst: false
      },
      {
        id: 6,
        text: "courseSix",
        image: courseSix,
        width_pc: "20%",
        width_mobile: "40%",
        isFirst: false
      },
      {
        id: 5,
        text: "courseFive",
        image: courseFive,
        width_pc: "30%",
        width_mobile: "60%",
        isFirst: false
      },
      {
        id: 4,
        text: "courseFour",
        image: courseFour,
        width_pc: "30%",
        width_mobile: "60%",
        isFirst: false
      },
      {
        id: 3,
        text: "courseThree",
        image: courseThree,
        width_pc: "30%",
        width_mobile: "60%",
        isFirst: false
      },
      {
        id: 2,
        text: "courseTwo",
        image: courseTwo,
        width_pc: "30%",
        width_mobile: "60%",
        isFirst: false
      },
      {
        id: 1,
        text: "courseOne",
        image: courseOne,
        width_pc: "30%",
        width_mobile: "60%",
        isFirst: true
      }],
      journeyList: [{
        id: 1,
        name: "journeyOne",
        image: journeyOne,
        image_com: journeyOne_com
      },
      {
        id: 2,
        name: "journeyTwo",
        image: journeyTwo,
        image_com: journeyTwo_com
      },
      {
        id: 3,
        name: "journeyThree",
        image: journeyThree,
        image_com: journeyThree_com
      },
      {
        id: 4,
        name: "journeyFour",
        image: journeyFour,
        image_com: journeyFour_com
      },
      {
        id: 5,
        name: "journeyFive",
        image: journeyFive,
        image_com: journeyFive_com
      },
      {
        id: 6,
        name: "journeySix",
        image: journeySix,
        image_com: journeySix_com
      },
      {
        id: 7,
        name: "journeySeven",
        image: journeySeven,
        image_com: journeySeven_com
      }],
      contactUsList: [{
        id: 1,
        name: "mobile",
        text: "mobileText",
        value: "mobileValue",
        image: mobileImage,
        width: "14px",
        height: "18px"
      },
      {
        id: 2,
        name: "email",
        text: "emailText",
        value: "emailValue",
        image: emailImage,
        width: "20px",
        height: "14px"
      }, {
        id: 3,
        name: "serviceQQ",
        text: "serviceText",
        value: "serviceValue",
        image: serviceImage,
        width: "15px",
        height: "18px"
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
  },
  methods: {
    getWidth(item) {
      let str = "width:";
      let width = this.isBigScreen ? item.width_pc : item.width_mobile;
      str = str + width + ";";
      return str;
    },
    setCurrentValue(value) {
      this.currentValue = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_pc {
  width: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
  .exchange {
    width: 100%;
    background-color: #f9f9f9;
    padding-top: 30px;
    .head {
      text-align: center;
      color: #3e3e3e;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      height: 30px;
      line-height: 30px;
      padding-bottom: 30px;
    }
    .body {
      display: flex;
      .content {
        width: 100%;
        text-align: center;
        .polygon_class {
          height: 115px;
          line-height: 190px;
          background: url("../images/polygon.png") no-repeat 50% 10px;
          background-size: 100px;
          .image {
            width: 60px;
          }
        }
        .name {
          color: #222222;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .text {
          padding: 20px 20%;
          text-align: left;
          color: #585858;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .profile {
    background-color: #ffffff;
    .head {
      padding: 30px 0;
      text-align: center;
      color: #222222;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .content {
      display: flex;
      .one {
        text-align: right;
        min-width: 30%;
        .img {
          height: 80%;
          width: 80%;
        }
      }
      .two {
        min-width: 20%;
        color: #585858;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-top: 50px;
        text-align: left;
      }
      .three {
        min-width: 20%;
        padding-top: 120px;
        color: #585858;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        text-align: left;
      }
      .four {
        min-width: 30%;
        text-align: left;
        margin-top: 100px;
        .img {
          height: 80%;
          width: 60%;
        }
      }
    }
  }
  .advantage {
    background-color: #f9f9f9;
    .head {
      text-align: center;
      padding: 30px 0;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #3e3e3e;
    }
    .body {
      display: flex;
      .content {
        width: 25%;
        padding-bottom: 10px;
        .one {
          text-align: center;
          .img {
            width: 30%;
            height: 30%;
          }
        }
        .two {
          padding: 20px 0;
          color: #222222;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          text-align: center;
        }
        .three {
          padding-left: 40%;
          text-align: left;
          color: #585858;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .course {
    background-color: #ffffff;
    .head {
      text-align: center;
      padding: 30px 0;
      color: #3e3e3e;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .body {
      display: flex;
      .one {
        width: 25%;
        text-align: left;
        padding-left: 10%;
        padding-bottom: 40px;
        padding-top: 0;
      }
      .addBorder {
        border-left: 1px solid #999999;
      }
      .two {
        width: 75%;
        color: #2b2b2b;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-left: 40px;
        text-align: left;
        padding-bottom: 40px;
        .image_div {
          position: absolute;
          margin-left: -50px;
          .img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .journey {
    background-color: #f9f9f9;
    .head {
      text-align: center;
      padding: 30px 0;
      color: #494a53;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .body {
      padding: 10px 8% 40px;
      display: flex;
      //   cursor: pointer;
      .one {
        width: 12%;
        margin: 0 auto;
        .div_class {
          .image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .contactUs {
    background-color: #ffffff;
    .head {
      padding: 30px 0;
      text-align: center;
      color: #3e3e3e;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .image_class {
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .body {
      margin-top: 20px;
      padding: 0 10%;
      .title {
        text-align: left;
        color: #030303;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .one {
        text-align: left;
        padding: 20px 0 30px;
        display: flex;
        border-bottom: 1px solid #f3f3f3;
        .iamge_class {
          margin-top: 3px;
          .img {
            height: 14px;
            width: 10px;
            padding-right: 10px;
          }
        }
        .text {
          color: #434242;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
      .two {
        padding-top: 60px;
        display: flex;
        .content {
          text-align: left;
          width: 15%;
          padding-right: 10%;
          padding-bottom: 20px;
          .name {
            color: #030303;
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            border-bottom: 1px solid #f3f3f3;
            padding-bottom: 10px;
          }
          .text {
            padding-top: 20px;
            color: #434242;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
        .qrCode {
          text-align: left;
          .title {
            text-align: center;
            color: #686868;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
          .body {
            margin: 0;
            padding: 0;
            .img {
              width: 100px;
              height: 100px;
              padding: 0;
            }
          }
          .foot {
            text-align: center;
            width: 100px;
            color: #686868;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }
      .three {
        display: flex;
        padding-bottom: 20px;
        .value {
          width: 15%;
          white-space: nowrap;
          padding-right: 10%;
          text-align: left;
          display: flex;
          .valueOne {
            height: 100%;
            line-height: 100%;
          }
          .valueTwo {
            .span {
              margin-bottom: 10px;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
}
.home_mobile {
  .img {
    width: 100%;
    height: 100%;
  }
  .exchange {
    width: 100%;
    background-color: #f9f9f9;
    padding: 0.3rem 0;
    .head {
      text-align: center;
      color: #3e3e3e;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      height: 0.3rem;
      line-height: 0.3rem;
      padding-bottom: 0.3rem;
    }
    .body {
      .content {
        width: 100%;
        text-align: center;
        .polygon_class {
          height: 1.8rem;
          line-height: 2.4rem;
          background: url("../images/polygon.png") no-repeat 50% 0.1rem;
          background-size: 1.52rem;
          .image {
            width: 0.7rem;
          }
        }
        .name {
          color: #222222;
          font-size: 0.28rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .text {
          padding: 0.2rem 10%;
          text-align: left;
          color: #585858;
          font-size: 0.22rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .profile {
    background-color: #ffffff;
    .head {
      padding: 0.3rem 0;
      text-align: center;
      color: #222222;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      .one {
        text-align: right;
        width: 45%;
        padding-right: 5%;
        .img {
          width: 80%;
        }
      }
      .two {
        width: 45%;
        padding-right: 5%;
        color: #585858;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-top: 0.5rem;
        text-align: left;
      }
      .three {
        width: 50%;
        padding-left: 5%;
        padding-top: 1.5rem;
        color: #585858;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        text-align: left;
      }
      .four {
        width: 40%;
        text-align: left;
        margin-top: 1rem;
        .img {
          height: 80%;
          width: 90%;
        }
      }
    }
  }
  .advantage {
    background-color: #f9f9f9;
    .head {
      text-align: center;
      padding: 0.3rem 0;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #3e3e3e;
    }
    .body {
      display: flex;
      flex-wrap: wrap;
      padding: 0.5rem 0;
      .content {
        width: 50%;
        padding-bottom: 0.5rem;
        .one {
          text-align: center;
          .img {
            width: 30%;
            height: 30%;
          }
        }
        .two {
          padding: 0.2rem 0;
          color: #222222;
          font-size: 0.24rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          text-align: center;
        }
        .three {
          padding-left: 30%;
          text-align: left;
          color: #585858;
          font-size: 0.22rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
  .course {
    background-color: #ffffff;
    .head {
      text-align: center;
      padding: 0.3rem 0;
      color: #3e3e3e;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .body {
      display: flex;
      .one {
        width: 30%;
        text-align: left;
        padding-left: 10%;
        padding-bottom: 0.4rem;
        padding-top: 0;
      }
      .addBorder {
        border-left: 1px solid #999999;
      }
      .two {
        width: 70%;
        color: #2b2b2b;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-left: 0.4rem;
        padding-right: 0.3rem;
        text-align: left;
        padding-bottom: 0.4rem;
        .image_div {
          position: absolute;
          margin-left: -0.55rem;
          .img {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
      }
    }
  }
  .journey {
    background-color: #f9f9f9;
    .head {
      text-align: center;
      padding: 0.3rem 0;
      color: #494a53;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .body {
      padding: 0.1rem 8% 0.4rem;
      display: flex;
      flex-wrap: wrap-reverse;
      .one {
        width: 25%;
        margin: 0 auto;
        .div_class {
          .image {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
      }
    }
  }
  .contactUs {
    background-color: #ffffff;
    .head {
      padding: 0.3rem 0;
      text-align: center;
      color: #3e3e3e;
      font-size: 0.28rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .image_class {
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .body {
      margin-top: 0.2rem;
      padding: 0 0.4rem;
      .title {
        text-align: left;
        color: #030303;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .one {
        text-align: left;
        padding: 0.2rem 0 0.3rem;
        display: flex;
        border-bottom: 0.01rem solid #f3f3f3;
        .iamge_class {
          margin-top: -0.03rem;
          .img {
            height: 0.22rem;
            width: 0.16rem;
            padding-right: 0.1rem;
          }
        }
        .text {
          color: #434242;
          font-size: 0.22rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
      .two {
        padding-top: 0.6rem;
        display: flex;
        .content {
          text-align: left;
          width: 33%;
          padding-right: 0.2rem;
          padding-bottom: 0.2rem;
          .name {
            color: #030303;
            font-size: 0.18rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            border-bottom: 0.01rem solid #f3f3f3;
            padding-bottom: 0.1rem;
          }
          .text {
            padding-top: 0.2rem;
            color: #434242;
            font-size: 0.22rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }
      .three {
        display: flex;
        padding-bottom: 0.2rem;
        .value {
          width: 33%;
          font-size: 0.16rem;
          white-space: nowrap;
          padding-right: 0.2rem;
          text-align: left;
          display: flex;
          .valueOne {
            height: 100%;
            line-height: 100%;
          }
          .valueTwo {
            .span {
              margin-bottom: 0.1rem;
              padding-left: 0.1rem;
            }
          }
          .span {
            padding-left: 0.1rem;
          }
        }
      }
      .qrCode_mobile {
        padding-top: 0.3rem;
        text-align: center;
        .title {
          text-align: center;
          color: #686868;
          font-size: 0.2rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .body {
          margin: 0;
          padding: 0;
          .img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
        .foot {
          text-align: center;
          //   width: 1.5rem;
          color: #686868;
          font-size: 0.22rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
