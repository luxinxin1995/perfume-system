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
    logo: {
        type: String,
        default: ''
    }
})
// 香水原料列表
var materialSchema = new db.Schema({
    animal: {
        type: String,
        default: ''
    },
    animaldesc: {
        type: String,
        default: ''
    }
})
// 香水原料列表2
var material2Schema = new db.Schema({
    plant: {
        type: String,
        default: ''
    },
    plantdesc: {
        type: String,
        default: ''
    }
})
// 香水分类列表
var classifySchema = new db.Schema({
    odortype: {
        type: String,
        default: ''
    },
    flavour: {
        type: String,
        default: ''
    },
    concentration: {
        type: String,
        default: ''
    },
    rank: {
        type: String,
        default: ''
    }
})
// 香水书籍列表
var bookSchema = new db.Schema({
    name: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    }
})
// 香水电影列表
var movieSchema = new db.Schema({
    name: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    classify: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    }
})
// 香水热门话题
var topicSchema = new db.Schema({
    title: {
        type: String,
        default: ''
    },
    detail: {
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
    }
})
// 今日之香
var todaySchema = new db.Schema({
    title: {
        type: String,
        default: ''
    },
    detail: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    }
})
var User = db.model('User', userSchema);
var Brand = db.model('Brand', brandSchema);
var Material = db.model('Material', materialSchema)
var Material2 = db.model('Material2', material2Schema)
var Classify = db.model('Classify', classifySchema)
var Book = db.model('Book', bookSchema)
var Movie = db.model('Movie', movieSchema)
var Topic = db.model('Topic', topicSchema)
var Article = db.model('Article', articleSchema)
var Today = db.model('Today', todaySchema)

module.exports = { User, Brand, Material, Material2, Classify, Book, Movie, Topic, Article, Today}