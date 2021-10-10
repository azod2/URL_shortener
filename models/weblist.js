const mongoose = require('mongoose')
const Schema = mongoose.Schema
const weblistSchema = new Schema({
    originalLink: {
        type: String, //資料型別是字串
    },
    shortLink: {
        type: String,
    },
})
module.exports = mongoose.model('WebList', weblistSchema)