var exp = require('express');
var router = exp.Router();
var db = require('../db');
// 添加热门文章
router.post('/add', function (req, res) {
    new db.Article(req.body).save().then(function () {
        res.send({
            code: 'success',
            msg: "添加成功"
        })
    })
});
// 修改热门文章
router.post('/editor/:id', function (req, res) {
    var id = req.params.id;
    db.Article.findByIdAndUpdate(id, req.body, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "修改成功"
            })
        }
    })
});
// 删除热门文章
router.post('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.Article.findByIdAndRemove(id, function (err) {
        if (!err) {
            res.send({
                code: "success",
                msg: "删除成功"
            })
        }
    })
});
// 获取所有热门文章(分页)
router.get('/allArticle/:pageIndex/:pageSize', function (req, res) {
    var pageIndex = req.params.pageIndex;
    var pageSize = req.params.pageSize;
    db.Article.find().then(function (data) {
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
// 编辑获取热门文章
router.get('/ArticleOne/:id', function (req, res) {
    var id = req.params.id;
    db.Article.findById(id, function (err, data) {
        if (!err) {
            res.send({
                code: 'success',
                data: data
            })
        }
    })
})
// 导出路由
module.exports = router;