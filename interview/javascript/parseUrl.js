let url = 'http://www.baidu.com?name=wu&age=20&hobbies=game&hobbies=movie&flag'
function parseUrl(url) {
    // 该正则表达式会返回一个数组，正则表达式使用了括号捕捉，所以该数组的长度为2，数组第二个元素的内容就是括号捕捉的内容。
    // 也就是?号后面的内容
    const paramStr = /.+?(.+)$/.exec(url)[1];

    // 使用&分割 
    const paramArr = paramStr.split('&');

    // 存放parse对象
    const paramObj = {};

    paramArr.forEach(param => {

        // 如果param 是key=value 格式
        if (/=/.test(param)) {

            // 提取param的key value
            let [key, val] = param.split('=');

            // 将url的参数进行转义
            val = decodeURIComponent(val);

            // 如果parseObj中已经有了对应的属性 则将该属性的属性值设置为数组格式并添加到数组中
            if (paramObj[key]) {
                paramObj[key] = [].concat(paramObj[key], val);
            } else {
                paramObj[key] = val;
            }
            // url中的属性没有对应的值 默认设置为true
        } else {
            paramObj[param] = true;
        }
    })
    
    return paramObj;
}

let parseObj = parseUrl(url);

console.log(parseObj);