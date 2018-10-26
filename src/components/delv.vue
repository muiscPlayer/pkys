<template>
    <div class="box">
        <h1>用户登录</h1>
        <div class="red">{{title}}</div>
        <input type="text" placeholder="用户名" v-model="username">
        <div class="kong"></div>
        <input type="password" placeholder="密码" v-model="passwd"><br>
        <input type="text">
        <p v-show = 'flag' @click="getp">获取验证码</p>
        <p v-show ='!flag'>{{num}}s从新获取验证码</p>
        <button class="btn" @click="login">登录</button>
        <h3 class="bottom">
            <router-link to="/regist">还没有账号,现在就去注册</router-link>
        </h3>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
        data(){
            return {
                username:'',
                passwd:'',
                title:'',
                flag:true,
                num:60
            }
        },
        methods: {
            getp(){
                let patt = /^1[3|5|7|8]\d{9}/
                console.log(1)
                if(this.username==''){
                    this.title = '用户名不能为空'
                }else if( patt.test(this.username)){
                    this.flag=false
                    axios.post('/apis/getp',{
                        'username':this.username
                    }).then((res)=>{
                        console.log(res.data)
                    })
                    let timer = setInterval(()=>{
                        this.num--
                        if(this.num==-1){
                            clearInterval(timer)
                            this.num=60
                            this.flag=true
                        }
                    },1000)
                }
            },
            login () {
                axios.post('/apis/login',{
                    'username':this.username,
                    'passwd':this.passwd
                }).then(res=>{
                    console.log('aa',res.data)
                    if(res.data.code==1){
                        this.title=res.data.msg
                    }else if(res.data.code==2){
                        this.title=res.data.msg
                    }else{
                        this.title=res.data.msg
                        if(res.data.code==0){
                           window.localStorage.setItem("user",this.username)
                            setTimeout(()=>{
                                this.$router.push('/homePage')
                            },2000)
                        }
                    }
                }).catch(err=>{
                    
                    console.log(err);
            })
        }
    }
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .box{
        width:80vw;
        height:100%;
        padding: 0 10vw;
    }
    .box h1{
        width:50%;
        height:40px;
        margin:0 auto;
    }
    .box .red{
        width:100%;
        height:40px;
        color:red;
        line-height:40px;
    }
    .box input{
        outline: none;
        border:none;
        border:1px solid gray;
        width: 100%;
        height:30px;
        margin:0 auto;
    }
    .box .btn{
        outline: none;
        border:none;
        width:80vw;
        height:40px;
        margin-top:24px;
        background:rgb(78, 106, 233);
        color:beige;
        font-size:24px;
    }
    .box .bottom{
        margin-top:20px; 
    }
    .box .kong{
        width:100%;
        height:30px;
    }
    p{
        width: 160px;
        height: 30px;
        border:1px solid red;
        text-align: center;
        line-height: 30px;
    }
</style>


