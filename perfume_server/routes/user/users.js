var express = require('express');
var router = express.Router();
var db = require('../../db')

router.get('/findId/:username', function (req, res) {
    var username = req.params.username;
    db.User.find({
        username: username
    }, function (err, data) {
        if (!err) {
            if (data.length != 0) {
                console.log(data[0]._id)
                var _id = data[0]._id;
                res.send({
                    code: 'success',
                    id: _id
                })
            }
        }
    })
});
// 获取所有用户
router.get('/findAll/:pageIndex/:pageSize', function (req, res) {
    var pageIndex = req.params.pageIndex;
    var pageSize = req.params.pageSize;
    db.User.find(function (err, data) {
        if (!err) {
            var result = data.slice(parseInt((pageIndex - 1) * pageSize), Number(parseInt((pageIndex - 1) * pageSize) + parseInt(pageSize)))
            var pageCount = Math.ceil(data.length / pageSize);
            res.send({
                code: 'success',
                data: result,
                pageCount: pageCount,
                length: data.length
            })
        } else {
            console.log(err)
        }
    })
});
// 获取所有用户
router.get('/All', function (req, res) {
    db.User.find(function (err, data) {
        if (!err) {
            res.send({
                code: 'success',
                data: data
            })
        } else {
            console.log(err)
        }
    })
});
// 提交个人信息
router.post('/editorInfo/:id', function (req, res) {
    var _id = req.params.id;
    db.User.findByIdAndUpdate({
        _id: _id
    }, req.body, function (err) {
        if (!err) {
            res.send({
                code: 'success',
                msg: '修改成功'
            });
        }
    })
});
router.get('/getInfo/:id', function (req, res) {
    var _id = req.params.id;
    db.User.findById(_id, function (err, data) {
        if (!err) {
            res.send({
                code: 'success',
                data: data
            })
        }
    })
});
router.post('/changePassword/:id', function (req, res) {
    var _id = req.params.id;
    db.User.findByIdAndUpdate({
        _id: _id
    }, req.body, function (err) {
        if (!err) {
            res.send({
                code: 'success',
                msg: '修改成功'
            });
        }
    })
});
// 删除用户
router.post('/delete/:id', function (req, res) {
    var _id = req.params.id;
    db.User.findByIdAndRemove(_id, function (err) {
        if (!err) {
            res.send({
                code: 'success',
                msg: '删除成功'
            });
        }
    })
});
module.exports = router;