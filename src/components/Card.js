import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Card({ product, onRemove, onPin }) {

    const handlePin = e => {
        e.preventDefault();
        onPin(product.id);
    }
    
    const handleRemove = e => {
        e.preventDefault();
        onRemove(product.id);
    }

    return (
        <li className="card">
            <FontAwesomeIcon
                className={!product.pin ? "card__pin-button" : "card__pin-button pinned"}
                onClick={handlePin}
                icon={faMapPin}
            />
            <FontAwesomeIcon
                className="card__remove-button"
                onClick={handleRemove}
                icon={faTrash}
            />
            <img className="card__img" src={product.src} alt="Item" />
            <div className="card__title">
                <h3>{product.title}</h3>
                <span>{product.price} $</span>
            </div>
            <p>{product.desc}</p>
        </li>
    );
}

Card.propTypes = {
    product: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onPin: PropTypes.func.isRequired
}