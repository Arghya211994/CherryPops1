import Link from 'next/link'
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

import Cherrypops from "../../public/images/assets/Cherrypops_logo.png"

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/'
        className='w-16 h-16 text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light bg-light' 
        // whileHover={{
        //     backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        //     transition: {repeat: 3, repeat: Infinity}
        // }}
        >
          <Image src={Cherrypops} alt='CP'/>
        </MotionLink>
    </div>
  )
}

export default Logo