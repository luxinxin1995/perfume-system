// 加载mongoose模块
const db = require('mongoose');
db.Promise = global.Promise;
// 连接数据库
db.connect('mongodb://localhost:27017/perfume_db', {
    promiseLibrary: global.Promise
});
// 检测数据库的连接状态
db.connection.on('open', function () {
    console.log('连接数据库成功')
})
db.connection.on('error', function (err) {
    console.log('连接数据库失败' + err)
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
    checkPass: {
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
    },
    message: {
        type: String,
        default: ''
    },
    MessageDate: {
        type: Date,
        default: Date.now()
    },
    jurisdiction: {
        type: Number,
        default: 0
    },
    registDate: {
        type: Date,
        default: Date.now()
    }
})
// 品牌表
var brandSchema = new db.Schema({
    ChineseName: {
        type: String,
        default: ''
    },
    EnglishName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    },
    classify: {
        type: String,
        default: ''
    }
})
// 香水产品表
var productSchema = new db.Schema({
    productName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    // 香调
    fragrance: {
        type: String,
        default: ''
    },
    // 前调
    topNotes: {
        type: String,
        default: ''
    },
    // 中调
    middleNotes: {
        type: String,
        default: ''
    },
    // 后调
    lowNote: {
        type: String,
        default: ''
    },
    // 属性(男香/女香/中性香)
    property: {
        type: String,
        default: ''
    },
    photo: {
        type: String,
        default: ''
    },
    // 调香师
    flavorist: {
        type: String,
        default: ''
    },
    // 评价
    comment: {
        type: String,
        default: ''
    },
    // 评价时间
    commentDate: {
        type: Date,
        default: Date.now()
    }
})
// 香水原料
var materialSchema = new db.Schema({
    // 动物原料
    animal: {
        type: String,
        default: ''
    },
    // 动物原料介绍
    animaldesc: {
        type: String,
        default: ''
    },
    // 植物原料
    plant: {
        type: String,
        default: ''
    },
    // 植物原料介绍    
    plantdesc: {
        type: String,
        default: ''
    }
})
// 香水知识表
var classifySchema = new db.Schema({
    // 香型
    odortype: {
        type: String,
        default: ''
    },
    // 香型介绍
    odortypeDesc: {
        type: String,
        default: ''
    },
    // 味道
    flavour: {
        type: String,
        default: ''
    },
    // 味道介绍
    flavourDesc: {
        type: String,
        default: ''
    },
    // 浓度
    concentration: {
        type: String,
        default: ''
    },
    // 浓度介绍
    concentrationDesc: {
        type: String,
        default: ''
    },
    // 等级
    rank: {
        type: String,
        default: ''
    },
    // 等级介绍
    rankDesc: {
        type: String,
        default: ''
    }
})
// 香水热门文章
var articleSchema = new db.Schema({
    title: {
        type: String,
        default: ''
    },
    detail: {
        type: String,
        default: ''
    },
    photo: {
        type: String,
        default: ''
    }
})
// 公告
var todaySchema = new db.Schema({
    title: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
var User = db.model('User', userSchema);
var Brand = db.model('Brand', brandSchema);
var Product = db.model('Product', productSchema);
var Material = db.model('Material', materialSchema);
var Classify = db.model('Classify', classifySchema);
var Article = db.model('Article', articleSchema)
var Today = db.model('Today', todaySchema)

module.exports = { User, Brand, Product, Material,Classify, Article, Today }