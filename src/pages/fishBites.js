import React, {useState} from 'react'

import FishBites from "../../public/images/assets/3.png"
import FBback from "../../public/images/assets/FB_Back.png"
import FBguide from "../../public/images/assets/FB_Guide.jpg"
import FBdetail from "../../public/images/assets/FB_Detail.jpg"


import Image from 'next/image'
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';

const productDetail = (product, products) => {

  const productInfo = {
    brand: 'CherryPops',
    flavour: 'Fish',
    dietType: 'Non Vegetarian',
    ageRange: 'All Life Stages',
    itemForm: 'Whole',
    specificUses: ['Training, Skin, Snack, Coat'],
    specialIngredients: 'Turmeric',
    netQuantity: '90.0 gram',
    numberOfItems: 1,
    package_info:	'Tin'
  };

  const [index, setIndex] = useState(0);

  // const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

  const handleBuyNow = () =>{
    onAdd(product, qty);

    setShowCart(true);
  }

  const imagePaths = [FishBites, FBback, FBguide, FBdetail];

  return (
   <>
    <TransitionEffect />
    <Layout>
       <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <Image src={imagePaths[index]}
            className='product-detail-image' />
          </div>
          <div
              className='small-images-container'>
                {imagePaths?.map((path,i) => (
                 <Image
                 key={i}
                 src={path}
                 className={i === index ? 'small-image selected-image' : 'small-image'}
                 onMouseEnter={() => setIndex(i)}
               />
                ))}
              </div>
        </div>
        <div className='product-detail-desc'>
          <h1 className='font-bold text-5xl'>Fish Bites</h1>
          <div className='reviews'>
            {/* <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div> */}
              {/* <p>
                (20)
              </p> */}
          </div>
          <h4 className='font-bold text-2xl'>Details:</h4>
          <p>ascadbsckbdscknsd</p>
          <h4 className='font-bold text-2xl'>Price:</h4>
          <p className='price'>₹265</p>
          {/* <div className='quantity'>
              <h3>Quantity:</h3>
              <p className='quantity-desc'>
              <span className='minus'
              onClick= {decQty}><AiOutlineMinus />
              </span>

              <span className='num'
              >{qty}
              </span>

              <span className='plus'
              onClick={incQty}><AiOutlinePlus />
              </span>
              </p>
          </div> */}

          <div className='buttons'>
              <button type="button"
              className='add-to-cart'
              onClick={() => onAdd(product, qty)}>Add to Cart</button>

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
                  <p>{productInfo.specificUses.join(', ')}</p>
                </div>

                <div className="product-info-item">
                  <p><strong>Special Ingredients:</strong></p>
                  <p>{productInfo.specialIngredients}</p>
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
                  <p><strong>Package Information</strong></p>
                  <p>{productInfo.package_info}</p>
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