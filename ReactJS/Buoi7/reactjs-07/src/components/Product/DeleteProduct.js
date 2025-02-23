import Modal from 'react-modal';
import { Toaster, toast } from 'alert';
import { memo, useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: '600',
    },
  };

function DeleteProduct(props) {
    const {itemId, onReload} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalOpenClose = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/products/${itemId}`, {
            method: "DELETE"
        })
            .then(res => {
                if (!res.ok) {
                    toast.error('Failed to delete this product!')
                }
                toast.success('Product Deleted Successfully!')
                onReload();
            })
            .catch(error => {
                console.error("Errol deleting product");
            })
    }

    return (
        <>
            <Toaster position='top-right'/>
            <button onClick={modalOpenClose} className='delete-product'>Delete</button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                Are you sure to delete?
                <div className='inner-button'>
                    <button onClick={modalOpenClose}>Cancel</button>
                    <button onClick={handleDelete}>Agree</button>
                </div>                
            </Modal>
        </>
    );
}

export default memo(DeleteProduct)