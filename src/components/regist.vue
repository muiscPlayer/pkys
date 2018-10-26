<template>
    <div class="box">
        <h1>用户注册</h1>
        <div class="red">{{title}}</div>
        <div>
            <input type="text" placeholder="用户名" v-model="username">
        </div>
        <div>
            <input type="password" placeholder="密码" v-model="passwd1">
        </div>
        <div>
            <input type="password" placeholder="确认密码" v-model="passwd2">
        </div>
        <div>
            <label>
                <input type="radio" class='wh' name="1" v-model="pks" value="男">男
            </label>
            <label>
                <input type="radio"  class='wh' name="1" v-model="pks" value="女">女
            </label>
         </div>
         <div>
             爱好：
              <label>
                 <input class='wh' type="checkbox" name="" @click="all($event,pksArr)" :checked="arr.length==2">全选
             </label>
             <label v-for="(itme,index) in pksArr" :key="index">
                 <input class='wh' type="checkbox" name="" :value="itme.txt" v-model='arr'>
                 {{itme.txt}}
             </label>
         </div>
         <div>
             <select name="" id="" class="city" v-model="city">
                 <option value="">选择城市</option>
                 <option value="山西">山西</option>
                 <option value="北京">北京</option>
                 <option value="新疆">新疆</option>
                 <option value="西藏">西藏</option>
                 <option value="内蒙古">内蒙古</option>
             </select>
         </div>
         <div>
            <label>
                <input type="checkbox" v-model="read" class="wh">条款已阅读
            </label>
        </div>
        <button type="button" class="btn" @click="regist" :class="{disabled:!read}" :disabled="!read">注册</button>
        
        <p class="bottom">
            <router-link to="/login">已有账号，去登陆</router-link>
        </p>
        
    </div>
</template>
<script>
    import axios from 'axios'
export default {
        data(){
            return {
                arr:[],
                username:'',
                passwd1:'',
                title:'',
                passwd2:'',
                read:'',
                pks:'',
                city:'',
                xingqu:[
                     {
                        "val":"1",
                        "txt":'哈哈1'
                    },
                     {
                        "val":"2",
                        "txt":'哈哈2'
                    }
                ],
                pksArr:[
                    {
                        "val":"1",
                        "txt":'足球'
                    },
                     {
                        "val":"2",
                        "txt":'篮球'
                    }
                ]
            }
        },
        methods: {
            all(ev,a){
                console.log(ev.target.checked)
                if(ev.target.checked){
                  a.forEach((element,index) => {
                        this.arr.push(element.txt)
                    });
                }else{
                  this.arr=[]
                }

            },
            regist () {
                if(this.passwd1==this.passswd2){
                    
                }
                axios.post('/apis/regist',{
                    'username':this.username,
                    'passwd1':this.passwd1,
                    'passwd2':this.passwd2,
                    'read':this.read,
                    'pks':this.pks,
                    'pksArr':this.arr,
                    "city":this.city
                }).then(res=>{
                    if(res.data.code===0){
                        setTimeout(()=>{
                            this.$router.push('/login')
                        },2000)
                    }
                     this.title=res.data.msg
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
        display: inline-block;
        outline: 0ch;
        width: 80vw;
        height:40px;
        margin-bottom:35px;
        border:none;
        border:1px solid gray;
    }
    .box .wh{
        width: 20px;
        height: 20px;
    }
    .box .btn{
        outline: none;
        border:none;
        width:80vw;
        height:40px;
        background:rgb(78, 106, 233);
        color:beige;
        font-size:24px;
    }
    .btn.disabled{
        background: #999;
       
    }
    .box .bottom{
        margin-top:20px; 
    }
   .box .chec{
        width: 20px;
        height: 20px;
    }
    .city{
        width: 100px;
        height: 30px;
        margin-bottom: 30px;
    }
</style>


