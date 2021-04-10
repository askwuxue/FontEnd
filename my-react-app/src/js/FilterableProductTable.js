// 产品数据
const goodMessage = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

// 控制用户输入的组件
class SearchBar extends React.Component {
    
    render() {
        return(
            <div>
                <input type="text" /><br />
                <input type="checkbox" id="cbox1"/>
                <label htmlFor="cbox1">Only show production in stocked</label>
            </div>
        )
    }
}

// 展示产品内容并根据用户选择条件筛选结果
function ProductTable(props) {
    console.log(props.goodMessage);
    
    return(
        <div>
            {/* <h3>Name</h3> */}
            <span>Name</span>&nbsp;&nbsp;
            <span>Price</span>
            {/* <h3>price</h3> */}
            <ProductCategoryRow goodMessage={props.goodMessage}/>
            {/* <ProductRow /> */}
        </div>
    )
}

// 每个产品类别标题展示
function ProductCategoryRow(props) {
    console.log(props.goodMessage);
    // 获得商品分类
    const productCategory = [...new Set(props.goodMessage.map(item => {
        return item.category;
    }))];
    console.log('productCategory: ', productCategory);
    return <h3></h3>
    // return <h3 title={this.props.title}></h3>
}

// 每行展示一个产品
function ProductRow(props) {
    return <p goods={this.props.goods}></p>
}

// 整个页面的最高级组件
class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.goodMessage);
        return(
            <div>
                <SearchBar />
                <ProductTable goodMessage={this.props.goodMessage}/>
            </div>
        )
    }
}

ReactDOM.render(
    <FilterableProductTable goodMessage={goodMessage} />,
    document.getElementById('root')
)