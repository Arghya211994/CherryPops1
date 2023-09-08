import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrderAction, placeOrderResetAction } from '../../action/orderAction'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CART_RESET } from '../../constant/productConstant'
import { SHIPPING_RESET } from '../../constant/addressConstant'

const placeorder = () => {
    const shippingAddress = useSelector(state => state.shippingAddress)
    const cartproduct = useSelector(state => state.cartproduct)
    const { cartItems } = cartproduct

    const placeOrder = useSelector(state => state.placeOrder)
    const { order } = placeOrder;
    console.log(order)

    const totalcartPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    const router = useRouter()

    const dispatch = useDispatch()

    useEffect(() => {
        if(order){
            router.push(`/orderpayment/${order._id}`)
            dispatch(placeOrderResetAction())
            dispatch({type:CART_RESET})
            dispatch({type:SHIPPING_RESET})
        }
    }, [router,order,dispatch])

    const placeOrderHandler = async () => {
        const orderData = {
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            totalPrice: totalcartPrice
        }
        dispatch(placeOrderAction(orderData))
        toast.success("Order has been placed!", {
            style: {
                fontSize: "1rem"
            }
        })
    }
    return (
        <>
            <Head>
                <title>Place order</title>
                <meta name="description" content="any description" />
                <link rel="icon" href="/images/assets/Cherrypops_logo.png" />
            </Head>
            <TransitionEffect />
            <Layout>
                <div className='grid grid-cols-10 '>

                    <div className='col-span-6 flex flex-col gap-2 mx-[30px] px-[40px] md:col-span-12'
                        style={{
                            boxShadow: "0px 0px 4px rgba(0,0,0,0.3)",
                            paddingBlock: "30px"
                        }}>
                        <h1 className="font-bold text-xl my-5">Place Order :</h1>
                        <h3 style={{
                            fontWeight: "500",
                            fontSize: "25px"
                        }}>Shipping Address</h3>
                        <p>Address: {shippingAddress.address}</p>
                        <p>City: {shippingAddress.city}</p>
                        <p>PostalCode: {shippingAddress.postalCode}</p>
                        <p>Country: {shippingAddress.country}</p>
                        <hr />
                        <h3
                            className='flex flex-col gap-2'
                            style={{
                                fontWeight: "500",
                                fontSize: "25px",
                            }}>Payment Method</h3>
                        <p>Method: Razorpay</p>
                        <hr />
                        <div className='flex flex-col gap-2' >
                            <h3 style={{
                                fontWeight: "500",
                                fontSize: "25px"
                            }}>Order Items</h3>
                            {
                                cartItems.map((item) => (
                                    <div
                                        className='flex flex-col gap-2'
                                        key={item._id}>
                                        <p>{item.name}</p>
                                        <p>₹{item.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <hr />
                    </div>

                    <div className='col-span-4 flex flex-col gap-2 mx-5 px-8 md:col-span-12 '
                    >
                        <h1
                            className='font-bold text-xl my-5'
                            style={{
                                fontSize: "25px"
                            }}>Order Details :</h1>
                        <div className='flex gap-3 mb-5'>
                            <h3 style={{
                                fontWeight: "500",
                                fontSize: "15px"
                            }}>Total Price:
                            </h3>

                            <p style={{
                                fontSize: "15px"
                            }}> ₹{totalcartPrice}</p>
                        </div>


                        {/* <button style={{
                        border: "2px solid black"
                    }}
                        onClick={placeOrderHandler}
                    >Place Order</button> */}

                        {
                            order ? <div
                                className='buttons1'>Proceed to Payment</div> : <button className='buttons1'
                                    onClick={placeOrderHandler}
                                >Place Order</button>
                        }
                    </div>

                </div>

            </Layout>
            <ToastContainer />
        </>
    )
}

export default placeorder
