"use client";
import { React, useRef } from "react";

const SlideNextButton = ({ swiperRef }) => {
  return (
    <button
      className=' cursor-pointer w-[47px] h-[47px] mr-[24px] bg-[#B7AFC0] hover:bg-[#442862] text-white font-bold py-2 px-4 rounded-full'
      onClick={() => swiperRef.current.slideNext()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='14'
        viewBox='0 0 17 14'
        fill='none'
      >
        <path
          d='M15.4795 6.7017L1.72949 6.7017'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M9.93408 1.17933L15.4799 6.70133L9.93408 12.2242'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  );
};
export default SlideNextButton;
