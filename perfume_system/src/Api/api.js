import axios from 'axios'
export default {
  postLogin (data, callback) {
    axios.post(`${global.ApiUrl}/login`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postRegister (data, callback) {
    axios.post(`${global.ApiUrl}/register`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postPhoto (data, callback) {
    axios.post(`${global.ApiUrl}/photo`, data).then((res) => {
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
  getAll (id, pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/users/findAll/${id}/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postEditorInfo (_id, data, callback) {
    axios.post(`${global.ApiUrl}/users/editorInfo/${_id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getInfo (_id, callback) {
    axios.get(`${global.ApiUrl}/users/getInfo/${_id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postChangePassword (_id, data, callback) {
    axios.post(`${global.ApiUrl}/users/changePassword/${_id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postshopAdd (data, callback) {
    axios.post(`${global.ApiUrl}/shop/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getshopInfo (id, pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/shop/getInfo/${id}/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getshopById (id, callback) {
    axios.get(`${global.ApiUrl}/shop/getOneInfo/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postshopEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/shop/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postshopDelete (id, callback) {
    axios.post(`${global.ApiUrl}/shop/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postPropertyEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/property/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postPropertyAdd (data, callback) {
    axios.post(`${global.ApiUrl}/property/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postPropertyDelete (id, callback) {
    axios.post(`${global.ApiUrl}/property/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getPropertyById (id, callback) {
    axios.get(`${global.ApiUrl}/property/getOneInfo/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getPropertyInfo (id, pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/property/getInfo/${id}/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postCirculateEditor (id, data, callback) {
    axios.post(`${global.ApiUrl}/circulate/editor/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postCirculateAdd (data, callback) {
    axios.post(`${global.ApiUrl}/circulate/add`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postCirculateDelete (id, callback) {
    axios.post(`${global.ApiUrl}/circulate/delete/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getCirculateById (id, callback) {
    axios.get(`${global.ApiUrl}/circulate/getOneInfo/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getCirculateInfo (id, pageIndex, pageSize, callback) {
    axios.get(`${global.ApiUrl}/circulate/getInfo/${id}/${pageIndex}/${pageSize}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getCirculateName (id, callback) {
    axios.get(`${global.ApiUrl}/circulate/getName/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getCirculateNumber (id, callback) {
    axios.get(`${global.ApiUrl}/circulate/getNumber/${id}`).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  postCirculateState (id, data, callback) {
    axios.post(`${global.ApiUrl}/circulate/state/${id}`, data).then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
