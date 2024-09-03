<template>
  <div :class="isBigScreen?'scheme_pc':'scheme_mobile'">
    <img :src="isEnglish?schemeEn:scheme"  class="img" />
    <!-- 方案介绍 -->
    <div class="scheme">
      <img :src="building" style="width: 35%;" />
      <p>{{ $t("message.home.building") }}</p>
    </div>
  </div>
</template>
<script>
import scheme from "images/scheme_zh.png";
import schemeEn from "images/scheme_en.png";
import building from "images/building.png";
export default {
  name: "scheme",
  data() {
    return {
      scheme,
      schemeEn,
      building
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
}
</script>
<style lang="scss" scoped>
.scheme_pc {
  width: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
  .scheme {
    width: 100%;
    height: calc(100vh - 1rem - 260px);
    margin-top: 2rem;
    background-color: #ffffff;
  }
}

.scheme_mobile {
  width: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
  .scheme {
    width: 100%;
    margin-top: 3rem;
    // height: 100%;
    height: calc(100vh - 4rem - 260px);
    background-color: #ffffff;
  }
}
</style>