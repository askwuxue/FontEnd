// 数据
var data = [
    {
        "姓名": "wuxue",
        "年龄": 25,
        "性别": "man"
    },
    {
        "姓名": "wuxue",
        "年龄": 26,
        "性别": "man"
    },
    {
        "姓名": "wuxue",
        "年龄": 27,
        "性别": "man"
    },
    {
        "姓名": "wuxue",
        "年龄": 28,
        "性别": "man"
    },
    {
        "姓名": "wuxue",
        "年龄": 29,
        "性别": "man"
    },
    {
        "姓名": "wuxue",
        "年龄": 30,
        "性别": "man"
    }
];

var tbody = document.querySelector('.tbody ');
for(var i = 0; i < data.length; i++) {
    var createTr = document.createElement('tr');
    // 便利数组中的对象
    for(var key in data[i]) {
        var createTd = document.createElement('td');
        var createText = document.createTextNode(data[i][key]);
        createTd.appendChild(createText);
        createTr.appendChild(createTd);
    }
    tbody.appendChild(createTr);
    // 创建最后的一个操作tb
    var lastTd = document.createElement('td');
    // 创建最后一个td中的a标签
    var opation = document.createElement('a');
    // 不为a标签创建href属性 相当于一个普通标签
    opation.href = "javascript:;"
    // 创建a标签中的文字
    var opationText = document.createTextNode('删除');
    opation.appendChild(opationText);
    lastTd.appendChild(opation);
    tbody.children[i].appendChild(lastTd);

    // 点击对应的a标签删除对应的行
    opation.onclick = function() {
        // console.log(this.parentNode.parentNode);
        tbody.removeChild(this.parentNode.parentNode);
    }
}
