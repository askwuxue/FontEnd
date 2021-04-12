// 登录组件
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

// 登出组件
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            logout
        </button>
    );
}

// 登录控制组件
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLogin: false};
    }

    // 设置为登录
    handleLoginClick() {
        this.setState({isLogin: true})
    }

    // 设置为未登录
    handleLogoutClick() {
        this.setState({isLogin: false})
    }

    render() {
        const isLogin = this.state.isLogin;
        let button;
        // 根据登录状态渲染组件
        // 如果当前是login 则需要logout
        if (isLogin) {
            button = <LoginButton onClick = {this.handleLogoutClick} />
        } else {
            button = <LogoutButton onClick = {this.handleLoginClick} />
        }
        return (
            <div>
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)