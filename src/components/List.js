import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchKeyWords from './SearchKeyWords';
import PropTypes from 'prop-types';


export default function List(props) {
    return (
        <>
            <div>
                {
                props.search.length > 0 &&
                    props.search.map((item, index) => {
                        return (
                            <SearchKeyWords
                                key={index}
                                id={index}   
                                title={item}
                                onRemoveKeyWord={props.onRemoveSearchKeyWord}
                            />
                        )}
                    )
                }
            </div>
            <ul className="list">
                {
                props.productsList.length > 0 ?
                    props.productsList.map((product, index) => {
                        return (
                            <Card
                                key={index}
                                product={product}
                                index={index}
                                onPin={props.onPinProduct}
                                onRemove={props.onRemoveProduct}
                            />
                        )}) :
                    <li className="card">No products!</li>
                }
            </ul>
        </>
    );
}

List.propTypes = {
    productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemoveSearchKeyWord: PropTypes.func.isRequired,
    onPinProduct: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired
}