import Header from "@/Components/Header/Header";
import React from "react";

const WishListPage = () => {
  return (
    <div>
      <Header title={"Wishlist"}></Header>
      <section className='my-[70px] container mx-auto'>
        <h4 className='text-[#000] text-[30px] font-semibold mb-[9px]'>
          Buy It Again
        </h4>
        <p className='text-[#535353] text-[17px] font-normal mb-[51px]'>
          Easily access and purchases your recently ordered products
        </p>
        <a className='text-[#6BCB77] text-[17px] font-medium mr-[39px]' href=''>
          Store Favorites
        </a>
        <a className='text-[#535353] text-[17px] font-medium mr-[39px]' href=''>
          Purchase History
        </a>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[38px] mt-[24px]'>
          <div className='p-[27px] shadow-fourth bg-[#fff] rounded-[20px]'>
            <form action=''>
              <div className='form-control relative'>
                <label
                  className='text-[#000] text-[17px] font-medium'
                  htmlFor=''
                >
                  Search
                </label>
                <input
                  className='mt-[9px] py-[19px] pl-[23px] w-full bg-[#F6F6F6] border-[1px] border-[#DBDBDB] rounded-[8px]'
                  type='text'
                  placeholder='Search'
                />
                <div className='w-[44px] h-[44px] rounded-[5px] p-[9px] bg-[#6BCB77] absolute bottom-[8.5px] right-[8.5px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'
                  >
                    <circle
                      cx='11.43'
                      cy='11.4718'
                      r='9.73761'
                      stroke='white'
                      stroke-width='3'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M18.2031 18.7502L22.0208 22.558'
                      stroke='white'
                      stroke-width='3'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className='p-[27px] shadow-fourth bg-[#fff] rounded-[20px]'>
            <form action=''>
              <div className='flex gap-[12.5px] items-end'>
                <div className='  relative w-full'>
                  <label
                    className='text-[#000] text-[17px] font-medium'
                    htmlFor=''
                  >
                    Search
                  </label>
                  <input
                    className='mt-[9px] py-[19px] pl-[23px] w-full bg-[#F6F6F6] border-[1px] border-[#DBDBDB] rounded-[8px]'
                    type='text'
                    placeholder='Search'
                  />
                  <div className='w-[44px] h-[44px] rounded-[5px] p-[9px] bg-[#878787] flex justify-center items-center absolute bottom-[8.5px] right-[8.5px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='17'
                      viewBox='0 0 16 17'
                      fill='none'
                    >
                      <path
                        d='M0.1875 8.72464H15.7979'
                        stroke='white'
                        stroke-width='3'
                      />
                      <path
                        d='M7.99316 0.919464L7.99316 16.5298'
                        stroke='white'
                        stroke-width='3'
                      />
                    </svg>
                  </div>
                </div>
                <input
                  className='px-[35px] inline-flex text-white text-[17px] font-medium py-[18px]  bg-[#6BCB77] rounded-lg'
                  type='submit'
                  value='Add'
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishListPage;
