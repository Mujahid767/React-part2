import "./Product.css";
import Price from "./price";
function Product({title,idx})
{   let oldPrices=["12,496","11,900","1,599","599"]
    let newPrices=["10,496","14,900","2,394","459"]
    let description=[
        ["8000 DPI","5 programmable buttons"],
        ["Intuitive Surface","cool moju"],
        ["designed for ipad pro","emi free"],
        ["wireless","useless"]
    ];
    return(
    <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
)
 
}
export default Product;