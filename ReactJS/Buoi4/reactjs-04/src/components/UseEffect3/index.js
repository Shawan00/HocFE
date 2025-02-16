import { useEffect, useState } from "react"
import './styles.scss'

function UseEffect3() {
    let limit = 10;
    const [totalPage, setTotalPage] = useState(0);
    console.log(totalPage)
    console.log(...Array(totalPage));
    const [products, setProducts] = useState([]);
    const [pageActive, setPageActive] = useState(0);


    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${limit * pageActive}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            setTotalPage(Math.ceil(data.total / limit));
            
        })
    },[pageActive]);
    
    const handleClickPagi = (e) => {
        setPageActive(e);
    }

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

            <ul className="pagination">
                {[...Array(totalPage)].map((item, index) => (
                    <li key={index} onClick={() => handleClickPagi(index)}>{index + 1}</li>
                ))}
            </ul>
        </>
    );

}

export default UseEffect3