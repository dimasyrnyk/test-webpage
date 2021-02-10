import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import AddProduct from '../components/AddProduct/AddProduct';
import { productSearch, productCreate } from '../store/products/actions';
import PropTypes from 'prop-types';


function Header(props) {

    return (
        <header>
            <div className="header-wrapper">
                <h1 className="logo"><Link to="/">Test Webpage</Link></h1>
                <Search
                    onProductSearch={props.onProductSearch}
                />
                <AddProduct
                    onProductCreate={props.onProductCreate}
                />
            </div>
        </header>
    );
}

Header.propTypes = {
    onProductSearch: PropTypes.func.isRequired,
    onProductCreate: PropTypes.func.isRequired
}

export default connect(
    state => ({
      
    }),
    dispatch => ({
      onProductSearch: value => dispatch(productSearch(value)),
      onProductCreate: data => dispatch(productCreate(data))
    })
  )(Header);