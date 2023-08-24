import React from 'react';
import Image1 from '../../public/images/assets/liveImage_1.jpg';
import Image2 from '../../public/images/assets/liveImage_2.jpg';
import Image3 from '../../public/images/assets/liveImage_3.jpg';
import Image4 from '../../public/images/assets/liveImage_4.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './Layout';

const Instagram = () => {
  return (
    <Layout className='my-16'>
      <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
        Follow us on Instagram
      </h2>
      <div className='flex flex-wrap gap-5 justify-between md:flex-col md:items-center lg:flex-col lg:items-center'>
        <div className="w-1/5 md:w-full lg:w-full">
          <Link href="https://www.instagram.com/p/CoEyONOvfs_/">
            
              <Image
                src={Image1}
                alt="CP"
                className="w-full h-full rounded-2xl object-cover"
                priority
              />
          
          </Link>
        </div>
        <div className="w-1/5 md:w-full lg:w-full">
          <Link href= 'https://www.instagram.com/p/ClBiZHcpKcQ/'>
            
              <Image
                src={Image2}
                alt="CB"
                className="w-full h-full rounded-2xl object-cover"
                priority
              />
           
          </Link>
        </div>
        <div className="w-1/5 md:w-full lg:w-full">
          <Link href= 'https://www.instagram.com/p/CiPXWPXpRfe/'>
         
              <Image
                src={Image3}
                alt="CB"
                className="w-full h-full rounded-2xl object-cover"
                priority
              />
            
          </Link>
        </div>
        <div className="w-1/5 md:w-full lg:w-full">
          <Link href='https://www.instagram.com/p/Cpm_odbM3uj/?img_index=1'>
         
              <Image
                src={Image4}
                alt="CB"
                className="w-full h-full rounded-2xl object-cover"
                priority
              />
           
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default Instagram;