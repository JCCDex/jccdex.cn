import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    language: "zh",
    currentMenu: "",
    isBigScreen: false
  },
  mutations: {
    SET_LANGUAGE(state, lan) {
      Vue.set(state, "language", lan)
      localStorage.setItem('languageType', lan);
    },
    SET_CURRENT_MENU(state, menu) {
      Vue.set(state, "currentMenu", menu)
    },
    SET_ISBIGSCREEN(state, value) {
      Vue.set(state, "isBigScreen", value)
    }
  },
  actions: {
    updateLanguage: ({
      commit
    }, lan) => commit('SET_LANGUAGE', lan),
    updateCurrentMenu: ({
      commit
    }, menu) => commit('SET_CURRENT_MENU', menu),
    updateIsBigScreen: ({
      commit
    }, value) => commit('SET_ISBIGSCREEN', value)
  },
  getters: {
    language: state => state.language,
    currentMenu: state => state.currentMenu,
    isBigScreen: state => state.isBigScreen,
  }
});

export default store;