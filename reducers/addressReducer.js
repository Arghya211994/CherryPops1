import { ADD_SHIPPING_ADDRESS, SHIPPING_RESET } from "../constant/addressConstant";

export const shippingAddressReducer = (state = {},action) => {
    switch(action.type){
        case ADD_SHIPPING_ADDRESS:
            return {
              ...state,
                ...action.payload
            }
        case SHIPPING_RESET:
            return {}
        default:
            return state
    }
}