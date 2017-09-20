const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config  = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) =>{
    if(err){
        console.log(' 데이터베이스 연결이 안됨니다. ' .err);
    }else{
        console.log(config.secret);
        console.log(' 데이터베이스 연결이 되었습니다. :  '+ config.db);
    }
});

app.use(express.static(__dirname+'/client/dist/'));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8080 , () => {
    console.log(' 8080 포트로 연결 대기중 ');
});