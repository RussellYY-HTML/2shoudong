<template>
    <div>
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:'',
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey:'username',
                        label:"用户名",
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{
                            require:'true',
                            type:"string",
                            min:3,
                            max:12,
                        },
                        message:{
                            required:'用户名不能为空',
                        }
                    },
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            require:'true',
                        },
                        message:{
                            required:"用户名不能为空"
                        }
                    },
                    {
                        type:'submit',
                        label:'登录'
                    }
                    
                ]
            }
        }
    },
    methods: {
        // 1、方法前面+ async
        async submitHandler(){

            event.preventDefault()
             try{

                //  2、定义调取接口 + await
                 const result = await this.$http.get('/api/Login',{params:this.model})

                ///3、 判断result这个接口返回的数据
                 if(result.data.lcode =='0000'){
                     //将token存入vuex的state中---调用vuex-mutations中定义的方法进行存储
                     this.$store.commit('settoken',result.data.tokenkey)

                     localStorage.setItem("tokenkey",result.data.tokenkey)
                     console.log(result.data.message)
                 }else{
                     console.log(result.data.message)
                 }
                 
             }catch(err){

                //  失败报错
                console.log("submitHandler -> err", err)
             }
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>