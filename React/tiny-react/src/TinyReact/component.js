// 根据子类调用super 对父类中的props赋值， 从而使子类也可以使用props
export default class Component {
    constructor(props) {
        this.props = props;
    }
}