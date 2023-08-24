import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex
    flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        {/* <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span> */}

        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const ProductDesc = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">Why Choose Us</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] h-full bg-dark dark:bg-light origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justifyp-between  ml-4 xs:ml-4 ">
          <Details
            type="Natural Ingredients"
            info="We use high quality sourced ingredients without any artificial additives, colors or preservatives."
          />

          <Details
            type="Vet Approved"
            info="Our treats are veterinarian approved, ensuring they are safe and beneficial for your furry friend's health."
          />

          <Details
            type="Tail-Wagging taste"
            info="Our recipes are designed to be irresistibly tasty, making your pet's day a little brighter with every bite."
          />

          <Details
            type="Made with Love"
            info="Each treat is made with love and dedication in small batches, just like we would treat our own beloved better halves."
          />

          <Details
            type="Safety and Quality"
            info="We follow strict quality and baking standards to guarantee that our treats meet the highest safety and hygiene requirements."
          />

          <Details
            type="Happy babies, happy parents"
            info="Our treats have earned the seal of approval from coutless happy furbabies and their owners."
          />

        </ul>
      </div>
    </div>
  );
};

export default ProductDesc;
