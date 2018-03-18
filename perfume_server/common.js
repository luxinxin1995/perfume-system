var send = (res, code, message, data) => {
    res.status(200).json({ code, message, data })
}

function isSign(req, res, next) {
    if (req.cookies.username) {
        // 如果username存在，是登录状态，继续向下执行
        next();
    } else {
        // 如果是ajax请求，判断为true，如果不是，判断为false
        if (req.xhr) {
            res.redirect('/user/login.html')
            send(res, 'system error', '系统错误，请重试')
        } else {
            res.redirect('/user/login.html')
        }
    }
}
module.exports = { send, isSign };