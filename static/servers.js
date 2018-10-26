const express=require("express");    //引入express模块
const data = require('./hotDatas.json')
const data1 = require('./songList.json')
const data2 = require('./singer.json')
const app=express(); 
const fs=require("fs");              //引入fs模块
// const url=require("url");

var bodyParser = require('body-parser')               //实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000,()=>{
    console.log('success')
})    // 指定端口;
app.get('/',function(req, res){      //匹配主页的get请求
    res.send("首页")
})
//推荐
app.get('/data',function(req,res){
    res.send(JSON.stringify(data))
})
//推荐
app.get('/data1',function(req,res){
    res.send(JSON.stringify(data1))
})
//歌手
app.get('/data2',function(req,res){
    res.send(JSON.stringify(data2))
})
//登录
app.post("/getp",function(req,res){
    res.send({
        'num':'481197'
    })
})
//登录;
app.post("/login",function(req,res){
    console.log(req.body)
    if(req.body.username === ''|| req.body.passwd === '' ){
        res.send({
            'code':1,
            'msg':'用户名或密码不能为空'
        })
    }else if(req.body.username !== '13211112222' || req.body.passwd !== '123456'){
        res.send({
            'code':2,
            'msg':'用户名或密码错误'
        })
    }else{
        res.send({
            'code':0,
            'msg':'登录成功'
        })
    }
})
//注册
app.post("/regist",function(req,res){
    console.log(req.body)
    if(req.body.username===''){
        res.send({
            code:1,
            msg:'用户不能为空'
        })
    }else if(req.body.passwd1===''){
        res.send({
            code:2,
            msg:'密码不能为空'
        })
    }else if(req.body.passwd1!==req.body.passwd2){
        res.send({
            code:3,
            msg:'两次输入密码不一致'
        })
    }else{
        res.send({
            code:0,
            msg:'注册成功'
        })
    }
    
})