import { memo, useEffect, useState } from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

function ProductList(props) {
    const [product, setProduct] = useState([]);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.reverse());                
            })
            .catch(console.error())
    }, [props.onReload, reload]);

    const handleReload = () => {
        setReload(reload + 1);
    }

    return (
        <>
            <div className="product__list">
                    {product.map((item) => {
                        const oldPrice = Math.round(item.price * (1 + item.discountPercentage / 100) * 100) / 100; 
                        return (
                            <div className="product" key={item.id}>
                                <div className="product__image">
                                    <img src={item.thumbnail} alt={item.title}></img>
                                </div>
                                <div className="info">
                                    <div className="product__title">{item.title}</div>
                                    <div className="product__price">
                                        <b>{item.price}$</b>
                                        <del>{oldPrice}$</del>
                                    </div>
                                </div>
                                <div className="button">
                                    <UpdateProduct item={item} onReload={handleReload}/>
                                    <DeleteProduct itemId={item.id} onReload={handleReload}/>
                                </div>
                                
                                
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default memo(ProductList)