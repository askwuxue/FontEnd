function jsonp(options) {
    let body = document.getElementsByTagName('body')[0];
    let script = document.createElement('script');
    script.src = options.url;

    // replace 只能替换一次
    let random = Math.random().toString().replace('.', '');

    // 随机函数名
    let fn = ('jsonp' + random);

    // 必须将fn挂在在全局下，否则服务端返回函数无法执行
    window[fn] = function() {};

    // 将用户调用的函数体赋值给全局下的函数
    window[fn] = options.success;

    // 真正的请求地址，可以添加参数参数
    script.src += `?callback=${fn}`;
    if (options.params) {
        let paramStr = '';
        Object.keys(options.params).forEach((item) => {
            paramStr += ('&' + item + '=' + options.params[item]);
        })
        console.log(paramStr);
        script.src += paramStr;
    }

    // 动态生成script
    body.appendChild(script);

    // script 成功请求后将script从DOM中删除
    script.onload = function() {
        body.removeChild(script);
    }
}