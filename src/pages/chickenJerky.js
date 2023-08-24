import React, { useState,useEffect } from 'react'
import ChickenJerky from "../../public/images/assets/1.png"
import JerkyDetail from "../../public/images/assets/CJ.png"
import JerkyBack from "../../public/images/assets/CJ_Back.jpg"
import Guide from "../../public/images/assets/Feeding_Guide.jpg"
import Image from 'next/image'
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';

//redux
import { addToCartaction } from '../../action/productAction'
import { useDispatch, useSelector } from 'react-redux';



const productDetail = () => {

  const productInfo = {
    brand: 'CherryPops',
    flavour: 'Chicken',
    dietType: 'Non Vegetarian',
    ageRange: 'Puppy',
    itemForm: 'Stick',
    specificUses: 'Weight',
    specialIngredients: ['Chicken', 'Turmeric', 'Gluten free', 'Carbohydrate free'],
    netQuantity: '90.0 gram',
    numberOfItems: 1,
    useByDate: '22 JAN 2024',
  };

  const [index, setIndex] = useState(0);


  const imagePaths = [ChickenJerky, JerkyBack, Guide, JerkyDetail];

  const dispatch = useDispatch()
  const cartproduct = useSelector(state => state.cartproduct)
  const { cartItems } = cartproduct
  console.log(cartItems)

  const addToCart = () => {

    const data = {
      id: 1,
      name: "Chicken Jerky",
      price: 290,
      brand: "cherrypops",
      flavour: "chicken",
      image:imagePaths[0]
    }

    dispatch(addToCartaction(data))
    
  }

  return (
    <>
      <TransitionEffect />
      <Layout>
        <div className='product-detail-container'>
          <div>
            <div className='image-container'>
              <Image src={imagePaths[index]}
                className='product-detail-image' alt='image' />
            </div>
            <div
              className='small-images-container'>
              {imagePaths?.map((path, i) => (
                <Image
                  key={i}
                  src={path}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                  alt='image'
                />
              ))}
            </div>
          </div>
          <div className='product-detail-desc'>
            <h1 className='font-bold text-5xl md:text-3xl'>Chicken Jerky</h1>

            <h4 className='font-bold text-2xl'>Details:</h4>
            <p>ascadbsckbdscknsd</p>
            <h4 className='font-bold text-2xl'>Price:</h4>
            <p className='price'>₹290</p>
            <p className='font-bold text-2xl'>Select Quantity:&nbsp;&nbsp;
              <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </p>
            <div className='buttons'>
              <button type="button"
                className='add-to-cart'
                onClick={() => addToCart()}
                disabled={cartItems.length > 0 && cartItems[0].id == 1 ? true : false}
              >Add to Cart</button>

              <button type="button"
                className='buy-now'
                onClick={() => {
                  window.location.href = "/checkout";
                }}
              >Buy Now</button>
            </div>


            <div className='product-info-container'>
              <h2 className='font-bold text-5xl my-8 md:my-16'>Product Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4">
                <div className="product-info-item">
                  <p><strong>Brand:</strong></p>
                  <p>{productInfo.brand}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Flavour:</strong></p>
                  <p>{productInfo.flavour}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Diet Type:</strong></p>
                  <p>{productInfo.dietType}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Specific Uses:</strong></p>
                  <p>{productInfo.specificUses}</p>
                </div>

                <div className="product-info-item">
                  <p><strong>Special Ingredients:</strong></p>
                  <p>{productInfo.specialIngredients.join(', ')}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Net Quantity:</strong></p>
                  <p>{productInfo.netQuantity}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Number of Items:</strong></p>
                  <p>{productInfo.numberOfItems}</p>
                </div>
                <div className="product-info-item">
                  <p><strong>Use by:</strong></p>
                  <p>{productInfo.useByDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default productDetail