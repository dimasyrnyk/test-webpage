import {
    PRODUCT_PIN,
    PRODUCT_SEARCH,
    PRODUCT_REMOVE_SEARCH,
    PRODUCT_CREATE,
    PRODUCT_REMOVE
} from './actions';


const initialState = {
    products: [
        {
            id: 1,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Nike 2000",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        },
        {
            id: 2,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Reebok Old",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        },
        {
            id: 3,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Puma Lazy",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        },
        {
            id: 4,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Adidas YZ Boost",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        },
        {
            id: 5,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Adidas Old",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        },
        {
            id: 6,
            src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e056c69af9654358affbac5300b13c79_9366/adidas_x_LEGO(r)_Sport_Shoes_Zolty_FY8441_01_standard.jpg",
            title: "Nike Air Max",
            price: 200,
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            pin: false
        }
    ],
    searchKeyWords: []
};
  


export default function productsReducer (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_PIN:
            let copyState = {...state};
            let arr = copyState.products.filter(product => product.pin);
            if (arr.length > 0) {
                if (arr[0].id === action.payload) {
                    let index = copyState.products.findIndex(el => el.id === action.payload);
                    copyState.products[index].pin = false;
                }
            } else if (arr.length === 0) {
                let index = copyState.products.findIndex(el => el.id === action.payload);
                copyState.products[index].pin = true;
            }
            return copyState;
        case PRODUCT_SEARCH:
            let newState = {...state};
            newState.searchKeyWords.push(action.payload);
            return newState;
        case PRODUCT_REMOVE_SEARCH:
            let splicedState = {...state};
            splicedState.searchKeyWords.splice(action.payload, 1);
            return splicedState;
        case PRODUCT_CREATE:
            let newProductList = {...state};
            newProductList.products.push(action.payload);
            return newProductList;
        case PRODUCT_REMOVE:
            let filteredState = {...state};
            filteredState.products = filteredState.products.filter(product => product.id !== action.payload);
            return filteredState;
        default:
            return state;
    }
}