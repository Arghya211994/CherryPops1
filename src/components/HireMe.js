import React from "react";
import Link from "next/link";




const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 sm:right-0 md:right-8 md:mr-3 md:left-auto md:top-80 md:bottom-auto md:fixed xs:mr-8">
      <div className="w-20 h-20 md:w-12 md:h-12">
        {/* Adjusted CSS classes for the Link */}
        <Link
          href="/contactUs" title="Contact Us"
          className="flex items-center justify-center absolute inset-0 bg-dark
           text-light shadow-md border border-solid border-dark rounded-full 
           font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light
            hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] text-center"
        >
         Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HireMe;


