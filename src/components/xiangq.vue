<template>
    <transition name="myX">
        <div class="wrap">
            <div class="heads">
                <div class="heads_a">
                    <i class="back" @click="back">&lt;</i>
                    <p>{{arrs.dissname}}</p>
                </div>
                <div class="heads_b">
                    <i class="iconfont icon-bofang"></i>
                    <p>随机播放全部</p>
                </div>
                <div class="shadow"></div>
                <img v-lazy="arrs.logo" alt="">
            </div>
            <scroll class="footerBox">
                <div>
                    <div class="boxs" v-for="(items,index) in (arrs.songlist)" :key="index">
                        <p>{{items.songname}}</p>
                        <p>{{items.albumname}}·{{items.songname}}</p>
                    </div>
                </div>
            </scroll>
        </div>
    </transition>
</template>

<script>
import axios from 'axios'
export default {
    data (){
        return {
            arrs:""
        }
    },
    props:{
       arr:{
            type:Array,
            default(){
                return []
            }
        } 
    },
    created(){
        console.log(this.arr)
        console.log(this.$route.params.id);
    },
    methods:{
        back(){
            console.log(1)
            this.$router.back()
        }
    },
   async mounted(){
        this.arrs=(await axios.get('/apis/data1')).data.cdlist[0]
    }
}
</script>

<style scoped>
    .myX-enter,.myX-leave-to{
       transform: translateX(100vw) rotate(0);
    }
    .myX-enter-active,.myX-leave-active{
        transition: all .8s;
    }
    .myX-enter-to,.myX-leave{
        transform: translateX(0) rotate(0);
        opacity: 1;
    }
    .wrap{
        width: 100vw;
        height: 100vh;
        background: #282828;
        color:white;
        font-size: 20px;
        font-weight: 600;
        position: fixed;
        top:0;left:0;
        overflow: hidden;
        z-index: 1;
    }
    .heads{
        height: 40vh;
        width: 100vw;
        position: relative;
        text-align: center;
    }
    .heads img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .heads .heads_a{
        width: 100vw;
        position: absolute;
        top:10px;
        left:50%;
        margin-left: -50vw;
    }
    .heads_a .back{
        display: inline-block;
        width: 40px;
        height: 20px;
        color: rebeccapurple;
        font-size:36px;
        font-style: normal;
        position: absolute;
        left:20px;
        top:-10px;
        z-index: 2133;
    }
    .heads .heads_b{
        width: 170px;
        padding: 6px 0;
        padding-bottom: 14px;
        position: absolute;
        bottom:26px;
        left:50%;
        margin-left:-85px;
        border-radius: 26px;
        border:3px solid #e4b63d;
        color: #e4b63d;
        text-align: center;
        font-size: 16px;
    }
     .heads .heads_b i{
        position: relative;
        top:4px;
     }
    .heads .heads_b p{
        display: inline-block;
        color:#ffce30;
    }
    .heads .shadow{
        position: absolute;
        top:0;left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0, 0,.1);
    }
    .boxs p:nth-child(2){
        color:#828282;
    }
    .footerBox{
        padding:0 30px;
        height: 58vh;
        overflow: hidden;
    }
    .footerBox .boxs{
        margin-top:30px;
    }
</style>
