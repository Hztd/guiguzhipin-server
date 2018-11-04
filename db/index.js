//引入mongoose模块
const mongoose = require('mongoose');
module.exports = new Promise(resolve,reject =>{
    //链接mongoose数据库
    mongoose.connect('mongodb://localhost:27017/guiguzhipin',{useNewUrlParser:true});
    //绑定事件监听
    mongoose.connect.once('oppen',err =>{
        if (!err) {
            console.log('数据库链接成功了~');
            resolve();
        }else {
            console.log(err);
            reject();
        }
    })
)}