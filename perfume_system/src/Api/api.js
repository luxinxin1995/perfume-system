import axios from 'axios'
export default {
  // 登录
  postLogin (data, callback) {
    axios.post(`${global.ApiUrl}/login`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 注册
  postRegister (data, callback) {
    axios.post(`${global.ApiUrl}/register`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 超级管理员
  getAdmin (callback) {
    axios.get(`${global.ApiUrl}/admin`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getId (username, callback) {
    axios.get(`${global.ApiUrl}/users/findId/${username}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有用户
  getAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/users/findAll/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有用户
  getAllUser (callback) {
    axios.get(`${global.ApiUrl}/users/All`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除用户
  postUserDelete (_id, callback) {
    axios.post(`${global.ApiUrl}/users/delete/${_id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改密码
  postChangePassword (_id, data, callback) {
    axios.post(`${global.ApiUrl}/users/changePassword/${_id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 编辑用户
  postEditorInfo (_id, data, callback) {
    axios.post(`${global.ApiUrl}/users/editorInfo/${_id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取个人用户
  getInfo (_id, callback) {
    axios.get(`${global.ApiUrl}/users/getInfo/${_id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加品牌
  postbrandAdd (data, callback) {
    axios.post(`${global.ApiUrl}/brand/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有品牌(分页)
  getbrandAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/brand/allbrand/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有品牌
  getAllbrand (callback) {
    axios.get(`${global.ApiUrl}/brand/allbrand`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应品牌
  getbrandById (id, callback) {
    axios.get(`${global.ApiUrl}/brand/brandOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应品牌
  postbrandEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/brand/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应品牌
  postbrandDelete (id, callback) {
    axios.post(`${global.ApiUrl}/brand/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加原料
  postmaterialAdd (data, callback) {
    axios.post(`${global.ApiUrl}/material/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有原料(分页)
  getmaterialAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/material/allMaterial/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有原料
  getAllmaterial (callback) {
    axios.get(`${global.ApiUrl}/material/allMaterial`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应原料
  getmaterialById (id, callback) {
    axios.get(`${global.ApiUrl}/material/MaterialOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应原料
  postmaterialEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/material/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应原料
  postmaterialDelete (id, callback) {
    axios.post(`${global.ApiUrl}/material/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加原料
  postmaterial2Add (data, callback) {
    axios.post(`${global.ApiUrl}/material2/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有原料(分页)
  getmaterial2All (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/material2/allMaterial2/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有原料
  getAllmaterial2 (callback) {
    axios.get(`${global.ApiUrl}/material2/allMaterial2`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应原料
  getmaterial2ById (id, callback) {
    axios.get(`${global.ApiUrl}/material2/Material2One/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应原料
  postmaterial2Editor (id, data, callback) {
    axios.post(`${global.ApiUrl}/material2/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应原料
  postmaterial2Delete (id, callback) {
    axios.post(`${global.ApiUrl}/material2/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加分类
  postclassifyAdd (data, callback) {
    axios.post(`${global.ApiUrl}/classify/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有分类(分页)
  getclassifyAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/classify/allClassify/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有分类
  getAllclassify(callback) {
    axios.get(`${global.ApiUrl}/classify/allClassify`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应分类
  getclassifyById (id, callback) {
    axios.get(`${global.ApiUrl}/classify/ClassifyOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应分类
  postclassifyEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/classify/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应分类
  postclassifyDelete (id, callback) {
    axios.post(`${global.ApiUrl}/classify/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加产品
  postproductAdd (data, callback) {
    axios.post(`${global.ApiUrl}/product/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有产品(分页)
  getproductAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/product/allProduct/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有产品
  getAllproduct (callback) {
    axios.get(`${global.ApiUrl}/product/allProduct`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应产品
  getproductById (id, callback) {
    axios.get(`${global.ApiUrl}/product/ProductOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应产品
  postproductEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/product/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应产品
  postproductDelete (id, callback) {
    axios.post(`${global.ApiUrl}/product/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加精彩文章
  postarticleAdd (data, callback) {
    axios.post(`${global.ApiUrl}/article/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有精彩文章(分页)
  getarticleAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/article/allArticle/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有精彩文章
  getAllarticle (callback) {
    axios.get(`${global.ApiUrl}/article/allArticle`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应精彩文章
  getarticleById (id, callback) {
    axios.get(`${global.ApiUrl}/article/ArticleOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应精彩文章
  postarticleEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/article/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应精彩文章
  postarticleDelete (id, callback) {
    axios.post(`${global.ApiUrl}/article/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 添加公告
  posttodayAdd (data, callback) {
    axios.post(`${global.ApiUrl}/today/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取所有公告(分页)
  gettodayAll (pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/today/allToday/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
    // 获取所有公告
  getAlltoday (callback) {
    axios.get(`${global.ApiUrl}/today/allToday`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取id对应公告
  gettodayById (id, callback) {
    axios.get(`${global.ApiUrl}/today/TodayOne/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 修改id对应公告
  posttodayEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/today/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  // 删除id对应公告
  posttodayDelete (id, callback) {
    axios.post(`${global.ApiUrl}/today/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
