import { ADD_SHIPPING_ADDRESS } from "../constant/addressConstant";

export const addShippingAction = (data) => {
    return (dispatch) => {
        dispatch({
            type:ADD_SHIPPING_ADDRESS,
            payload:data
        })
    }
}