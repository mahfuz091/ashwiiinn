/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const SingleProductCard = ({ singleProduct }) => {
  // console.log(singleProduct);

  return (
    <div className='product-card cursor-pointer rounded-[20px] bg-[#fff] shadow-primary text-center'>
      <div className='px-[17px] pt-[34px] '>
        <a
          href=''
          className='py-[7px] px-[12px] bg-[#000] text-white text-[13px] font-normal rounded-[17px]'
        >
          Robot Pharmer
        </a>
        <h4 className='text-[#000] text-[20px] font-medium mt-[12px] mb-[25px]'>
          {singleProduct.title}
        </h4>
        <img className='mx-auto mb-[25px]' src={singleProduct.image} alt='' />
      </div>
      <Link href={`/shop-products/${singleProduct.id}`}>
        <div className='product-card_footer flex justify-between  px-[17px] py-[18px] rounded-b-[20px]'>
          <div className='flex flex-col items-start'>
            <h4 className='text-[#fff] text-[24px] font-semibold mb-[5px]'>
              Add To Cart
            </h4>
            <p className='text-[#fff] text-[17px] font-medium'>
              ${singleProduct.price}/unit
            </p>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
            >
              <circle cx='16.1528' cy='16.3477' r='15.3643' fill='#5EAE68' />
              <path
                d='M10.7261 16.3477H21.5796'
                stroke='white'
                stroke-width='2.5'
                stroke-linecap='round'
              />
              <path
                d='M16.1541 10.9209L16.1541 21.7744'
                stroke='white'
                stroke-width='2.5'
                stroke-linecap='round'
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProductCard;
