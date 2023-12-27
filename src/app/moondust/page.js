/* eslint-disable @next/next/no-img-element */

import Header from "@/Components/Header/Header";
import Products from "@/Components/products/Products";

import React from "react";

export const metadata = {
  title: "LeafLink | The Wholesale Cannabis Platform",
  description: "Generated by create next app",
};
const MoonDustPage = () => {
  return (
    <div>
      <Header title={"Moon Dust"}></Header>
      <section className='banner container mx-auto '>
        <div className='banner-header mt-[95px] rounded-[25px] mb-[70px]'>
          <h4 className='text-white text-5xl font-semibold py-[178px] pl-[98px] '>
            MOON DUST
          </h4>
        </div>
        <div className='moondust-desc px-[180px] mb-[116px]'>
          <div className='flex justify-between items-center '>
            <h3 className='uppercase text-[40px] font-semibold '>Moon Dust</h3>
            <div>
              <div className='flex items-center gap-[11px]'>
                <div className='text-white text-[13px] bg-[#442862] px-[12.72px] py-[3.64px] rounded-[12px]'>
                  Med
                </div>
                <p className='text-[17px] text-[#448E4D] font-normal'>
                  PAAA-LB8B-DFCC
                </p>
              </div>
              <p className='text-[15px] text-[#535353] font-normal '>
                Cartridges, Topicals, Edibles & Ingestibles
              </p>
            </div>
          </div>
          <p className='text-[17px] text-[#535353] font-normal leading-[27px] mt-[36px] mb-[63px]'>
            Praesent varius dui dolor, at blandit arcu porta sed. Sed ac
            accumsan ipsum. Fusce tincidunt lorem non ante interdum, cursus
            sagittis dolor pulvinar. Donec sit amet malesuada ipsum. Fusce
            lobortis velit in rhoncus convallis. Fusce suscipit erat vitae
            rhoncus volutpat. Nunc nec nisl dapibus, porttitor lectus in,
            fringilla urna. Aenean viverra fringilla finibus. Aenean eu libero
            urna. Quisque dapibus ex tempus mi feugiat, ut posuere eros mollis.
            Morbi ut congue nulla.
          </p>
          <div className='flex justify-between'>
            <a
              href='ilovemoondust.com'
              className='flex items-center gap-[12px]'
            >
              <img src='/icon/Link.png' alt='icon' />
              ilovemoondust.com
            </a>
            <a
              href='ilovemoondust.com'
              className='flex items-center gap-[12px]'
            >
              <img src='/icon/Phone.png' alt='icon' />
              (015) 857-8926
            </a>
            <a
              href='ilovemoondust.com'
              className='flex items-center gap-[12px]'
            >
              <img src='/icon/Email.png' alt='icon' />
              james@hotmail.com
            </a>
            <a
              href='ilovemoondust.com'
              className='flex items-center gap-[12px]'
            >
              <img src='/icon/Location.png' alt='icon' />
              112 W Main Street
            </a>
          </div>
        </div>
        <div className='Distillate-Cartridges px-[33px] py-[36px] bg-[#F5F5F5] rounded-[15px]'>
          <div className='flex justify-between items-center'>
            <h6>Moon Dust - 1G Distillate Cartridges</h6>
            <div className='flex justify-between items-center gap-[12px]'>
              <p>Showing 1 - 32 of 32 results</p>
              <button>
                <img src='/DownArrowBlack.png' alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Products></Products>
    </div>
  );
};

export default MoonDustPage;