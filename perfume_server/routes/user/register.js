var exp = require('express');
var router = exp.Router();
var db = require('../../db');
var qs = require('qs')
// 注册
router.post('/', function (req, res) {
    let reqData = qs.parse(req.body).data
    var username = reqData.username;
    var password = reqData.pass;
    var checkPass = reqData.checkPass;
    // var gender = req.body.gender
    var user = new db.User(reqData);
    // 判断输入的两次密码是否一致
    if (password == checkPass) {
        // 在表User中按照username查找所有用户
        db.User.find({ 'username': username }, function (err, data) {
            console.log(data)
            if (!err) {
                if (data.length == 0) {
                    // 写入数据库
                    user.save(function (error) {
                        // 注册成功
                        if (!error) {
                            res.status(200).json({
                                code: 'success',
                                msg: '恭喜您,注册成功!'
                            })
                            // 注册失败
                        } else {
                            res.status(200).json({
                                code: 'error',
                                msg: '很抱歉,注册失败,请您重新注册!'
                            })
                        }
                    })
                    // 用户名已存在
                } else {
                    res.status(200).json({
                        code: 'error',
                        msg: '该用户名已经存在，请直接登录！'
                    })
                }
            }
        })
        // 密码不一致
    } else {
        res.send({
            code: 'error',
            msg: '两次输入的密码不一致,请您重新输入!'
        })
    }
})

// 导出路由
module.exports = router;