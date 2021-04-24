import { PERSON_ADD } from '../constant'

const initState = [{id: 'start_random_1', userName: 'wuxue', userAge: '25'}];
export default function personReducer (perState = initState, action) {

    let { type, data } = action;

    switch (type) {
        case PERSON_ADD:
            // TODO reducer纯函数
            // 因为reducer要求是一个纯函数，所以使用push等方法会破坏纯函数。
            // reducer 函数进行的是潜比较，传入参数perState是引用类型时，直接在perState上操作，reducer会
            // 认为没有发生变化。所以导致store的数据不会发生变化。
            return [data, ...perState]
        default:
            return perState;
    }
}