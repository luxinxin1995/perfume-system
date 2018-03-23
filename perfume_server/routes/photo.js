var exp = require('express');
var router = exp.Router();
var db = require('../db');
var multer = require('multer');

// 配置存储信息(上传图片)
var storage = multer.diskStorage({
    // upload文件夹会自动创建，设置上传文件存储路径
    destination: '../public/images',
    // 给上传的文件重命名
    filename: function (req, file, callback) {
        // 获取后缀名
        var formatName = file.originalname.split('.');
        callback(null, file.fieldname + '-' + Date.now() + '.' + formatName[formatName.length - 1]);
    }
})
// 根据配置信息，创建上传对象
var upload = multer({ storage: storage });
// 上传单张图片
// single(name) name是input的name
router.post('/singlefile', upload.single('photo'), (req, res) => {
    res.status(200).json({ code: "success", message: "上传成功" });
})
// 上传多张图片 array(filename,maxCount);
router.post('/multiplefile', upload.array('photos', 9), (req, res) => {
    res.status(200).json({ code: "success", message: "上传成功" });
})
// 导出路由
module.exports = router;