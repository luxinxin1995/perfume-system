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
var User = db.model('User',userSchema);
module.exports = {User}