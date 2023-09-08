import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import image from "/public/images/assets/1.png"
import { addToCartaction, removeToCartaction } from '../../action/productAction'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const cartproduct = useSelector(state => state.cartproduct)
  const { cartItems } = cartproduct;

  const removehandler = (id) => {
    dispatch(removeToCartaction(id))
    toast.success("Product deleted from the cart!",{
      style:{
        fontSize:"1rem"
      }
    })
  }
  
  const checkoutHandler = () => {
    if(cartItems && cartItems.length > 0){
      router.push("/checkout2")
    }else{
      toast.error("Your Cart is empty",{
        style:{
          fontSize:"1rem"
        }
      })
    }
  }

  return (
    <>
        <Head>
        <title>Cart</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/images/assets/Cherrypops_logo.png" />
      </Head>
      <TransitionEffect />
      <Layout>
        <div className='grid grid-cols-10 gap-6'>
          <div className='col-span-7 md:col-span-12'>
            {
              cartItems && cartItems.length > 0 ? (
                <div>
                  {cartItems.map((product) => (
                    <div
                      className='cart-each-items cart-product'
                      key={product._id}
                    >
                      <div className='cart-image-main'>
                        <Image src={product.image1} width={100} height={100} 
                        className='cart-image' 
                        />
                      </div>
                      <div className='cart-name'>
                      <h1 >Name: {product.name}</h1>
                      </div>
                      <div className='cart-price'>
                      <p>Price: ₹{product.price}</p>
                      </div>
                     

                    <div className='mobile-delete'>
                      <p>Quantity : {product.qty}</p>

                      <button
                        type='button'
                        className='delete' 
                        onClick={() => removehandler(product.id)}
                      >
                        <MdDeleteForever />
                      </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No Product Present</p>
              )
            }
          </div>

          <div className='col-span-3 md:col-span-12'>
            <h1 className='transform capitalize font-bold text-4xl'>Total</h1>

            {/* Display individual cart items and accumulate prices */}
            {cartItems.map((item) => (
              <div className='flex justify-between items-start my-4' key={item._id}>
                <p className='transform capitalize font-normal text-base'>{item.name}</p>
                <p>₹{item.price} * {item.qty}</p>
              </div>
            ))}

            <div className='border-t-2 border-black' />

            {/* Calculate and display subtotal */}
            <div className='flex justify-between items-start my-4'>
              <p className='transform capitalize font-bold text-2xl'>Subtotal:</p>
              <p>₹{cartItems.reduce((acc, item) => acc + item.price*item.qty, 0)}</p>
            </div>

            <div
              onClick={checkoutHandler}
              type="button"
              className='bg-black text-white font-semibold py-2 px-4 my-10 rounded-full !text-center'
            >CheckOut</div>
          </div>
        </div>

      </Layout>
      <ToastContainer/>
    </>
  )
}

export default cart

