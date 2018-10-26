<template>
    <div ref="scroll" class="scroll">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
      name:'scroll',
      data(){
          return{
              upText:'',
              downText:''
          }
      },
      props:{
            probeType:{
                type:Number,
                default:1
            },
            click:{
                type:Boolean,
                default:true
            },
            datas:{
                type:Array,
                default:()=>[]
            },
            ScrollX:{
                type:Boolean,
                default:false
            },
            ScrollY:{
                type:Boolean,
                default:true
            },
        },
        mounted(){
        let wrapper =this.$refs.scroll;
        this.scroll= new Bscroll(wrapper,{
            click:this.click,
            probeType:this.probeType
        })
        this.scroll.on('scroll',position=>{
            this.$emit('scroll',position)
        })
    },
     methods:{
        scrollToElement(...args){
            this.scroll && this.scroll.scrollToElement(...args)
        }
    }
}
</script>

<style>

</style>
