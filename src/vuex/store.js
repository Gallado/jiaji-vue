import Vue from "vue"
import Vuex from "vuex"
import loginUserInfo from "./modules/UserInfo.js"

Vue.use(Vuex);

const store = new Vuex.Store({
  /*state: {
    userInfo: {"name":'1111',"tel":"22222222"}
  },
  mutations: {
    SET_USER_INFO(state, value) {
      console.log('set_user_info', value);
      state.userInfo = value;
    }
  },
  getters: {
    completedUserInfo(state){
      return state.userInfo;
    }
  },
  actions: {
    getUserInfo({dispatch,commit}, value) {
      console.log('value', value);
      commit('SET_USER_INFO', value)
    }
  }*/
  modules:{
    loginUserInfo
  }
});
export default store;
