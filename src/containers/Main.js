import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { removeSearchKeyWord, productClear, productPin } from '../store/products/actions';
import List from '../components/List';
import './Main.css';



function Main(props) {
  return (
    <main className="main-container">
      <Switch>
        <Route exact path="/">
          <List 
            search={props.search}
            productsList={props.productsList}
            onPinProduct={props.onProductPin}
            onRemoveProduct={props.onProductRemove}
            onRemoveSearchKeyWord={props.onRemoveSearchKeyWord}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  );
}


export default connect(
  state => ({
    search: state.products.searchKeyWords,
    productsList: state.products.products.filter(product => 
      state.products.searchKeyWords.every(item => product.title.concat(product.desc).toLowerCase().includes(item))
    ).sort((a, b) => Number(b.pin) - Number(a.pin)),
  }),
  dispatch => ({
    onProductPin: id => dispatch(productPin(id)),
    onProductRemove: id => dispatch(productClear(id)),
    onRemoveSearchKeyWord: index => dispatch(removeSearchKeyWord(index))
  })
)(Main);