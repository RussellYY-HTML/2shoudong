import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 变量存储库
    token:''
  },
  mutations: {
    // 放同步的方法 写入到 state ↑
    settoken(state,token){
      // 设置vuex的token
      state.token = token
    }
  },
  actions: {
    // 放异步的方法---还是要经过mutations
  },
  modules: {
  },
  getters:{
    // 相当于Vue中的计算属性
  }
})
