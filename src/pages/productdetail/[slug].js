import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image'
import { useRouter } from 'next/router';

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
      specialIngredients: ['Chicken', 'Turmeric', 'Gluten free', 'Carbohydrate free'],
      netQuantity: '90.0 gram',
      // numberOfItems: 1,
      useByDate: '22 JAN 2024',
      price: 290,
      details: "Chicken Jerky Details",
      countInStock: 8,
      ProductName: "Chicken Jerky",
      image1: "/images/assets/1.png",
      image2: "/images/assets/CJ.png",
      image3: "/images/assets/CJ_Back.jpg",
      image4: "/images/assets/Feeding_Guide.jpg",
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
      image1: "/images/assets/3.png",
      image2: "/images/assets/FB_Back.jpg",
      image3: "/images/assets/FB_Guide.jpg",
      image4: "/images/assets/FB_Detail.jpg",
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
      const imageArray = [newproduct.image1, newproduct.image2, newproduct.image3, newproduct.image4];
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
        image4: newproduct.image4
      }

      dispatch(addToCartaction(qty,data))

      window.alert("Product is Added")
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
          <div className='product-detail-container'>
            <div>
              <div className='image-container'>
                <Image src={array3.image == undefined ? imageArray2[0] : array3.image}
                  className='product-detail-image'
                  width={100}
                  height={100}
                  alt='image'
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
                      alt='image'
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
              <p className='price'>{newproduct.price}</p>

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
                  <div className="product-info-item">
                    <p><strong>Use by:</strong></p>
                    <p>{newproduct.useByDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </Layout>
    </>
  )
}

export default productDetail
