import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Toaster, toast } from 'alert';

function CreateProduct(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataCategories, setDataCategories] = useState([]);
    const { onReload } = props;

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

        fetch("http://localhost:3000/products", {
            method: "POST",
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
                    toast.success('Product Created Successfully!');
                    onReload();
                }
            })
    }

    

    return (
        <>
            <Toaster position='top-right'/>
            <button onClick={modalOpenClose} className='create-product-btn'>New Product</button>
            <Modal isOpen={modalIsOpen}>
                <h3>Create New Product</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input type='text' placeholder='Title' name='title' required></input>
                    </label>
                    {dataCategories.length > 0 && (
                        <label>
                            Category
                            <select name='category'>
                                {dataCategories.map((item) => (
                                    <option key={item.id} value={item.category}>{item.category}</option>
                                ))}
                            </select>
                        </label>
                    )}
                    <label>
                        Price
                        <input type='number' step="0.01" placeholder='Price' name='price' required></input>
                    </label>
                    <label>
                        Discount Percentage
                        <input type='number' step="0.01" placeholder='Discount Percentage' name='discountPercentage' required></input>
                    </label>
                    <label>
                        Stock
                        <input type='number' placeholder='Stock' name='stock' required></input>
                    </label>
                    <label>
                        Thumnail URL
                        <input type='text' placeholder='Thumbnail URL' name='thumbnail' required></input>
                    </label>
                    <label>
                        Description
                        <textarea rows={4} placeholder='Description' name='description' required></textarea>
                    </label>
                    <div className='inner-button'>
                        <button onClick={modalOpenClose}>Cancel</button>
                        <button type='submit'>Create Product</button>
                    </div>
                    
                </form>

            </Modal>
        </>
    );
}

export default CreateProduct