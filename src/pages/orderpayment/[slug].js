import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Razorpay from "../../../public/images/assets/Razorpay.png"
import Image from 'next/image'
import Head from 'next/head'

const orderpayment = () => {

  const router = useRouter();
  const { slug } = router.query;

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  React.useEffect(() => {
    // Load the Razorpay script
    loadScript('https://checkout.razorpay.com/v1/checkout.js').then(() => {
      // Initialize Razorpay here or wherever needed
      // For example, you can create a Razorpay button, handle payments, etc.
      // Refer to Razorpay documentation for integration details
    });
  }, []);

  const shippingAddress = useSelector(state => state.shippingAddress)
  const cartproduct = useSelector(state => state.cartproduct)
  const { cartItems } = cartproduct

  const totalcartPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  const paymentHandler = async () => {
    const { data: { order } } = await axios.post("https://cherrypopsbackend.onrender.com/api/checkout", {
      amount: totalcartPrice
    })

    const options = {
      key: "rzp_test_zKYwh3x2GkH8GL",
      amount: order.amount,
      currency: "INR",
      name: "Sagnik Nandy",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: `https://cherrypopsbackend.onrender.com/api/paymentverification/${slug}`,
      prefill: {
        name: "Gaurav Kumar",//the name of the logged in user
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#F05151"
      }
    };

    const razor = new window.Razorpay(options)
    razor.open()  
  }
  return (
    <>
        <Head>
        <title>Order Payment</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/images/assets/Cherrypops_logo.png" />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className='grid grid-cols-10'>
        <div className='col-span-6 flex flex-col gap-2 mx-[30px] px-[40px] md:col-span-12 md:mx-0 md:px-8'
         style={{
          boxShadow:"0px 0px 4px rgba(0,0,0,0.3)",}}>
        <h1 
        className='font-bold text-xl my-5'
       >Order Payment :</h1>
        <div className='flex flex-col gap-2'>
        <h3 
        className='my-3'
        style={{
          fontWeight: "500",
          fontSize: "25px"
        }}>Shipping Address</h3>
        <p className='mb-3'>Address: {shippingAddress.address}</p>
        <p className='mb-3'>City: {shippingAddress.city}</p>
        <p className='mb-3'>PostalCode: {shippingAddress.postalCode}</p>
        <p className='mb-3'>Country: {shippingAddress.country}</p>
        <hr />
        </div>
        
        <h3 
        className='my-3'style={{
          fontWeight: "500",
          fontSize: "25px"
        }}>Payment Method</h3>
        <p className='mb-3'>Method: Razorpay</p>
        <hr />
        <h3 
        className='my-3'
        style={{
          fontWeight: "500",
          fontSize: "25px"
        }}>Order Items</h3>
        {
          cartItems.map((item) => (
            <div key={item._id}>
              <p className='mb-3'>{item.name}</p>
              <p className='mb-3'>₹{item.price}</p>
            </div>
          ))
        }
        <hr />
        </div>

        <div className='col-span-3 flex flex-col gap-2 mx-2 px-4 md:col-span-12 md:mx-0 md:px-8'>
        <div className='px-5 py-5 md:mx-0 md:my-4 md:py-3 
        ' style={{
          boxShadow:"0px 0px 4px rgba(0,0,0,0.3)",}}>
          <p 
           className='my-3'
           style={{
            fontWeight: "500",
            fontSize: "25px"
          }}>Order Summary</p>
          <p className='mb-3'
          style={{
            fontWeight: "500",
            fontSize: "15px"
        }}>Total Price: ₹{totalcartPrice}</p>
          <div>
          <button 
          className= 'md:mt-5 razorpay-btn'
          style={{
          boxShadow:"0px 0px 4px rgba(0,0,0,0.3)",
          marginTop:"10px",
          borderRadius:"3px",
          width:"66%",
          height:"60px"

        }}
          onClick={paymentHandler}
        >
          <Image src={Razorpay} width={100} height={100} className='razor-img'/>
        </button>
        </div>
          </div>
        </div>
        
      
        </main>
       
      </Layout>
    </>
  )
}

export default orderpayment
