import Header from "@/Components/Header/Header";
import React from "react";

const WishListPage = () => {
  return (
    <div>
      <Header title={"Wishlist"}></Header>
      <section className='my-[40px] lg:my-[70px] container mx-auto'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[38px] mt-[24px] mb-[40px]'>
          <div className='p-[27px] shadow-fourth bg-[#fff] rounded-[20px]'>
            <form action=''>
              <div className='relative'>
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
        <div className='flex gap-[7px] mb-[34px]'>
          <h5 className='text-[#000] text-[17px] font-medium'>
            Pharmhouse Cannabis Co - 530W. Lindsey St, Norman
          </h5>
          <div className='text-white text-[15px] font-medium h-min bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
            Med
          </div>
        </div>
        <p className='text-[#535353] text-[15px] font-normal mb-[15px]'>
          Showing 1 - 2 of 2 results
        </p>
        <div className='py-[25px] px-[31px] shadow-fourth bg-[#fff] rounded-[15px]'>
          <div className='table-responsive wishlist-table'>
            <table className='w-full '>
              <thead>
                <tr>
                  <th style={{ width: "510px", minWidth: "510px" }}>Product</th>
                  <th>Price</th>
                  <th style={{ minWidth: "200px" }}>Last Ordered</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=''>
                    <div className='flex items-center gap-[30px] mr-0 pr-0'>
                      <img
                        className='w-[95px] h-[95px] rounded-[10px]'
                        src='/bottle-hemp-oil-with-coffee-beans-hemp-leaf 1.png'
                        alt=''
                      />
                      <div>
                        <h5 className='text-[#6BCB77] text-[15px] font-medium mb-[12px]'>
                          Orion Cannabis
                        </h5>
                        <p className='text-[#000] text-[17px] font-medium'>
                          1,000mg Orion Shooting Star RSO Gummies
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className='text-[#000] text-[17px] font-medium mb-[11px]'>
                      $22.50/unit
                    </h6>
                    <p className='text-[#535353] text-5px] font-normal line-through'>
                      $30.00
                    </p>
                  </td>
                  <td>
                    <p className='text-[#000] text-[17px] font-medium'>----</p>
                  </td>
                  <td>
                    <input
                      className='py-[11px] pl-[16px] border-[1px] max-w-[111px] border-[#E9E9E9] rounded-[5px]'
                      type='text'
                      placeholder='0'
                    />
                    <p className='text-[#535353] text-[13px] font-normal mt-[10px]'>
                      Min : 1 Max : 100
                    </p>
                  </td>
                  <td>
                    <div className='flex gap-[11px] -mt-[30px] items-start justify-end'>
                      <img src='/cart-add.png' alt='' />
                      <img src='/save.png' alt='' />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='flex items-center gap-[30px] mr-0 pr-0'>
                      <img
                        className='w-[95px] h-[95px] rounded-[10px]'
                        src='/bottle-hemp-oil-with-coffee-beans-hemp-leaf 1.png'
                        alt=''
                      />
                      <div>
                        <h5 className='text-[#6BCB77] text-[15px] font-medium mb-[12px]'>
                          Orion Cannabis
                        </h5>
                        <p className='text-[#000] text-[17px] font-medium'>
                          1,000mg Orion Shooting Star RSO Gummies
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className='text-[#000] text-[17px] font-medium mb-[11px]'>
                      $22.50/unit
                    </h6>
                    <p className='text-[#535353] text-5px] font-normal line-through'>
                      $30.00
                    </p>
                  </td>
                  <td>
                    <p className='text-[#000] text-[17px] font-medium'>----</p>
                  </td>
                  <td>
                    <input
                      className='py-[11px] pl-[16px] border-[1px] max-w-[111px] border-[#E9E9E9] rounded-[5px]'
                      type='text'
                      placeholder='0'
                    />
                    <p className='text-[#535353] text-[13px] font-normal mt-[10px]'>
                      Min : 1 Max : 100
                    </p>
                  </td>
                  <td>
                    <div className='flex gap-[11px] -mt-[30px]  items-start justify-end'>
                      <img src='/cart-add.png' alt='' />
                      <img src='/save.png' alt='' />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className=''>
                    <div className='flex items-center gap-[30px] mr-0 pr-0'>
                      <img
                        className='w-[95px] h-[95px] rounded-[10px]'
                        src='/bottle-hemp-oil-with-coffee-beans-hemp-leaf 1.png'
                        alt=''
                      />
                      <div>
                        <h5 className='text-[#6BCB77] text-[15px] font-medium mb-[12px]'>
                          Orion Cannabis
                        </h5>
                        <p className='text-[#000] text-[17px] font-medium'>
                          1,000mg Orion Shooting Star RSO Gummies
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className='text-[#000] text-[17px] font-medium mb-[11px]'>
                      $22.50/unit
                    </h6>
                    <p className='text-[#535353] text-5px] font-normal line-through'>
                      $30.00
                    </p>
                  </td>
                  <td>
                    <p className='text-[#000] text-[17px] font-medium'>----</p>
                  </td>
                  <td>
                    <input
                      className='py-[11px] pl-[16px] border-[1px] max-w-[111px] border-[#E9E9E9] rounded-[5px]'
                      type='text'
                      placeholder='0'
                    />
                    <p className='text-[#535353] text-[13px] font-normal mt-[10px]'>
                      Min : 1 Max : 100
                    </p>
                  </td>
                  <td>
                    <div className='flex gap-[11px] -mt-[30px]  items-start justify-end'>
                      <img src='/cart-add.png' alt='' />
                      <img src='/save.png' alt='' />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishListPage;
