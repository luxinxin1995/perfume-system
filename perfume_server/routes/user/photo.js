const exp = require('express');
const fs = require('fs');
const multer = require('../../multer');
const common = require('../../common');
const router = exp.Router();


router.post('/', multer.single('photo'), (req, res) => {
    // common.send(res, 'success', '上传头像成功')
    console.log('photo-req',req)
})

module.exports = router;