import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from './Layout';

const TvCarousel = () => {
  return (
    <>
    <Layout>
      <main className='tv-box lg:hidden'>
      <h1 className='font-bold text-3xl mt-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16 lg:hidden'>Check Out Your Products</h1>
        <div className='tv'>
          <div className='innerdiv'>
            <Carousel
              showThumbs={false}
              showIndicators={true}
              infiniteLoop={true}
              autoPlay={false}
              showStatus={false}
              showArrows={false}
            >
              <div className='carousel-img'>
<img src="/images/Assets/tvCarousel1.jpg" alt='img1' />
</div>
<div className='carousel-img'>
<img src="/images/Assets/tvCarousel2.jpg" alt='img2' />
</div>
<div className='carousel-img'>
<img src="/images/Assets/tvCarousel3.jpg" alt='img3' />
</div>
<div className='carousel-img'>
<img src="/images/Assets/tvCarousel4.jpg" alt='img4' />
</div>
            </Carousel>
          </div>
        </div>
        {/* <div className='right-div'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quam.
            At placeat repudiandae totam temporibus quos aspernatur impedit, molestiae excepturi ea nemo magnam,
            natus a! Quaerat esse facilis totam possimus pariatur, voluptates provident saepe similique rem neque!
            Ipsa, veniam modi.
          </p>
        </div> */}
        
      </main>
      </Layout>
    </>
  )
}

export default TvCarousel

