const scaleNames = {c: "Celsius", f: "Fahrenheit"};
// 温度显示组件
class TemperatureInput extends React.Component {
    
    constructor(props) {
        super(props);
        // 绑定防止this丢失
        this.handleChange = this.handleChange.bind(this);
    }

    // 绑定父组件的温度改变函数，温度改变，调用父组件传递的函数。由父组件更新数据
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value); 
    }

    render() {
        // 接受父组件传递的数据
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
          // TODO <fieldset> 使用
          // <fieldset> 元素将一个HTML表单的一部分组成一组，内置了一个 <legend> 元素作为 fieldset 的标题
          // 这个元素有几个属性，最值得注意的是 form，其可以包含同一页面的 <form> 元素的 id，以使 <fieldset> 成为这个
          //  <form> 的一部分，即使 <fieldset> 不在其内。还有 disabled 属性，可将 <fieldset> 及其所有内容设置为不可用。
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

// 水沸腾检测显示组件
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// 温度转换
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// 转摄氏度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 转华氏度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 温度控制组件，子组件渲染相互间有影响的数据存放到该组件(父组件)中
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // 摄氏度控制
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        // 华氏度温度控制
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    // 根据温度更改数据
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
    // 根据华氏度更改数据
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        // 转换摄氏度温度
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        // 转换华氏温度
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)