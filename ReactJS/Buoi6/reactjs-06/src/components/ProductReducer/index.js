import { useEffect, useReducer } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


var init = {
    product: [],
    loading: true
};

const reducer = (state, action) => {
    console.log(action.type, action.product);
    if (action.type === "SUCCESS") {
        return {
            product: action.product,
            loading: false
        }
    }
    else {
        return state;
    }
    
};

function ProductReducer() {
    const [state, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        const fetchAPI = () => {
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "SUCCESS",
                        product: data.products
                    })
                })
        }

        setTimeout(() => {
            fetchAPI();
        }, 3000);
    }, []);

    return state.loading? (
        <>
            <Skeleton className="products__title"/>
        </>
    ) : (
        <>
            <ul className="products__title">
                {state.product.map((item) => (
                    <li key={item.id}>{item.title   }</li>
                ))}
            </ul>
        </>
    );
}

export default ProductReducer