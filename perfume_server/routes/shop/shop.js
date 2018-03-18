var exp = require('express');
var router = exp.Router();
var db = require('../../db');
// 添加商店
router.post('/add', function (req, res) {
    console.log(req.body)
    var shop = new db.Shop(req.body)
    shop.save().then(function () {
        res.send({
            code: 'success',
            msg: "保存成功"
        })
    })
});
// 导出路由
module.exports = router;