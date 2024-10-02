// src/reducers/CartReducer.js
export const CartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: action.payload.products,
                total: action.payload.total
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartList: action.payload.products,
                total: action.payload.total
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartList: [],
                total: 0
            };
        default:
            return state;
    }
};
