// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const webRedirect = require('./modules/webRedirect')


router.use('/', home)

// 匯出路由器
module.exports = router