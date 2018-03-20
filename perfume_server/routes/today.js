var exp = require('express');
var router = exp.Router();
var db = require('../db');
// 添加今日之香
router.post('/add', function (req, res) {
    console.log(req.body)
    new db.Today(req.body).save().then(function () {
        res.send({
            code: 'success',
            msg: "添加成功"
        })
    })
});
// 修改今日之香
router.post('/editor/:id', function (req, res) {
    var id = req.params.id;
    db.Today.findByIdAndUpdate(id, req.body, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "修改成功"
            })
        }
    })
});
// 删除今日之香
router.post('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.Today.findByIdAndRemove(id, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "删除成功"
            })
        }
    })
});
// 获取所有今日之香(分页)
router.get('/allToday/:pageIndex/:pageSize', function (req, res) {
    var pageIndex = req.params.pageIndex;
    var pageSize = req.params.pageSize;
    db.Today.find().then(function (data) {
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
// 编辑获取今日之香
router.get('/TodayOne/:id', function (req, res) {
    var id = req.params.id;
    db.Today.findById(id, function (err, data) {
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