// import React, { Component } from 'react'
class Demo01 extends React.Component {

    constructor(props) {
        super(props);
        this.test();
    }

    test() {
        console.log('test this is: ')
        console.log(this);
    }


    render() {
        return (
            <div>
                this is app...
            </div>
        )
    }
}

ReactDOM.render(
    <Demo01 />,
    document.getElementById('root')
);