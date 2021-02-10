export const PRODUCT_PIN = 'PRODUCT_PIN';
export const PRODUCT_SEARCH = 'PRODUCT_SEARCH';
export const PRODUCT_REMOVE_SEARCH = 'PRODUCT_REMOVE_SEARCH';
export const PRODUCT_CREATE = 'PRODUCT_CREATE';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE';

export const productPin = id => ({
    type: PRODUCT_PIN,
    payload: id 
});

export const productSearch = value => ({
    type: PRODUCT_SEARCH,
    payload: value
});

export const removeSearchKeyWord = index => ({
    type: PRODUCT_REMOVE_SEARCH,
    payload: index
});

export const productCreate = data => ({
    type: PRODUCT_CREATE,
    payload: data
});

export const productClear = id => ({
    type: PRODUCT_REMOVE,
    payload: id
});