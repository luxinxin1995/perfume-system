var exp = require('express');
var router = exp.Router();
var db = require('../../db');
// 添加动物原料
router.post('/add', function (req, res) {
    console.log(req.body)
    new db.Material(req.body).save().then(function () {
        res.send({
            code: 'success',
            msg: "添加成功"
        })
    })
});
// 修改动物原料
router.post('/editor/:id', function (req, res) {
    var id = req.params.id;
    db.Material.findByIdAndUpdate(id, req.body, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "修改成功"
            })
        }
    })
});
// 删除动物原料
router.post('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.Material.findByIdAndRemove(id, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "删除成功"
            })
        }
    })
});
// 获取所有动物原料(分页)
router.get('/allMaterial/:pageIndex/:pageSize', function (req, res) {
    var pageIndex = req.params.pageIndex;
    var pageSize = req.params.pageSize;
    db.Material.find().then(function (data) {
        var result = data.slice(parseInt((pageIndex - 1) * pageSize), Number(parseInt((pageIndex - 1) * pageSize) + parseInt(pageSize)))
        var pageCount = Math.ceil(data.length / pageSize);
        res.send({
            code: 'success',
            data: result,
            pageCount: pageCount,
            length: data.length
        })
    }).catch(function (err) {
        console.log(err)
    })
})
router.get('/allMaterial', function (req, res) {
    db.Material.find().then(function (data) {
        res.send({
            code: 'success',
            data: data
        })
    }).catch(function (err) {
        console.log(err)
    })
})
// 编辑获取动物原料
router.get('/MaterialOne/:id', function (req, res) {
    var id = req.params.id;
    db.Material.findById(id, function (err, data) {
        if (!err) {
            console.log(data)
            res.send({
                code: 'success',
                data: data
            })
        }
    })
})
// 导出路由
module.exports = router;