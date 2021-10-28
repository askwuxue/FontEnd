function fun1<T>(a: T): T {
    return a;
}

console.log(fun1(24));

// 接口
interface L {
    length: number
}

class M {
    lenght = 23;
}

// 当前的泛型必须是实现L接口的类或者是L的子类
function fun2<T extends M>(a: T): T {
    return a;
}

const m = new M();
console.log(fun2(m))


// 当前的泛型必须是实现L接口的类或者是L的子类
function fun3<T extends L>(a: T): T {
    return a;
}

console.log(fun3('abs'));