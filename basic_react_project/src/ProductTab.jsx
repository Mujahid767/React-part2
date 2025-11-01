import Product from "./Product.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
    };
    return(
        <div style={styles}>
        <Product title="Logitech Mx Master" idx={0}/>
        <Product title="Apple pencil pro (2nd gen)" idx={1}/>
        <Product title="Iphone 18 pro max" idx={2}/>
        <Product title="buggatti" idx={3}/>
        </div>
    );
}
export default ProductTab;