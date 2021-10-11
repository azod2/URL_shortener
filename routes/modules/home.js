// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 WebList model
const WebList = require('../../models/weblist')
//引用隨機亂數
const shuffle = require('../../shuffle.js')

// 首頁
router.get('/',(req, res) => {    
    res.render('index') 
})

// 短網址路由
router.get('/:url',(req, res) => {
    let url = shuffle.mainweb + req.params.url
    WebList.findOne({shortLink : url})
        .then(result => {
            if(result){
                res.redirect( result.originalLink )
            } else {
                res.send('404 not found') 
            }
        })
  })

//處理短網址post
router.post('/', (req, res) => {
    let url = req.body.url
    let shorturl = ''
    let isEmpty = false
    //檢查是否沒輸入或空白內容
    if (url.trim() < 1){
        isEmpty = true
        res.render('index', {isEmpty})
        return
    }
    //查詢輸入的網址是否已經建立資料
    WebList.findOne({originalLink : url})
        .then(result => {
            if(result){
                //如果有查到資料就直接回傳
                res.render('result', { shortLink : result.shortLink , originalLink : result.originalLink})
                return
            } else {
                //沒查到資料就新增新的短網址
                shorturl = shuffle() //取得短網址用隨機亂數
                WebList.create({originalLink : url , shortLink : shorturl}) //新增資料到資料庫
            }
            //檢查短網址亂數有無重複
            WebList.findOne({shortLink : shorturl})
            .then(result => {
                if (result){
                    shorturl = shuffle()  
                    WebList.create({originalLink : url , shortLink : shorturl})                              
                } 
        })
        .then(() => res.render('result', { shortLink : shorturl , originalLink : `${url}`}))
        .catch(error => { res.sendStatus(404) })

  })})


// 匯出路由模組
module.exports = router