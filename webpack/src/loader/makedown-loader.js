// TODO loader的格式，返回值必须是字符串或者html，返回字符串为最终结果，返回html，作为loader的中间结果，传递给下一个loader去处理
const marked = require('marked')
module.exports = resource => {
    console.log(resource);
    console.log('I am a md loader')
    let html = marked(resource);
    // 1. 返回字符串
    // return `console.log('I am a md loader')`
    // 2. 返回html代码
    return html;
}