// 产品数据
const goodMessage = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

// 整个页面的最高级组件
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 用户输入和用户checkbox 的选择状态
            filterText: '', inStockOnly: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        // this.handleFilter = this.handleFilter.bind(this);
        this.filterArr = this.props.goodMessage.filter(ele => {
            // console.log(ele);
            if (ele.name.includes(this.state.filterText)) {
                return ele;
            }
        });
    }

    // 用户输入事件
    handleInputChange(e) {
        // console.log(e.target.value);
        this.setState({
            filterText: e.target.value
        })
    }

    // 用户checkbox状态改变事件
    handleCheckboxChange(e) {
        console.log(e.target.checked);
        this.setState({
            inStockOnly: e.target.checked
        })
    }

    render() {
        // console.log(this.props.goodMessage);
        let filterText = this.state.filterText;
        let inStockOnly = this.state.inStockOnly;
        // console.log('this.state.inStockOnly: ', this.state.inStockOnly);
        // console.log('inStockOnly: ', inStockOnly);
        const filterArr = this.props.goodMessage.filter(ele => {
            // console.log(ele);
            if (inStockOnly) {
                if (ele.name.includes(filterText) && ele.stocked) {
                    return ele;
                }
            } else {
                if (ele.name.includes(this.state.filterText)) {
                    return ele;
                }
            }
        });

        // console.log(filterArr);
        return(
            <div>
                <SearchBar checkedState={this.state.inStockOnly} handleInputChange={this.handleInputChange} handleCheckboxChange={this.handleCheckboxChange}/>
                <ProductTable goodMessage={filterArr}/>
            </div>
        )
    }
}

// 控制用户输入的组件
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props);
        // const checkedState = this.props.checkedState;
        return(
            <div>
                <input type="text" onChange={this.props.handleInputChange}/><br />
                <input type="checkbox" id="cbox1" onChange={this.props.handleCheckboxChange} />
                <label htmlFor="cbox1">Only show production in stocked</label>
            </div>
        )
    }
}

// 展示产品内容并根据用户选择条件筛选结果
function ProductTable(props) {
    // console.log(props.goodMessage);
    const filterArr = props.goodMessage;

    return(
        <div>
            <span>Name</span>&nbsp;&nbsp;
            <span>Price</span>
            <ProductCategoryRow goodMessage={props.goodMessage}/>
        </div>
    )
}

// 每个产品类别标题展示
function ProductCategoryRow(props) {
    // console.log(props.goodMessage);
    // 获得商品分类
    const productCategory = [...new Set(props.goodMessage.map(item => {
        return item.category;
    }))];
    const sportingArr = props.goodMessage.filter((item) => {
        if (item.category === "Sporting Goods") {
            return item;            
        }
    });
    // console.log('sportingArr: ', sportingArr);
    const electronicsArr = props.goodMessage.filter(item => {
        if (item.category === "Electronics") {
            return item;            
        }
    });
    // console.log('electronicsArr: ', electronicsArr);
    // console.log('productCategory: ', productCategory);
    return(
        <div>
            <div>
                <h3>{productCategory[0]}</h3>
                {
                    sportingArr.map((ele) => <ProductRow value={ele} key={ele.name}/>)
                }
            </div>
            <div>
                <h3>{productCategory[1]}</h3>
                {
                    electronicsArr.map((ele) => <ProductRow value={ele} key={ele.name}/>)
                }
            </div>
        </div>
    ) 
}

// 每行展示一个产品
function ProductRow(props) {
    // console.log(props);
    return (
        <div>
            <span>{props.value.name}</span>&nbsp;&nbsp;
            <span>{props.value.price}</span>
        </div>
    )
}

ReactDOM.render(
    <FilterableProductTable goodMessage={goodMessage} />,
    document.getElementById('root')
)