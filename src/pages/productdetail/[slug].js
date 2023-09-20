import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image'
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//redux
import { addToCartaction } from '../../../action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

const productDetail = () => {

  const [newproduct, setNewproduct] = useState({})
  const [qty,setQty] = useState(1)

  console.log(qty)

  const router = useRouter();
  const { slug } = router.query;

  const petProductdata = [
    {
      id: 1,
      brand: 'Cherrypops',
      flavour: 'Chicken',
      dietType: 'Non Vegetarian',
      ageRange: 'Puppy',
      itemForm: 'Stick',
      specificUses: 'Weight',
      specialIngredients: ['Chicken, Turmeric, Gluten free, Carbohydrate free'],
      netQuantity: '90.0 gram',
      // numberOfItems: 1,
      price: 290,
      details: "Chicken Jerky Details",
      countInStock: 8,
      ProductName: "Chicken Jerky",
      image1: "/images/assets/CJ1.png",
      image2: "/images/assets/chicken.jpg",
      image3: "/images/assets/tvCarousel1.jpg",
      image4: "/images/assets/tvCarousel3.jpg",
      image5: "/images/assets/tumeric.jpg",
      productDesc: "Cherrypops Chicken Jerky is made with the highest quality Farm Fresh Chicken Breast. Hand cut and Slow dried for 12 hours at the optimum temperature to lock in all the flavours. We use only 2 ingredient- Chicken and Turmeric Chicken breast. Chicken breast is high protein content which helps in muscle building . Turmeric helps improve gut health and prevents gut bacteria. We do not use any fillers or bones or any artificial additives, flavours, colourings. Carbohydrate & Gluten Free - Carbohydrate causes bloating and gluten can cause allergies. So, there is no such ingredients in our products. No preservatives- The chicken jerky is handmade and hand packaged in 3 layer platic polymer packaging with oxygen absorbers. So no preservatives required."
     },
    {
      id: 2,
      brand: 'Cherrypops',
      flavour: 'Fish',
      dietType: 'Non Vegetarian',
      ageRange: 'All Life Stages',
      itemForm: 'Whole',
      specificUses: ['Training, Skin, Snack, Coat'],
      specialIngredients: 'Turmeric',
      netQuantity: '90.0 gram',
      // numberOfItems: 1,
      package_info: 'Tin',
      price: 265,
      details: "Fish bites Details",
      countInStock: 5,
      ProductName: "Fish Bites",
      image1: "/images/assets/FB.png",
      image2: "/images/assets/fish.jpg",
      image3: "/images/assets/tvCarousel2.jpg",
      image4: "/images/assets/tvCarousel4.jpg",
      image5: "/images/assets/tumeric.jpg",
      productDesc: "Cherrypops Fish Bites is made with the highest quality Locally sourced Fish. Cleaned, gutted and Slow dried for 12 hours at the optimum temperature to lock in all the flavours. We use only 2 ingredient- Fish and Turmeric. Fish has High protein content and good fats which promote muscle building and improve cardiovascular health. Turmeric helps improve gut health and prevents gut bacteria. We do not use any fillers or bones or any artificial additives, flavours, colourings. Carbohydrate & Gluten Free - Carbohydrate causes bloating and gluten can cause allergies. So, there is no such ingredients in our products. No preservatives- Our Fish Bites is handmade and hand packaged in 3 layer platic polymer packaging with oxygen absorbers. So no preservatives required."
         
    }
  ]


  useEffect(() => {
    const getproduct = () => {
      const product = petProductdata.find((item) => item.id == slug);
      setNewproduct(product)
    }
    getproduct()
  }, [slug])

  const [imageArray2, setImageArray2] = useState([])

  const [array3, setArray3] = useState({
    image: imageArray2[0]
  })

  useEffect(() => {
    if (newproduct) {
      const imageArray = [newproduct.image1, newproduct.image2, newproduct.image3, newproduct.image4, newproduct.image5];
      setImageArray2(imageArray);
    }
  }, [newproduct]);

  const dispatch = useDispatch()
  const cartproduct = useSelector(state => state.cartproduct)
  const { cartItems } = cartproduct

  const addToCart = () => {

    if (newproduct) {
      const data = {
        id: newproduct.id,
        name: newproduct.ProductName,
        price: newproduct.price,
        brand: newproduct.brand,
        flavour: newproduct.flavour,
        countInStock: newproduct.countInStock,
        image1: newproduct.image1,
        image2: newproduct.image2,
        image3: newproduct.image3,
        image4: newproduct.image4,
        image5: newproduct.image5,
        productDesc: newproduct.productDesc
      }

      dispatch(addToCartaction(qty,data))

      toast.success("Product is added to the cart!",{
        style: {
          fontSize: '1rem',
        }
      })
    }
  }


  const changehandler = (index) => {
    setArray3({
      image: imageArray2[index],
    });
  };
  return (
    <>
    <Head>
        <title>Product Detail</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/images/assets/Cherrypops_logo.png" />
      </Head>
      <TransitionEffect />
      <Layout>
        {
          newproduct &&
          <div>
          <div className='product-detail-container'>
            <div>
              <div className='image-container'>
                <Image src={array3.image == undefined ? imageArray2[0] : array3.image}
                  className='product-detail-image'
                  width={200}
                  height={100}
                  alt='DetailImage'
                />
              </div>
              <div
                className='small-images-container'>
                {
                  imageArray2.map((item, index) => (
                    <Image
                      src={imageArray2[index]}
                      width={60}
                      height={60}
                      onMouseEnter={() => changehandler(index)}
                      alt='SmallImage'
                    />
                  ))
                }
              </div>
            </div>
            <div className='product-detail-desc'>
              <h1 className='font-bold text-5xl md:text-3xl'>{newproduct.ProductName}</h1>

              <h4 className='font-bold text-2xl'>Details:</h4>
              <p>{newproduct.details}</p>
              <h4 className='font-bold text-2xl'>Price:</h4>
              <p className='price'>₹ {newproduct.price}</p>

              <p className='font-bold '>Select Quantity:&nbsp;&nbsp;
              <select name="qty" id="qty" style={{ cursor: "pointer" }}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(newproduct.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              </p>

              <div className='buttons'>
                <button type="button"
                  className='add-to-cart'
                  onClick={() => addToCart()}
                  disabled={newproduct.countInStock === 0}
                >Add to Cart</button>
              </div>


              <div className='product-info-container'>
                <h2 className='font-bold text-5xl my-8 md:my-16'>Product Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4">
                  <div className="product-info-item">
                    <p><strong>Brand:</strong></p>
                    <p>{newproduct.brand}</p>
                  </div>
                  <div className="product-info-item">
                    <p><strong>Flavour:</strong></p>
                    <p>{newproduct.flavour}</p>
                  </div>
                  <div className="product-info-item">
                    <p><strong>Diet Type:</strong></p>
                    <p>{newproduct.dietType}</p>
                  </div>
                  <div className="product-info-item">
                    <p><strong>Specific Uses:</strong></p>
                    <p>{newproduct.specificUses}</p>
                  </div>

                  <div className="product-info-item md:hidden">
                    <p><strong>Special Ingredients:</strong></p>
                    <p className='ingredient-list'>{newproduct.specialIngredients}<br /></p>
                  </div>
                  <div className="product-info-item">
                    <p><strong>Net Quantity:</strong></p>
                    <p>{newproduct.netQuantity}</p>
                  </div>
                  <div className="product-info-item">
                    <p><strong>Number of Items:</strong></p>
                    {/* <p>{newproduct.numberOfItems}</p> */}
                    <p>{newproduct.countInStock}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
                 <h2 className='font-bold text-5xl my-8 md:my-16'>Description:</h2>
                 <p className='product-desc'>{newproduct.productDesc}</p>
              </div>
          </div>
        }

      </Layout>
      <ToastContainer/>
    </>
  )
}

export default productDetail
