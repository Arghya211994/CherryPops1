import { ADD_SHIPPING_ADDRESS } from "../constant/addressConstant";

export const shippingAddressReducer = (state = {},action) => {
    switch(action.type){
        case ADD_SHIPPING_ADDRESS:
            return {
              ...state,
                ...action.payload
            }
        default:
            return state
    }
}