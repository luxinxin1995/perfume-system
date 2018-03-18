// 上传文件的配置
const multer = require('multer');

var storage = multer.diskStorage({
    destination: './public/images',
    filename: function (req, file, cb) {
        console.log('req',req)
        console.log(req.cookies.username)
        var username = req.cookies.username;
        cb(null, username + '.jpg')
    }
})

module.exports = multer({ storage })