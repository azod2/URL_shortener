// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 WebList model
const WebList = require('../../models/weblist')
let weburl = 'https://et.jo/'

router.get('/:url',(req, res) => {
    console.log('redirect1')
    let endurl = req.params.url
    console.log(typeof(endurl))
    weburl = weburl + endurl
    console.log(weburl)
    WebList.findOne({shortLink : weburl})
        .then(result => {
            if(result){
                console.log(result)
                // res.render('index', { url : result.shortLink })
                let url = result.shortLink
                res.redirect( result.originalLink )
            } else {
                res.send('404 not found') 
                console.log('404 not found')
            }
        })
  })

  //測試
  router.get('/',(req,res) =>{
      console.log('redirect test')
    res.render('test')
  })

  module.exports = router