import React, { Component } from 'react'
import { connect } from 'react-redux';
import { nanoid }  from 'nanoid'
import { personAdd } from '../../redux/person/personAction'

class Person extends Component {

    addUsers = () => {
        let userName = this.addUserNameRef.value;
        let userAge = this.addUserAgeRef.value * 1;
        this.props.personAdd({id: nanoid(), userName, userAge});
    }

    render() {
        const personArr = this.props.userArr;
        return (
            <div>
                <h2>Person组件，Count组件求和为: {this.props.count}</h2>
                <input type="input" ref={e => this.addUserNameRef = e}  placeholder="请输入姓名"/>&nbsp;
                <input type="input" ref={e => this.addUserAgeRef = e} placeholder="请输入年龄"/>&nbsp;
                <input type="button" onClick={this.addUsers} value="add"/>&nbsp;
                <br />
                <br />
                <ul>
                    {
                        personArr.map(item => {
                            return(<li key={item.id}>name-----{item.userName},age------{item.userAge}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

// 它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => ({
    userArr: state.person,
    count: state.count
})

// 建立 UI 组件的参数到store.dispatch方法的映射 
const mapDispatchToProps = {
    personAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)