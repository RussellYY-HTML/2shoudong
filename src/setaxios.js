
import axios from 'axios'
import store from './store'
import router from './router'

//http全局拦截
export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )

    // 每次请求有返回的，都先经过这个拦截器
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data = response.data
                if(data.code == -1){
                    // 登录过期需要重新登录--code值根据后端返回的判断
                    //清空vuex的token和localstorage的token
                    store.commit('settoken','')
                    localStorage.removeItem('token')

                    //未登录跳转到Login登录页面
                    router.replace({path:'/login'})
                }
            }
            return response
        }
    )
}
