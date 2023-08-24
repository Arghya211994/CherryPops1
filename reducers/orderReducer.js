import { PLACE_ORDER } from "../constant/orderConstant";

export const placeOrderReducer = (state={},action) => {
    switch(action.type){
        case PLACE_ORDER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}