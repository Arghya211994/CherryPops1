import { PLACE_ORDER } from "../constant/orderConstant";
import axios from "axios"

export const placeOrderAction = (orderData) => async(dispatch) => {
    try {
        const {data} = await axios.post("https://cherrypopsbackend.onrender.com/api/order",orderData)
        
        dispatch({
            type:PLACE_ORDER,
            payload:data
        })
    } catch (error) {
        
    }
}