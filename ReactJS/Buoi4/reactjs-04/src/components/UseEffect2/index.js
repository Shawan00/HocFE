import { useEffect, useState } from "react"
import './styles.scss'

function UseEffect2() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[]); // thêm dependency [] để useEffect chỉ xử lý một lần sau khi render giao diện

    console.log(products);

    return (
        <>
            <div className="product">
                {products.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title}></img>
                        </div>
                        <h3 className="product__title">{item.title}</h3>
                        <p className="product__price">{item.price}$</p>
                    </div>
                ))}
            </div>
        </>
    );

}

export default UseEffect2