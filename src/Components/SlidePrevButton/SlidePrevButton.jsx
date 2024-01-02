"use client";
import { React } from "react";

const SlidePrevButton = ({ swiperRef }) => {
  return (
    <button
      className=' cursor-pointer w-[47px] h-[47px] mr-[24px] bg-[#B7AFC0] hover:bg-[#442862] text-white font-bold py-2 px-4 rounded-full'
      onClick={() => swiperRef.current.slidePrev()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='14'
        viewBox='0 0 17 14'
        fill='none'
      >
        <path
          d='M1.27344 7.20357L15.0234 7.20357'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6.81885 12.7259L1.27302 7.20395L6.81885 1.68103'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  );
};

export default SlidePrevButton;
