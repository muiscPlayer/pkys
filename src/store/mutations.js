export default{
    Addprice(state,payload){
        state.price*=payload
    },
    setArr(state,payload){
        state.arr =payload
    }
}