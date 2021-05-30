# typescript

## 类型安全

    - 强
    - 若

## 类型检查

    - 静态类型
    - 动态类型

## 弱类型的问题

运行阶段才会发现问题

## 强类型的优势

1. 错误更早暴露,编译阶段暴露。
2. 代码更加智能，编码更准确。
3. 重构更加牢靠
4. 减少一些不必要的类型判断。

## Flow JavaScript 的类型检查器

类型注解的方式对类型进行约定。

### 快速上手 Flow

1. yarn add flow-bin --dev
2. yarn flow init
   //@flow
3. 为 JavaScript 添加注解
   // 关闭 vscode 的类型检查，JavaScript validate
4. yarn flow

### 移除类型注解(生产环境)

#### flow

1. yarn add flow-remove-types -dev
2. yarn flow-remove-types sourcePath -d distPath

#### babel

```yarn
1. yarn add @babel/core @babel-cli @babel/preset-flow
2. .babelrc
    {
        "presets": ["@babel/preset-flow"]
    }
3. yarn babel src -d dist
```

### vscode 中使用 flow 插件

`flow language support` 插件

### flow 类型推断

### 类型注解

### 原始数据类型

- string
- number
- boolean
- undefined :void = undefined
- null
- symbol

### 数组类型

- :Array<number>
- :number[]
- 元组

### 对象类型

- :{ foo?: string, bar: number }

### 函数类型

### 特殊类型

const a: 'foo' = 'foo';
const type: 'success' | 'warning' | 'danger' = 'success';
const b: string | number
const gender: ?number = 5;

### Mixed & any 任意类型

Mixed 是强类型，any 是弱类型

## typescript

### 标准库声明

开启配置文件中的 target 和 lib 的选项;

### 中文错误消息

`yarn tsc --locale zh-CN`

### 作用域问题

### Object 类型

object 不单指对象，包括函数，数组等

### 类型断言

明确告诉 ts，就是这个类型

const num1 = res as number;
const num2 = <number>res;

**类型断言不是类型转换**

### 接口

对数据类型进行约束

```ts
interface Cache {
  // 不确定接口的属性名
  [prop: string]: string;
}
const cache: Cache = {};
```
