var exp = require('express');
var router = exp.Router();
var db = require('../db');
// 添加香水书籍
router.post('/add', function (req, res) {
    console.log(req.body)
    new db.Book(req.body).save().then(function () {
        res.send({
            code: 'success',
            msg: "添加成功"
        })
    })
});
// 修改香水书籍
router.post('/editor/:id', function (req, res) {
    var id = req.params.id;
    db.Book.findByIdAndUpdate(id, req.body, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "修改成功"
            })
        }
    })
});
// 删除香水书籍
router.post('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.Book.findByIdAndRemove(id, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "删除成功"
            })
        }
    })
});
// 获取所有香水书籍(分页)
router.get('/allBook/:pageIndex/:pageSize', function (req, res) {
    var pageIndex = req.params.pageIndex;
    var pageSize = req.params.pageSize;
    db.Book.find().then(function (data) {
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
router.get('/allBook', function (req, res) {
    db.Book.find().then(function (data) {
        res.send({
            code: 'success',
            data: data
        })
    }).catch(function (err) {
        console.log(err)
    })
})
// 编辑获取香水书籍
router.get('/BookOne/:id', function (req, res) {
    var id = req.params.id;
    db.Book.findById(id, function (err, data) {
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