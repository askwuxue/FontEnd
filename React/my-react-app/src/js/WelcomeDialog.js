function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-tile">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for you
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
)