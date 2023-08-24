import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrderAction } from '../../action/orderAction'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const placeorder = () => {
    const shippingAddress = useSelector(state => state.shippingAddress)
    const cartproduct = useSelector(state => state.cartproduct)
    const { cartItems } = cartproduct

    const placeOrder = useSelector(state => state.placeOrder)
    const {order} = placeOrder;
    console.log(order)

    const totalcartPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    const router = useRouter()

    const dispatch = useDispatch()

    const placeOrderHandler = async () => {
        const orderData = {
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            totalPrice: totalcartPrice
        }
        dispatch(placeOrderAction(orderData))
        window.alert("Order has been placed")
        // if(order){
        //     router.push(`/orderpayment/${order._id}`)
        // }
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
                    boxShadow:"0px 0px 4px rgba(0,0,0,0.3)",
                    paddingBlock:"30px"
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
                        order ? <Link href={`/orderpayment/${order._id}`}
                        className='buttons1'>Proceed to Payment</Link> :<button className='buttons1'
                            onClick={placeOrderHandler}
                        >Place Order</button>
                    }
                    </div>

                </div>
               
            </Layout>
        </>
    )
}

export default placeorder
