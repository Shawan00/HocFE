import React, { memo, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Toaster, toast } from 'alert';

function UpdateProduct(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataCategories, setDataCategories] = useState([]);
    const { item, onReload } = props;

    useEffect(() => {
        fetch(`http://localhost:3000/categories`)
            .then(res => res.json())
            .then(data => {
                setDataCategories(data);                
            })
    }, []);

    const modalOpenClose = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const productData = Object.fromEntries(formData.entries());
        productData.price = parseFloat(productData.price);
        productData.discountPercentage = parseFloat(productData.discountPercentage);
        productData.stock = parseInt(productData.stock, 10);

        fetch(`http://localhost:3000/products/${item.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setModalIsOpen(false);
                    toast.success('Product Updated Successfully!');
                    onReload();
                }
            })
    }

    

    return (
        <>
            <Toaster position='top-right'/>
            <button onClick={modalOpenClose} className='edit-product'>Edit</button>
            <Modal isOpen={modalIsOpen}>
                <h3>Update New Product</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input type='text' placeholder='Title' name='title' defaultValue={item.title} required></input>
                    </label>
                    {dataCategories.length > 0 && (
                        <label>
                            Category
                            <select name='category' defaultValue={item.category}>
                                {dataCategories.map((item) => (
                                    <option key={item.id} defaultValue={item.category}>{item.category}</option>
                                ))}
                            </select>
                        </label>
                    )}
                    <label>
                        Price
                        <input type='number' step="0.01" placeholder='Price' name='price' defaultValue={item.price} required></input>
                    </label>
                    <label>
                        Discount Percentage
                        <input type='number' step="0.01" placeholder='Discount Percentage' name='discountPercentage' defaultValue={item.discountPercentage} required></input>
                    </label>
                    <label>
                        Stock
                        <input type='number' placeholder='Stock' name='stock' defaultValue={item.stock} required></input>
                    </label>
                    <label>
                        Thumnail URL
                        <input type='text' placeholder='Thumbnail URL' name='thumbnail' defaultValue={item.thumbnail} required></input>
                    </label>
                    <label>
                        Description
                        <textarea rows={4} placeholder='Description' name='description' defaultValue={item.description} required></textarea>
                    </label>
                    <div className='inner-button'>
                        <button onClick={modalOpenClose}>Cancel</button>
                        <button type='submit'>Update Product</button>
                    </div>
                    
                </form>

            </Modal>
        </>
    );
}

export default memo(UpdateProduct)