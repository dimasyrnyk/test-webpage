
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddProduct.css';

export default function AddProduct({ onProductCreate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');



    const onSubmit = e => {
        const newProduct = {
            id: Date.now(),
            src: source,
            title: title,
            price: price,
            desc: description,
            pin: false
        };
        onProductCreate(newProduct);
        setSource('');
        setTitle('');
        setPrice();
        setDescription('');
        setIsOpen(false);
      }

    return (
        <>
            <span className="add__button" onClick={() => setIsOpen(true)}>
                Add
            </span>

            {isOpen && (
            <div className='modal'>
                <div className='modal__body'>
                <h3 className='modal__title'>Add new product</h3>
                <form className='modal__form'>
                    <span className="modal__row">
                        <span className="row__title">Title: *</span>
                        <input
                            className="modal__input"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                    </span>
                    <span className="modal__row">
                        <span className="row__title">Price: *</span>
                        <input
                            className="modal__input"
                            type="number"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Price"
                        />
                    </span>
                    <span className="modal__row">
                        <span className="row__title">Source: *</span>
                        <input
                            className="modal__input"
                            type="url"
                            value={source}
                            onChange={e => setSource(e.target.value)}
                            placeholder="Image url"
                        />
                    </span>
                    <span className="modal__row">
                        <span className="row__title">Description: *</span>
                        <textarea
                            className="modal__textarea"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Describe your product">
                        </textarea>
                    </span>
                </form>
                <div className="modal__controls">
                    <button className="control__button" onClick={onSubmit}>
                        Add product
                    </button>
                    <button className="control__button" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                </div>
                </div>
            </div>
            )}
        </>
    );
}

AddProduct.propTypes = {
    onProductCreate: PropTypes.func.isRequired
}