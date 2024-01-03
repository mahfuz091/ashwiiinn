/* eslint-disable @next/next/no-img-element */
import Header from "@/Components/Header/Header";
import ProductSlider from "@/Components/ProductSlider/ProductSlider";
import SlideNextButton from "@/Components/SlideNextButton/SlideNextButton";
import React from "react";
// import { useSwiper } from "swiper/react";

const SingleProductPage = ({ params }) => {
  const { title } = params;

  return (
    <div>
      <Header title={"Details View"}></Header>
      <section className='details-banner'>
        <div className='container mx-auto pt-[88px] pb-[71px]'>
          <div className='flex flex-col xl:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='max-w-[380px] xl:max-w-[600px] w-full'>
                <h4 className='text-[#000] text-[30px] xl:text-[50px] font-bold text-center'>
                  Goodfellas Disposable Watermelon OG -1G
                </h4>
                <p className='text-[#000] text-[20px] xl:text-[24px] font-normal text-center'>
                  Our organic Dragon fruit powder is perfect for making
                  smothies, smoothie bowls, agua fresca’s chia pudding and much
                  more.
                </p>
              </div>
              <img src='/product-detail.png' alt='' />
            </div>
            <div className='rounded-[20px] bg-[#fff] shadow-secoundary px-[27px] py-[42px]'>
              <p className='text-[#000] text-[15px] font-medium text-center mb-[15px]'>
                Freeze Dried Powder
              </p>
              <div className='relative'>
                <select
                  className='details-select w-full py-[25px] pl-[26px] pr-[75px] md:pr-[142px]  rounded-[40px] text-[#000] text-[20px] font-semibold focus:border-none mb-[25px]'
                  name=''
                  id=''
                >
                  <option value=''>Organic Dragon Fruit</option>
                  <option value=''>Organic Dragon Fruit</option>
                  <option value=''>Organic Dragon Fruit</option>
                </select>
              </div>
              <p className='text-[#000] text-[20px] font-medium text-center'>
                $28.99 per bag
              </p>
              <p className='text-[#535353] text-[15px] font-medium text-center mb-[50px]'>
                8 oz powder per bag
              </p>
              <form action=''>
                <div className='form-control'>
                  <label
                    className='text-[#000] text-[17px] font-medium '
                    htmlFor=''
                  >
                    Quantity
                  </label>
                  <input
                    className='w-full py-[13px] pl-[15px] bg-[#F1F1F1] border-[1px] border-[#D6D6D6] rounded-[5px] mt-[15px]'
                    type='text'
                    name=''
                    id=''
                    placeholder='Amount in Cases'
                  />

                  <p className='text-right text-[#535353] text-[13px] font-normal pt-[12px] mb-[44px]'>
                    Min : 1, Max -
                  </p>
                </div>
                <button
                  className='py-[17px] w-full flex justify-center rounded-[40px] bg-[#6BCB77] text-[#fff] text-[17px] font-semibold mb-[20px]'
                  type='submit'
                >
                  Add To Cart
                </button>
              </form>
              <button className='py-[17px] w-full flex justify-center rounded-[40px] border-[#6BCB77] border-[1px] text-[#6BCB77] text-[17px] font-semibold mb-[20px]'>
                Request Sample
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center gap-[23px] mt-[29px] '>
            <div>
              <img src='/Mask group (2).png' alt='' />
            </div>
            <div>
              <img src='/Mask group (2).png' alt='' />
            </div>
            <div className='w-[48px] h-[48px] bg-[#0B8771] rounded-full flex justify-center items-center poduct-details-img'>
              <img className='rounded-[12px]' src='/125 copy 2.png' alt='' />
            </div>
            <div>
              <img src='/Mask group (2).png' alt='' />
            </div>
            <div>
              <img src='/Mask group (2).png' alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto mt-[107px]'>
        <div className='xl:flex justify-between'>
          <div>
            <p className='text-[#535353] text-[24px] font-medium mb-3'>
              Sold by{" "}
              <span className='text-[#000] text-[24px] font-semibold'>
                Bogart St. Cannabis C.
              </span>
            </p>
            <p className='text-[#535353] text-[20px] font-normal mb-5 xl:mb-0'>
              300 Main, LLC, PAAA-JNBG-ISYD OK
            </p>
          </div>
          <div className='md:flex gap-[125px]'>
            <div>
              <h6 className='text-[#6BCB77] w-[159px] text-[24px] font-semibold mb-[48px] border-b-[1px] border-b-[#6BCB77]'>
                Product Info
              </h6>
              <ul>
                <li className='text-[#000] text-[20px] font-normal mb-[22px]'>
                  Classification
                </li>
                <li className='text-[#000] text-[20px] font-normal mb-[22px]'>
                  Category
                </li>
                <li className='text-[#000] text-[20px] font-normal mb-[22px]'>
                  Strain Classification
                </li>
                <li className='text-[#000] text-[20px] font-normal mb-[22px]'>
                  Strains
                </li>
              </ul>
            </div>
            <div>
              <h6 className='text-[#6BCB77] w-[252px] text-[24px] font-semibold mb-[48px] border-b-[1px] border-b-[#6BCB77]'>
                Product Description
              </h6>
              <ul>
                <li className='text-[#000] text-[20px] font-medium mb-[22px]'>
                  Medical
                </li>
                <li className='text-[#000] text-[20px] font-medium mb-[22px]'>
                  Cartridges
                </li>
                <li className='text-[#000] text-[20px] font-medium mb-[22px]'>
                  Indica
                </li>
                <li className='text-[#000] text-[20px] font-medium mb-[22px]'>
                  Watermelon OG
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-[100px] bg-[#fff] relative'>
        <div className='flex justify-between'>
          <h4 className='text-[#000] text-[30px] xl:text-[50px] font-bold mb-[35px] max-[425px]:max-w-[250px]'>
            You May Also Like
          </h4>
        </div>

        <ProductSlider></ProductSlider>
      </section>
    </div>
  );
};

export default SingleProductPage;
