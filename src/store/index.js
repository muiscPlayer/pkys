import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
        price:11111,
        arr:[]
	},
    getters
    // :{
	// 	getprice(state){
	// 		return state.price
    //     },
    //     getArr(state){
    //         return state.arr
    //     }
    // },
    ,
    mutations
    // :{
	// 	Addprice(state,payload){
	// 		state.price*=payload
    //     },
    //     setArr(state,payload){
    //         state.arr =payload
    //     }
    // },
    ,
    actions
    // :{
	// 	Addprice({commit},payload){
	// 		commit('Addprice',payload)
    //     },
    //     setArr({commit}){
    //         axios('./static/1.txt').then(res=>{
    //             commit('setArr',res.data)
    //         }).catch(err=>{
    //             console.log(err,'错了')
    //         })
    //     }
	// }
    
})
