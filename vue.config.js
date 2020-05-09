module.exports = {
  configureWebpack:{
    devServer:{
      open:true,
      before(app){
        let regList = [
          {username:"brookyang",password:"123456"},
          {username:"russell",password:"woshiyang"},
        ]

        // 注册接口
        app.get("/api/Reg",(req,res)=>{
          const {username,password} = req.query;
          const isInRegList = regList.filter(v=>v.username == username).length;
          if(isInRegList>0){
            // 注册过了
            res.json({
              code:"1001",
              message:"您已经注册过了！"
            })
          }else{
            // 注册成功
            res.json({
              code:"0000",
              message:"注册成功"
            })
          }
        })

        const tokenkey = 'vueclass'
        // 登录接口
        app.get("/api/Login",(req,res)=>{
          const {username,password} = req.query;
          if(username == 'brookyang'){
            if(password == '123456'){
              res.json({
                code:'0000',
                message:'登录成功',
                tokenkey:tokenkey+"_"+username+"_"+(new Date().getTime()+60*60*1000)
              })
            }else{
              res.json({
                code:'1111',
                message:'密码错误'
              })
            }
            
          }else{
            res.json({
              code:'1111',
              message:'登录失败',
            })
          }
        })

      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
