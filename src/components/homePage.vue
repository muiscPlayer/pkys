<template>
    <div id="box">
       <heads></heads>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,index) in arr' :key="index">
                    <img v-lazy="item.picUrl" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
         <scroll class="bigBox">
            <div>
                <div class="singer">热门歌单推荐</div>
                <div class="box" v-for="(items,index) in arr1" :key="index" @click="setXQ(items)">
                    <img v-lazy="items.imgurl" alt=""  :arr="items">
                    <div class="smallBox">
                        <p >{{items.creator.name}}</p>
                        <p>{{items.dissname}}</p>
                    </div>
                </div>
            </div>
        </scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
import '../../node_modules/swiper/dist/css/swiper.min.css';
export default {
    name:"homePage",
    data(){
        return {
            arr:null,
            arr1:null
        }
    },
    methods:{
        setXQ(newVal){
            this.$router.push({
                // path:`/homePage/xiangq:${newVal.dissid}`
                path:`/homePage/xiangq:${newVal.dissid}`
            })
        }
    },
    mounted(){
        new Swiper('.swiper-container', {})
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,
            observer:true,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            observer: true,
            grabCursor: true
        })
        axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540275035465'
).then(res=>{
            this.arr = res.data.data.slider
        })
        axios.get('/apis/data').then(res=>{   
            this.arr1 = res.data.data.list
        })
    }
}
</script>

<style>
   
    #box{
        width: 100vw;
        height: 100vh;
        background: #282828;
        overflow: hidden;
    }
    .swiper-container{
        width: 100vw;
        height: 200px;
    }
    .swiper-wrapper img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet-active {
        opacity: 1;
        background:white;
        width: 18px;
        height: 10px;
    }
    .singer{
        width: 100vw;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-left: -20px;
        color:#dec806;
        font-size: 22px;
        font-weight: 700;
    }
    .bigBox{
        width: 100vw;
        height: 56vh;
        padding: 0 20px;
        overflow: hidden;
    }
    .box{
       width: 100%;
       display: flex;
       flex-direction: row;
       margin-bottom: 20px;
    }
    .box img{
        display: block;
        width: 60px;
        height: 60px;

    }
    .smallBox{
        margin-left:18px
    }
    .smallBox p:nth-child(1){
        font-weight: 600;
        color: #fff;
    }
    .smallBox p:nth-child(2){
        font-weight: 600;
        color: #4e4e4e;
        padding: 10px 0;
    }
</style>

