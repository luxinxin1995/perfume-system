var exp = require('express');
var router = exp.Router();
var db = require('../../db');
var qs=require('qs')
// 登录
router.post('/',function (req,res) {
    let reqData =  qs.parse(req.body).data
    var username = reqData.username;
    var password = reqData.pass;
    db.User.find({'username':username},function (err,data) {
        console.log(data)
        if (!err) {
            if (data.length != 0) {
                if (password == data[0].pass) {
                    res.cookie('username',username)
                    res.send({
                        code:'success',
                        msg:'登录成功!'
                    })
                }else{
                    res.send({
                        code:'error',
                        msg:'很抱歉,密码错误,请重新输入!'
                    })
                }
            }else{
                res.send({
                    code:'error',
                    msg:'很抱歉,该用户不存在,请重新输入!'
                })
            }
        }
    })
})
module.exports = router