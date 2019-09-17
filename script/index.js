const axios = require('axios')
var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
const {renderApiFuns,renderApiConsts}= require('./apiGenerate')
var openbrowser = require('openbrowser');
/**
/* @author Tangyuhui
/* @desc 得到apidoc
/* @Date 2019-09-16 16:58:39 星期一
*/
function getApiDoc(docUrl){
    return axios.get(docUrl).then((res)=>{
        return res.data
    }).catch(err=>{
        return Promise.reject(err)
    })
}

module.exports.run = function(port=3000){
//创建一个Express的程序
    var app = express()
    app.use(express.static(path.join(__dirname,'..','public')))
    console.log(path.join(__dirname, '..','public'))
    app.use(bodyParser.json()); // for parsing application/json
    //设置允许跨域访问该服务.
    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next();
    }); 

    app.get('/', function (req, res) {
        res.redirect('/index.html');
    })
    // POST method route
    app.post('/parseApi', function (req, res) {
        if(req.body){
        const {apiDoc:apiDocUrl} =  req.body
        getApiDoc(apiDocUrl).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.json(err)
        })
        }else{
            res.json(null);
        }
    })
    app.post('/generateApi',function(req,res){
        const {apiList} = req.body
        const apiConsts =  renderApiConsts(apiList)
        const apiFuncs = renderApiFuns(apiList)
        res.json({apiFuncs,apiConsts})
    })
  
  app.listen(port,function(){
        // Open browser
    const url = `http://localhost:${port}`
    console.log(`Ready on ${url}`)
    openbrowser(url)
 });
}