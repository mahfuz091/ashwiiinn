/* eslint-disable @next/next/no-img-element */
import Header from "@/Components/Header/Header";
import ProductSlider from "@/Components/ProductSlider/ProductSlider";
import React from "react";
// import { useSwiper } from "swiper/react";


const SingleProductPage = ({ params }) => {
  const { title } = params;


  // const swiper = useSwiper();


  return (
    <div>
      <Header title={"Details View"}></Header>
      <section className='details-banner'>
        <div className='container mx-auto pt-[88px] pb-[71px]'>
          <div className='md:flex justify-between'>
            <div className='md:flex items-center'>
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
              <select
                className='details-select w-full py-[25px] pl-[26px] pr-[75px] md:pr-[142px] bg-[#FFB800] rounded-[40px] text-[#000] text-[20px] font-semibold focus:border-none mb-[25px]'
                name=''
                id=''
              >
                <option value=''>Organic Dragon Fruit</option>
              </select>
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
      <section className='container mx-auto py-[100px] bg-[#fff]'>
        <div className='flex justify-between'><h4 className='text-[#000] text-[30px] xl:text-[50px] font-bold mb-[35px]'>You May Also Like</h4>
          <div>
            <button className="prev cursor-pointer w-[47px] h-[47px] mr-[24px] bg-[#B7AFC0] hover:bg-[#442862] text-white font-bold py-2 px-4 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
              <path d="M1.27344 7.20357L15.0234 7.20357" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.81885 12.7259L1.27302 7.20395L6.81885 1.68103" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
            <button className="next cursor-pointer w-[47px] h-[47px]  bg-[#B7AFC0] hover:bg-[#442862] text-white font-bold py-2 px-4 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
              <path d="M15.4795 6.7017L1.72949 6.7017" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.93408 1.17933L15.4799 6.70133L9.93408 12.2242" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>

          </div></div>

        <ProductSlider ></ProductSlider>
      </section>

    </div >
  );
};

export default SingleProductPage;
