import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion"

import { AiOutlineShopping } from 'react-icons/ai';

import { FaFacebook } from 'react-icons/fa';
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Instagram from "../../public/images/assets/instagram.png"
import Facebook from "../../public/images/assets/facebook.png"
import WhatsApp from "../../public/images/assets/whatsapp.png"

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeToCartaction } from "../../action/productAction";



const CustomLink = ({ href, title, className = "" }) => {

  const ShoppingCartDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  }

  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span
        className={`h-[1px] inline-block bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-dark`}
      ></span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const dispatch = useDispatch()
  const cartproduct = useSelector(state => state.cartproduct)
  const { cartItems } = cartproduct

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const router = useRouter()

  const removehandler = (id) => {
    dispatch(removeToCartaction(id))
  }


  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

      <button className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-3' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/shop" title="Shop" className="mx-4" />
          <CustomLink href="/contactUs" title="Contact Us" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">

          <motion.a href="https://www.instagram.com/cherrypops.in/" target={"_blank"} className="w-20 mx-4"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <Image src={Instagram} alt="Instagram Icon" width={40} height={40} />
          </motion.a>
          <motion.a href="https://www.facebook.com/cherrypops.in?mibextid=ZbWKwL" target={"_blank"} className="w-20 mx-4"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <Image src={Facebook} alt="Facebook Icon" width={40} height={40} />
          </motion.a>
          <motion.a href="/" target={"_blank"}
            className="w-20 mx-4 bg-light rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <Image src={WhatsApp} alt="Whatsapp Icon" width={40} height={40} />
          </motion.a>

          <div
            className="cart-icon"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => router.push('/cart')}
          >
            <AiOutlineShopping
              className="cart-icon2"
            />
            {
              dropdown && (
                <div className="drop">
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map((product) => (
                      <div className="dropdown-content">
                        <div>
                          <p>{product.name}</p>
                          <p>₹{product.price}</p>
                        </div>
                        <button type='button' className='delete2' onClick={() => removehandler(product.id)}>
                          <MdDeleteForever />
                        </button>
                      </div>

                    ))
                  ) : (
                    <p>No Products</p>
                  )}
                </div>
              )
            }
          </div>

        </nav>
      </div>
      {/********************************  mobile part ***********************************/}
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
              <CustomMobileLink href="/shop" title="Shop" className="" toggle={handleClick} />
              <CustomMobileLink href="/contactUs" title="Contact Us" className="" toggle={handleClick} />
             
              
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a href="https://www.instagram.com/cherrypops.in/" target={"_blank"} className="w-8 mx-6 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <Image src={Instagram} alt="Instagram Icon" width={50} height={50} />
              </motion.a>
              <motion.a href="https://www.facebook.com/cherrypops.in?mibextid=ZbWKwL" target={"_blank"}
                className="w-8 mx-6 bg-light rounded-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <Image src={Facebook} alt="Facebook Icon" width={50} height={50} />
              </motion.a>
              <motion.a href="/" target={"_blank"} className="w-8 mx-6 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <Image src={WhatsApp} alt="Whatsapp Icon" width={50} height={50} />
              </motion.a>

              <div
            className="cart-icon"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => {
              router.push('/cart');
              handleClick(); 
            }}
          >
            <AiOutlineShopping
              className="cart-icon2 text-white"
            />
            {
              dropdown && (
                <div className="drop">
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map((product) => (
                      <div className="dropdown-content">
                        <div>
                          <p>{product.name}</p>
                          <p>{product.price}</p>
                        </div>
                        <button type='button' className='delete2' onClick={() => removehandler(product.id)}>
                          <MdDeleteForever />
                        </button>
                      </div>

                    ))
                  ) : (
                    <p>No Products</p>
                  )}
                </div>
              )
            }
          </div>
            </nav>
          </motion.div>

          : null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
