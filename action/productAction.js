import { ADD_TO_CART, REMOVE_TO_CART } from "../constant/productConstant"

export const addToCartaction = (qty,data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id: data.id,
                name: data.name,
                price: data.price,
                brand: data.brand,
                flavour: data.flavour,
                qty:Number(qty),
                countInStock: data.countInStock,
                image1: data.image1,
                image2: data.image2,
                image3: data.image3,
                image4: data.image4
              }
        });
    };
};

export const removeToCartaction = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TO_CART,
            payload: id
        });
    };
};



