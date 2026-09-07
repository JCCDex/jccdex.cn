<template>
  <div :class="isBigScreen?'commonHead_pc':'commonHead_mobile'">
    <div class="router">
      <img :src="logo" class="logo">
      <img :src="logoText" class="logoText">
      <div @click="selectMenu(item)" v-for="(item,index) in menus" :key="index"
        class="menuBtn commonBtn"
        :style="{'color':currentMenu === item ? '#4554ce' : '#2c2c2c'}">
        {{$t(`message.head.${item}`)}}
      </div>
    </div>
    <div @click="switchLanguage" class="language commonBtn">
      <span style="color:#5C79FF">
        {{currentLanguage==='en'?'EN':'中文'}}</span>/
       <span>{{currentLanguage==='en'?'中文':'EN'}}</span>
    </div>
  </div>
</template>

<script>
import logo from "images/logo.png";
import logoText from "images/logoText.svg";
var homeTitle = document.getElementById("homepage_title");
export default {
  name: "commonHead",
  data() {
    return {
      logo,
      logoText,
      // menus: ["home", "technology", "cases", "documents"]
      menus: ["home", "cases", "scheme", "documents"]
    };
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
  },
  methods: {
    selectMenu(newSelected) {
      if (this.currentMenu !== newSelected) {
        if (newSelected === "documents") {
          window.open('https://jccdex.cn/documents', '_blank');
        } else {
          this.$store.dispatch("updateCurrentMenu", newSelected);
          this.$router.push({ name: newSelected });
        }
      }
    },
    switchLanguage() {
      let lang = this.currentLanguage === "en" ? "zh" : "en";
      this.$i18n.locale = lang;
      localStorage.setItem('languageType', lang);
      homeTitle.innerHTML = this.$t("message.homeTitle");
    }
  }
};
</script>

<style lang="scss" scoped>
.commonHead_pc {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  color: #2c2c2c;
  .router {
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
  }
  .logo {
    width: 0.58rem;
    height:0.52rem;
    margin:0 0 0 2rem;
  }

  .logoText {
    width: 1rem;
    margin:0 1rem 0 0.15rem;
  }

  .commonBtn {
    user-select: none;
    cursor: pointer;
  }
  .menuBtn {
    margin-left: 1rem;
    padding: 0.2rem;
  }
  .language {
    padding-right: 1rem;
    min-width: 1.5rem;
  }
}

.commonHead_mobile {
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  font-size: 0.23rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  color: #2c2c2c;

  .router {
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
  }

  .logo {
    width: 0.58rem;
    height:0.52rem;
    margin-left: 0.1rem;
  }
  .logoText {
    width: 0.84rem;
    height: 0.4rem;
  }
  .commonBtn {
    user-select: none;
    cursor: pointer;
    min-width: 1rem
  }
  .menuBtn {
    // margin-left: 1rem;
    // padding: 0.2rem;
  }
  .language {
    // padding-right: 1rem;
    min-width: 1.5rem;
  }
}
</style>