<template>
  <div :class="isBigScreen?'commonHead_pc':'commonHead_mobile'">
    <div class="logo">
      <img :src="logo" class="imageOne" >
      <img :src="logoText" class="imageTwo" >
    </div>
    <div class="menu" v-for="(item,index) in menus" :key="index">
      <div  @click="selectMenu(item)" class="menuOne" :class="{'menuSelected':currentMenu===item}">{{$t(`message.head.${item}`)}}</div>
    </div>
    <div class="language">
      <div @click="switchLanguage" class="body" >
        <span style="color:#5C79FF">{{currentLanguage==='en'?'EN':'中文'}}</span>/<span>{{currentLanguage==='en'?'中文':'EN'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "images/logo.png";
import logoText from "images/logoText.png";
var homeTitle = document.getElementById("homepage_title");
export default {
  name: "commonHead",
  data() {
    return {
      logo,
      logoText,
      menus: ["home", "technology", "cases"]
    };
  },
  methods: {
    selectMenu(newSelected) {
      if (this.currentMenu === newSelected) {
        return;
      }
      this.$store.dispatch("updateCurrentMenu", newSelected);
      this.$router.push({ name: newSelected });
    },
    switchLanguage() {
      let lang = this.currentLanguage === "en" ? "zh" : "en";
      this.$i18n.locale = lang;
      localStorage.setItem('languageType', lang);
      homeTitle.innerHTML = this.$t("message.homeTitle");
    }
  },
  computed: {
    currentMenu() {
      return this.$store.getters.currentMenu;
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    isBigScreen() {
      return this.$store.getters.isBigScreen;
    }
  }
};
</script>

<style lang="scss" scoped>
.commonHead_pc {
  width: 100%;
  height: 1rem;
  display: flex;
  background: #ffffff;
  color: #2c2c2c;
  .logo {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .imageOne {
      width: 0.58rem;
      height: 0.52rem;
    }
    .imageTwo {
      width: 0.84rem;
      height: 0.4rem;
      margin-left:0.15rem;
    }
  }
  .menu {
    // width: 5%;
    min-width: 1.5rem;
    height: 100%;
    display: flex;
    align-items: left;
    padding-left: 0.5rem;
    // padding-left: 1rem;
    .body {
      cursor: pointer;
      user-select: none;
    }
    .menuOne {
      height: 1rem;
      line-height: 1rem;
      user-select: none;
      //   margin: 0 0.5rem;
      cursor: pointer;
    }
    .menuSelected {
      color: #4554ce;
    }
  }
  .language {
    width: 20%;
    // text-align: 0 auto;
    cursor: pointer;
    padding-left: 45%;
    display: flex;
    align-items: center;
  }
}
.commonHead_mobile {
  //   width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  color: #2c2c2c;
  font-size: 0.24rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  padding: 0 10%;
  .logo {
    padding-top: 0.05rem;
    .imageOne {
      height: 0.26rem;
    }
    .imageTwo {
      height: 0.26rem;
    }
  }
  .menuSelected {
    color: #4554ce;
  }
}
</style>