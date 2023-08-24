import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addShippingAction } from '../../action/shippingAction'
import {useRouter} from 'next/router'
import Head from 'next/head'

const checkout2 = () => {
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [postalCode,setPostalCode] = useState("")
  const [country,setCountry] = useState("")
  
  const dispatch = useDispatch()
  const router = useRouter()

  const submitHandler = () => {
    const data = {
      address,
      city,
      postalCode,
      country
    }
    dispatch(addShippingAction(data))
    router.push("/placeorder")
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
    </>
  )
}

export default checkout2