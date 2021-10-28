// TODO 抽象类智能被继承，不会被实例化
abstract class A {
    // name: string;
    // age: number;
    // 定义属性并且对属性进行初始化
    constructor(public name: string) {
        this.name = name;
    }
}

class B extends A {
    constructor(public name: string, private age: number) {
        super(name);
        this.showInfo();
        this.age = 18;
    }
    get _age(): number {
        return this.age;
    }
    set _age(_age: number) {
        this.age = _age;
    }
    private showInfo() {
        if (this.age > 18) {
            console.log('已经成年');
        } else {
            console.log('还没有成年');
        }
    }
}

const b = new B('wuxue', 25);
console.log(b.name);
b.name = 'xiaoNing';
// b.age = 18;
// 通过get和set对属性进行访问和修改 
b._age = 18;
console.log(b._age);