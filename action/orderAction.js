import { ORDER_PAYMENT_DETAIL_FAIL, ORDER_PAYMENT_DETAIL_REQ, ORDER_PAYMENT_DETAIL_SUCCESS, PLACE_ORDER_FAIL, PLACE_ORDER_REQ, PLACE_ORDER_RESET, PLACE_ORDER_SUCCESS } from "../constant/orderConstant";
import axios from "axios"

export const placeOrderAction = (orderData) => async(dispatch) => {
    try {
        dispatch({type:PLACE_ORDER_REQ})
        const {data} = await axios.post("https://cherrypopsbackend.onrender.com/api/order",orderData)
        
        dispatch({
            type:PLACE_ORDER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PLACE_ORDER_FAIL,
            payload:error
        })
    }
}

export const orderpaymentDetailAction = (id) => async(dispatch) => {
    try {
        dispatch({type:ORDER_PAYMENT_DETAIL_REQ})
        const {data} = await axios.post(`https://cherrypopsbackend.onrender.com/api/orderpayment/${id}`)
        
        dispatch({
            type:ORDER_PAYMENT_DETAIL_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ORDER_PAYMENT_DETAIL_FAIL,
            payload:error
        })
    }
}

export const placeOrderResetAction = () => async(dispatch) => {
    dispatch({type:PLACE_ORDER_RESET})
}