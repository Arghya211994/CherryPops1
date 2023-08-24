import { ADD_TO_CART,REMOVE_TO_CART } from "../constant/productConstant"

export const cartproductReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (product) => product.id === newItem.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((product) =>
                        product.id === existingItem.id ? newItem : product
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                };
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((product) => product.id !== action.payload)
            }

        default:
            return state
    }
} 