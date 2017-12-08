
  const state = {
    userInfo: {
      "name":"admin",
      "password":"admin"
    }
  };
  const mutations = {
    SET_USER_INFO(state, value) {
      state.userInfo = value;
    }
  };
  const getters = {
    completedUserInfo(state){
      return state.userInfo;
    }
  };
  const actions = {
    getUserInfo({commit}, value) {
      commit('SET_USER_INFO', value)
    }
  };


export default{
  state,
  mutations,
  getters,
  actions
}
