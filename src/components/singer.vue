<template>
    <div class="wrap">
        <heads></heads>
        <scroll class="bigBox" :probe-type="3" ref="scroll" @scroll="scrolls">
        <div>
            <div  v-for="(items,index) in datas" :key="index" ref="fo">
                <p class="headN">{{items.title}}</p>
                <div class="smallBox" v-for="(pky,index) in items.tiems" :key="index">
                    <img v-lazy="pky.src" alt="">
                    <p>{{pky.name}}</p>
                </div>
            </div>
        </div>
        </scroll>
        <scroll class="list" :probe-type="3">
            <div>
                <ul>
                    <li v-for="(items,index) in datas" :key="index" :class="{active:index==currentIndex}" @click="scroll(index)">{{items.title}}</li>
                </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    "name":"singer",
    data(){
        return {
            arr:'',
            data:[],
            datas:[],
            scrollIndex:0,
            scrollY:'',
            foodsListHeight:[]
        }
    },
    async mounted(){
      this.arr = (await axios.get('/apis/data2')).data.data.list
      let data = this.arr
      let map = {
          hot:{
              title:'热门',
              tiems:[]
          }
      }
      for(let i=0;i<10;i++){
          map.hot.tiems.push({
              'name':data[i].Fsinger_name,
              'id':data[i].Fsinger_id,
              'src':`https://y.gtimg.cn/music/photo_new/T001R300x300M000${data[i].Fsinger_mid}.jpg`
          })
      }
      for(let i=0;i<data.length;i++){
            let key =null;
            key = data[i].Findex
            if(!map[key]){
                map[key]={
                    title:key,
                    tiems:[]
                }
            }
            map[key].tiems.push({
                'name':data[i].Fother_name,
                'id':data[i].Fsinger_id,
                'src':`https://y.gtimg.cn/music/photo_new/T001R300x300M000${data[i].Fsinger_mid}.jpg`
            })
            setTimeout(()=>{
                this._calcFoodsListHeight()
            },20)   
        }
        let hot =[]
        let ret = [];
        for(let key in map){
            let val =map[key]
            if(val.title.match(/[a-zA-Z]/)){
                ret.push(val)
            }else if(val.title==='热门'){
                hot.push(val)
            }
        }
        ret.sort((a,b)=>{
            return a.title.charCodeAt() - b.title.charCodeAt()
        })
        this.datas=hot.concat(ret)
        console.log(this.datas)
    },
    methods:{
        scroll(index){
            let foodsList = this.$refs['fo'];
            this.$refs.scroll.scrollToElement(foodsList[index],1000)
        },
        scrolls(nevVal){
            this.scrollY=Math.round(Math.abs(nevVal.y))
            console.log(1,this.scrollY)
        },
        _calcFoodsListHeight(){
            this.$nextTick(()=>{
                let height = 0;
                let foods =this.$refs['fo'];
                this.foodsListHeight.push(height)
                for(let i=0;i<foods.length;i++){
                    height+=foods[i].clientHeight
                    this.foodsListHeight.push(height)
                }
            })
        }
    },
    computed:{
          currentIndex(){
              for(let i=0;i<this.foodsListHeight.length;i++){
                  let currentHeight=this.foodsListHeight[i]
                  let nextHeight=this.foodsListHeight[i+1]
                  if(currentHeight<=this.scrollY && this.scrollY<nextHeight){
                      return i
                   }
                }
                return 0
            }
        },
}
</script>

<style scoped>
    .wrap{
        width: 100vw;
        height: 100vh;
        background: #282828;
        position: relative;
    }
    .bigBox{
        height: 650px;
        color:#898989;
        font-weight:600;
        overflow: hidden;
    }
    .headN{
        width: 95vw;
        height: 40px;
        line-height: 40px;
        background: #363636;
        padding-left: 5vw;
        margin-top: 10px;
    }
    .smallBox{
        width:93vw;
        padding-left:7vw;
        display: flex;
        margin-top:20px;
    }
    .smallBox img{
        display: block;
        width: 66px;
        height: 66px;
        border-radius: 50%;
    }
    .smallBox p{
        line-height: 60px;
        margin-left:20px;
    }
    .list{
        position: absolute;
        bottom:-20px;
        right:0;
        background:#1c1c1c;
        color:#898989;
        width: 30px;
        padding: 20px 0;
        text-align: center;
        border-radius: 15px;
        font-weight: 600;
    }
    .list li{
        margin-bottom: 4px;
        width: 30px;
        height: 20px;
        overflow: hidden;
        
    }
    .list li.active{
        color:#ffff36;
    }
</style>
