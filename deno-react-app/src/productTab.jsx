import Product from "./product.jsx"; 

function ProductTab () {
    // let options = ["smart","durable","fast"];
    return (
        <>  
            <Product title="phone" price={25000} />
            <Product title="laptop" price={80000} />
            <Product title="tab" price={30000}/>
            
        </>
    );
};

export default ProductTab;