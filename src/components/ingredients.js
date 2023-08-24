import React from 'react'
import Image from 'next/image'

import Ingredients1 from '../../public/images/assets/ingreadients1.png'
import Ingredients2 from '../../public/images/assets/ingreadients2.png'
import Ingredients3 from '../../public/images/assets/ingreadients3.png'
import Ingredients4 from '../../public/images/assets/ingreadients4.png'
import Ingredients5 from '../../public/images/assets/ingreadients5.png'

const ingredients = () => {
  return (
    <div className='mt-12'>
    <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
        Organic Ingredients
    </h2>
    <h4 className="text-3xl font-medium text-center">
        Packed With Flovours
    </h4>
    <div className="mt-20 flex flex-row items-center justify-between md:flex-col md:items-center md:justify-center lg:flex-col lg:items-center lg:justify-center">
    <div className="text-center relative lg:mb-10">
    <div className="absolute top-[0.75rem] right-[-0.50rem] z-[-10] w-[100%] h-[80%] rounded-full bg-[gray] dark:bg-[gray] md:w-[100%] md:h-[70%] md:top-[0.80rem] md:right-[-0.500rem]"  />
        <Image className="w-21 h-21 rounded-full border-2 bg-light border-gray-400 md:mb-2"src={Ingredients1} />
        <h4 className="text-lg font-semibold text-center mt-4 md:mb-8">Chicken</h4>
    </div>

    <div className="text-center relative lg:mb-10">
        <div className="absolute top-[0.75rem] right-[-0.50rem] z-[-10] w-[100%] h-[80%] rounded-full bg-[gray] dark:bg-[gray] md:w-[100%] md:h-[70%] md:top-[0.80rem] md:right-[-0.500rem]" />
        <Image className="w-21 h-21 rounded-full border-2 bg-light border-gray-400 md:mb-2"src={Ingredients2} />
        <h4 className="text-lg font-semibold text-center mt-4 md:mb-8">Gluten Free</h4>
    </div>

    <div className="text-center relative lg:mb-10">
        <div className="absolute top-[0.75rem] right-[-0.50rem] z-[-10] w-[100%] h-[80%] rounded-full bg-[gray] dark:bg-[gray] md:w-[100%] md:h-[70%] md:top-[0.80rem] md:right-[-0.500rem]" />
        <Image className="w-21 h-21 rounded-full border-2 bg-light border-gray-400 md:mb-2"src={Ingredients3} />
        <h4 className="text-lg font-semibold text-center mt-4 md:mb-8">Turmeric</h4>
    </div>

    <div className="text-center relative lg:mb-10">
        <div className="absolute top-[0.75rem] right-[-0.50rem] z-[-10] w-[100%] h-[80%] rounded-full bg-[gray] dark:bg-[gray] md:w-[100%] md:h-[70%] md:top-[0.80rem] md:right-[-0.500rem]" />
        <Image className="w-21 h-21 rounded-full border-2 bg-light border-gray-400 md:mb-2"src={Ingredients4} />
        <h4 className="text-lg font-semibold text-center mt-4 md:mb-8">No Preservations</h4>
    </div>

    <div className="text-center relative">
        <div className="absolute top-[0.75rem] right-[-0.50rem] z-[-10] w-[100%] h-[80%] rounded-full bg-[gray] dark:bg-[gray] md:w-[100%] md:h-[70%] md:top-[0.80rem] md:right-[-0.500rem]" />
        <Image className="w-21 h-21 rounded-full border-2 bg-light border-gray-400 md:mb-2"src={Ingredients5} />
        <h4 className="text-lg font-semibold text-center mt-4 md:mb-8">No Carbohydrates</h4>
    </div>
</div>
</div>
  )
}

export default ingredients