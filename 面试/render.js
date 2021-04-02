// template {{name}}很厉害，才{{age}}岁
// content {name: wuxue, age: 25}

// V0.1
function render(template, context) {
    Object.keys(context).forEach(key => {
        template.replace(new RegExp(`{{${key}}}`, 'g'), context[key])
    })
    return template;
}

// V1.0
function template(str, obj) {
    // 第二个参数为function 返回值会替换匹配的子串 match为匹配到的子串 key相当于$n
    return str.replace(/\{\{(.*?)\}\}/g, (match, key) => obj[key].trim())
}