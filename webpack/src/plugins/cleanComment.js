const cleanComment = class {
    apply(compiler) {
        console.log('cleanComment start');
        compiler.hooks.emit.tap('cleanComment', compilation => {
            // compilation 此次打包的上下文
            for (let name in compilation.assets) {
                // console.log(name);
                if (name.endsWith('.js')) {
                    // 获取打包文件的内容
                    const contents = compilation.assets[name].source();
                    const replaceContents = contents.replace(/\/\*\*+\*\//g, '');
                    // 固定写法
                    compilation.assets[name] = {
                        source: () => replaceContents,
                        size: () => replaceContents.length
                    }
                }
            }
        })
    }
};
module.exports = cleanComment