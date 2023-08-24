// import React from 'react'
// import Testimonial from "../../public/images/assets/testimonials.png"
// import Image from 'next/image'

// const Testimonials = () => {
//     return (
//         <div className='my-32'>
//             <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
//                 Testimonials
//             </h2>
//             <div className="col-span-3 relative h-max rounded-2xl bg-light p-8 dark:bg-dark dark:border-light xl:col-span- md:order-1 md:col-span-8">
//   <p className="">
//     "My picky eater absolutely loves the chicken-flavored biscuits! Thanks, Paw-some Treats!" 
//     - Sarah W.
//   </p>
//   <Image
//     src={Testimonial}
//     alt="CB"
//     className="w-[80%] h-[60%] rounded-2xl items-center"
//     priority
//     sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vh, 20vw"
//   />
//   {/* <div className="absolute -top-3 -right-3 -z-10 w-1/4 rounded-[2rem] bg-dark dark:bg-light" /> */}
// </div>
// </div>


//     )
// }

// export default Testimonials

import React, { useState } from 'react';
import Testimonial from "../../public/images/assets/testimonials.png"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React icons
import Image from 'next/image'

const TestimonialSlider = () => {
  const testimonials = [
    "My picky eater absolutely loves the chicken-flavored biscuits! Thanks, Paw-some Treats! - Sarah W.",
    // Add more testimonials here
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='my-32'>
      <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
        Testimonials
      </h2>
      <div className="col-span-3 relative h-max rounded-2xl bg-light p-8 dark:bg-dark dark:border-light xl:col-span- md:order-1 md:col-span-8">
        <p className="">{testimonials[currentIndex]}</p>
        <Image
          src={Testimonial}
          alt="CB"
          className="w-[80%] h-[60%] rounded-2xl items-center"
          priority
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vh, 20vw"
        />

        <Image
          src={Testimonial}
          alt="CB"
          className="w-[80%] h-[60%] rounded-2xl items-center"
          priority
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vh, 20vw"
        />

        <Image
          src={Testimonial}
          alt="CB"
          className="w-[80%] h-[60%] rounded-2xl items-center"
          priority
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vh, 20vw"
        />
        <div className="flex justify-center mt-4">
          <FaChevronLeft className="cursor-pointer" onClick={handlePrevClick} />
          <FaChevronRight className="cursor-pointer" onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;






