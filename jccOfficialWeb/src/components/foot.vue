<template>
  <div>
    <ul v-if="isBigScreen" id="foot">
      <li>{{$t("message.foot.copyright")}}</li>
      <li>{{$t("message.foot.company")}}</li>
      <li @click="goTo()">
        <span @click="goTo()" style="margin-right:0.3rem;">{{$t("message.foot.icpNumber")}}</span>
        <span @click="goTo('recordNumber')">{{$t("message.foot.recordNumber")}}</span>
      </li>
    </ul>
    <div v-if="!isBigScreen" class="foot_mobile">
      <div class="body">{{$t("message.foot.copyright")}}</div>
      <div class="body">{{$t("message.foot.company")}}</div>
      <div class="body">
        <span @click="goTo()">{{$t("message.foot.icpNumber")}}</span>
        <span @click="goTo('recordNumber')">{{$t("message.foot.recordNumber")}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data() {
    return {}
  },
  computed: {
    isBigScreen() {
      return this.$store.getters.isBigScreen
    },
  },
  methods: {
    goTo(type = '') {
      let url = 'https://beian.miit.gov.cn/'
      if (type === 'recordNumber') {
        url = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34019202000676'
      }
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
#foot {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9
}
#foot li {
  margin-right: 1rem;
  color: #999999;
  font-size: 0.24rem;
  span {
    cursor: pointer;
  }
}
.foot_mobile {
  text-align: center;
  padding: 0.3rem 0;
  .body {
    color: #999999;
    font-size: 0.2rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    padding: 0.05rem 0;
  }
}
</style>