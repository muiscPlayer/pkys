import axios from 'axios'
export default{
    Addprice({commit},payload){
        commit('Addprice',payload)
    },
    setArr({commit}){
        axios('./static/1.txt').then(res=>{
            commit('setArr',res.data)
        }).catch(err=>{
            console.log(err,'错了')
        })
    }
}