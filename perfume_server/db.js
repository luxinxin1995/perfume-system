// 加载mongoose模块
const db = require('mongoose');
db.Promise = global.Promise;
// 连接数据库
db.connect('mongodb://localhost:27017/perfume_db',{
    promiseLibrary:global.Promise
});
// 检测数据库的连接状态
db.connection.on('open',function(){
    console.log('连接数据库成功')
})
db.connection.on('error',function(err){
    console.log('连接数据库失败'+err)
})
// 用户表
var userSchema = new db.Schema({
    username: {
        type: String,
        default: ''
    },
    pass: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    }
})
// 商店表
var shopSchema = new db.Schema({
    name:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    classify:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        default:''
    },
    desc:{
        type:String,
        default:''
    },
    picture:{
        type:String,
        default:''
    }
})
// 商品表
var goodsSchema = new db.Schema({
    name:{
        type:String,
        default:''
    },
    capacity:{
        type:String,
        default:''
    },
    price:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    price:{
        type:String,
        default:''
    },
    expiration:{
        type:String,
        default:''
    },
    shopPhoto:{
        type:Array,
        default:''
    }
})
var User = db.model('User',userSchema);
var Shop = db.model('Shop',shopSchema);
var Goods = db.model('Goods',goodsSchema);
module.exports = {User,Shop,Goods}