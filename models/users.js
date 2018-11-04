//引入mongoose模块
const mongoose = require('mongoose');
//获取Schema
const Schema = mongoose.Schema;
//创建约束对象
const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require: true,
    },
    type:{
        type:String,
        require:true
    },
})
//创建模型对象
const Users = mongoose.model('Users',userSchema);
module.exports = Users;