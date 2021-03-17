const ajax = (options) => {

    // 默认参数对象
    const defaultObj = {
        type: '',
        url: '',
        header: {
            'Content-Type': 'application/application/x-www-form-urlencoded'
        },
        params: {},
        access: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    }

    // 用传递参数覆盖默认参数
    Object.assign(defaultObj, options)

    // 创建实例
    let xhr = new XMLHttpRequest();

    // 拼接参数字符串
    let paramStr = '';
    for (let key in defaultObj.params) {
        paramStr += `${key}=${defaultObj.params[key]}&`
    }

    // 去除最后一个&
    paramStr = paramStr.substring(0, paramStr.length - 1);

    // get请求
    if (defaultObj.type === 'GET') {

        // 设置请求方式及地址
        xhr.open(defaultObj.type, `${defaultObj.url}?${paramStr}`);

        // 发送请求 get请求不传参数 post请求向send()传递参数
        xhr.send();
    } else {

        // 设置请求方式及地址
        xhr.open(defaultObj.type, `${defaultObj.url}`);

        // 请求凡是是post必须设置请求头
        xhr.setRequestHeader('Content-Type', defaultObj.header['Content-Type'])

        // 根据请求头 发送不同格式数据
        if (defaultObj.header['Content-Type'] === 'application/x-www-form-urlencoded') {

            // TODO 请求头设置为application/x-www-form-urlencoded 格式send()中传递必须使用该格式
            // post请求通过send()传递参数
            xhr.send(paramStr);
        } else {
            xhr.send(JSON.stringify(defaultObj.params));
        }

    }
    // 请求成功
    xhr.onload = () => {
        let ContentType = xhr.getResponseHeader('Content-Type');
        let responseText = xhr.responseText;

        // TODO 服务器返回的永远是字符串
        if (ContentType.includes('application/json')) {
            responseText = JSON.parse(responseText);
        }

        // 请求成功
        if (xhr.status == 200) {
            defaultObj.access(responseText, xhr);
        } else {
            defaultObj.error(responseText, xhr);
        }
    }
}

// TODO ES6的export和import如何使用？
export { ajax };