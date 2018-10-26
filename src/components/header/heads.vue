<template>
    <div class="wrap">
        <div class="heads">
            <i class="iconfont icon-bofang"></i>
            <span>music player</span>
            <i class="iconfont icon-geren"></i>
        </div>
        <ul class="nav">
            <li class="bor"><router-link to="/homePage">推荐</router-link></li>
            <li><router-link to="/singer">歌手</router-link></li>
            <li><router-link to="/Ranking">排行</router-link></li>
            <li><router-link to="/grabble">搜索</router-link></li>
        </ul>
    </div>
   
</template>

<script>
export default {
    name:'Heads'
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
ul{list-style: none;}
a{
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #929292;
}
    .wrap{
        width: 100vw;
        height: 90px;
        background: #282828;
        padding: 8px 0;
    }
    .heads{
        width: 100%;
        text-align: center;
        color: #ffb500;
        font-size: 26px;
    }

    .heads i:nth-child(3){
        float: right;
        margin-right:10px;
    }
    .nav{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
    }
    .nav .router-link-exact-active{
        color: #ffb500;
        border-bottom: 3px solid  #ffb500;
    }
    .nav li{
        padding: 4px 0;
    }
    .nav li a{
        border-bottom:3px solid #282828;
    } 
</style>
