import "./product.css";

function Product({title, price }){
    let style = {backgroundColor : price> 30000 ? "red" : "" };
    return (
        <div className="product" style={style}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price > 27000 ? <p>Discount of 10% </p> : null}
        </div>
    );
};

export default Product;