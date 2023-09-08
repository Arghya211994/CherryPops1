import { ORDER_PAYMENT_DETAIL_FAIL, ORDER_PAYMENT_DETAIL_REQ, ORDER_PAYMENT_DETAIL_SUCCESS, PLACE_ORDER_FAIL, PLACE_ORDER_RESET, PLACE_ORDER_SUCCESS } from "../constant/orderConstant";

export const placeOrderReducer = (state={},action) => {
    switch(action.type){
        case PLACE_ORDER_FAIL:
            return {loading:true}
        case PLACE_ORDER_SUCCESS:
            return {
                loading:false,
                ...action.payload
            }
        case PLACE_ORDER_FAIL:
            return {loading:false,error:action.payload}
        case PLACE_ORDER_RESET:
            return {}
        default:
            return state
    }
}

export const orderpaymentDetailReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_PAYMENT_DETAIL_REQ:
            return {loading:true}
        case ORDER_PAYMENT_DETAIL_SUCCESS:
            return {loading:false,...action.payload}
        case ORDER_PAYMENT_DETAIL_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}