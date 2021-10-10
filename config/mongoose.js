const mongoose = require('mongoose') // 載入 mongoose
 // 設定連線到 mongoDB，並建立名為ShortUrl的資料庫
mongoose.connect('mongodb://localhost/ShortUrl', { useNewUrlParser: true, useUnifiedTopology: true })
//取得資料庫連線狀態
const db = mongoose.connection
//連線異常
db.on('error', () => {
    console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
    console.log('mongodb connected!')
})

module.exports = db