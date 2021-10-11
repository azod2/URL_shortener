let mainweb = 'https://et.jo/'
//產生短網址
function shuffles() {
    let rendomString = '1234567890qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP'
    let array = rendomString.split('')
    let result = ''
    //亂數排序
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    for (let i = 0; i < 5; i++){
        result += array[i]
    }
    //回傳短網址
    return mainweb + result    
  } 

  module.exports = shuffles
  module.exports.mainweb = mainweb