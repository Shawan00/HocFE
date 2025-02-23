import { useState } from "react";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";

function Product() {
    const [reload, setReload] = useState(0);

    const handleReload = () => {
        setReload(reload + 1);
    }

    return (
        <>
            <h2>Product List</h2>
            <CreateProduct onReload={handleReload}/>
            <ProductList onReload={reload}/>
        </>
    );
}

export default Product