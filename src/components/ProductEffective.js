import React from 'react'
import Image from 'next/image'
import Check from "../../public/images/assets/check.png"
import Layout from './Layout'

const ProductEffective = () => {
    return (
        <>
            <Layout>
                <h2 className='font-bold text-5xl mt-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16'>Our product effectiveness</h2>

                <div className="grid grid-cols-2 mt-32 md:mt-16 md:grid-cols-1 h-60vh">
                    <div className="flex flex-col gap-4 md:gap-8 h-full">
                        <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3  md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Natural Ingredients</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3 md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Vet Approved</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3  md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Tail-Wagging Taste</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3 md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Made With Love</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3  md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Safety And Quality</p>
                        </div>

                        {/* <div className="flex items-center gap-8">
                            <div className="w-16 h-14">
                                <Image className="w-2/3 h-2/3 md:w-1/2 md:h-1/2 rounded-full dark:bg-light" src={Check} alt="check" />
                            </div>
                            <p className="text-lg font-semibold translate-y-[-10px] md:text-base">Happy Babies, Happy Parents</p>
                        </div> */}
                        </div>


                        <div className=" h-full translate-y-[-50px] ">
                            <img className="w-full h-4/5 md:pt-16 md:h-full " src="/images/assets/cat.png" alt="cat" />
                        </div>
                

                </div>

            </Layout>
        </>
    )
}

export default ProductEffective