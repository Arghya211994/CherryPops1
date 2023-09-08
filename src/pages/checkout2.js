import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addShippingAction } from '../../action/shippingAction'
import {useRouter} from 'next/router'
import Head from 'next/head'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const checkout2 = () => {
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [postalCode,setPostalCode] = useState("")
  const [country,setCountry] = useState("")
  
  const dispatch = useDispatch()
  const router = useRouter()

  const submitHandler = () => {
    if(!address && !city && !postalCode && !country){
      toast.error("Please fill all the fields!",{
        style:{
          fontSize:"1rem"
        }
      })
    }else if(!address){
      toast.error("Address is not present!",{
        style:{
          fontSize:"1rem"
        }
      })
    }else if(!city){
      toast.error("City is not present!",{
        style:{
          fontSize:"1rem"
        }
      })
    }else if(!postalCode){
      toast.error("Postal Code is not present!",{
        style:{
          fontSize:"1rem"
        }
      })
    }else if(!country){
      toast.error("Country is not present!",{
        style:{
          fontSize:"1rem"
        }
      })
    }else{
      const data = {
        address,
        city,
        postalCode,
        country
      }
      dispatch(addShippingAction(data))
      router.push("/placeorder")
    }
    
  }
  return (
    <>
        <Head>
        <title>CheckOut</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/images/assets/Cherrypops_logo.png" />
      </Head>
    <TransitionEffect />
    <Layout>
      <main className='checkout2'>
        <h2 className='checkout-heading'>Fill Your Address Details:</h2>

        <div>
          <label htmlFor="">Address</label>
          <input 
          type="text" 
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">City</label>
          <input 
          type="text" 
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Postal Code</label>
          <input 
          type="text"
          placeholder='Postal Code'
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Country</label>
          <input 
          type="text" 
          placeholder='Country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <button 
        onClick={submitHandler}
        >Submit</button>
      </main>
    </Layout>
    <ToastContainer/>
    </>
  )
}

export default checkout2