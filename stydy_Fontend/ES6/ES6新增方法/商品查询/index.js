addEventListener('DOMContentLoaded', main);

function main() {
    // 获得元素
    let startPriceEle = document.querySelector('.start');
    let endPriceEle = document.querySelector('.end');
    let searchPrice = document.querySelector('.search-price');
    let product = document.querySelector('.product');
    let searchPro = document.querySelector('.search-pro');
    let tbody = document.querySelector('tbody');
    let productData = [{
            id: 1,
            name: '小米',
            price: 1999
        }, {
            id: 2,
            name: '荣耀',
            price: 999
        }, {
            id: 2,
            name: '华为',
            price: 3999
        },
        {
            id: 4,
            name: 'apple',
            price: 4999
        }
    ];
    let inputEleData = [startPriceEle, endPriceEle];
    InputBlurFun(inputEleData);
    // 初次渲染
    setData(productData);
    // 渲染页面函数
    function setData(data) {
        tbody.innerHTML = '';
        data.forEach(function(value) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${value.id}</td><td>${value.name}</td><td>${value.price}</td>`;
            tbody.appendChild(tr);
        });
    };

    // 输入数值合法性check  输入的值没办法转为数字类型的就认为是不合法
    function checkNumber(value) {
        if (isNaN(Number(value.trim()))) {
            alert('输入不合法');
            return false;
        }
        return value;
        // let startPrice = arr[0].value.trim();
        // let endPrice = arr[1].value.trim();
        // arr.some(function(item) {
        //     if (isNaN(Number())) {
        //         alert('输入不合法');
        //         return true;
        //     }
        // });
    };
    // 对数字的业务逻辑进行check 
    function checkNumberRange(startPrice, endPrice) {
        let searchData;
        if (startPrice < 0 || endPrice < 0) {
            alert('价格区间不能为负数');
            return false;
        } else if (startPrice >= endPriceEle) {
            return false;
        } else {
            searchData = productData.filter(function(value) {
                if (value.price >= startPrice && value.price <= endPrice) {
                    return true;
                }
            });
        }
        // 返回check之后的结果 数组
        return searchData;
    }

    // 为需要输入合法性检查的元素添加失去焦点事件
    function InputBlurFun(arr) {
        // console.log('inputBlurFun.......');
        arr.forEach(function(item) {
            item.addEventListener('blur', function() {
                // 失去焦点 调用合法性检查函数
                checkNumber(item.value);
            })
        })
    }

    // 价格搜索
    function searchPriceFun() {
        let startPrice = startPriceEle.value.trim();
        let endPrice = endPriceEle.value.trim();
        let searchData = checkNumberRange(startPrice, endPrice);
        // console.log('checkNumberRange(startPrice, endPrice): ', checkNumberRange(startPrice, endPrice));
        setData(searchData);
    };
    searchPrice.addEventListener('click', searchPriceFun);
    // name search
    function productProFun() {
        let productName = product.value;
        // 存储结果
        let searchNameData = [];
        // some 找到结果就返回不会遍历所有
        productData.some(function(item) {
            if (item.name === productName) {
                searchNameData.push(item);
                return true;
            };
        });
        setData(searchNameData);
    };
    searchPro.addEventListener('click', productProFun);
}