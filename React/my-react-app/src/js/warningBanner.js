function WarningBanner(props) {
    if (!props.warn) {
        return false;
    }
    return (
        <div className="warning">
            warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warn: true};
        this.handleToggle = this.handleToggle.bind(this);
    }

    // 设置state.warn
    handleToggle() {
        this.setState({
            warn: !this.state.warn
        })
    }

    render() {
        return(
            <div>
                {/* 将状态传递至组件WarningBanner */}
                <WarningBanner warn={this.state.warn} />
                <button onClick={this.handleToggle}>
                    {this.state.warn ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)