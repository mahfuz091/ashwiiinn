"use client";
import Header from "@/Components/Header/Header";
import React, { useState } from "react";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Header title={"Cart"}></Header>
      <section className='container mx-auto my-[40px] md:my-[76px]'>
        <h5 className='text-[#000] text-[30px] font-semibold mb-2'>Cart</h5>
        <p className='text-[#535353] text-[17px] font-normal mb-8'>
          View and checkout your cart for your stores.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-11 '>
          <div className='lg:col-span-2 lg:row-span-2'>
            <div className='pt-[26px] pb-[17px] px-[37px] bg-[#fff] shadow-fourth rounded-[20px]  '>
              <div className='flex items-center justify-between border-b-[1px] border-[#EBEBEB] overflow-x-auto '>
                <div className='flex items-center gap-[7px] pb-[28px] '>
                  <button>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='10'
                      viewBox='0 0 16 10'
                      fill='none'
                    >
                      <path
                        d='M14.7415 1.54379L8.32487 7.96046L1.9082 1.54379'
                        stroke='black'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                  <h5 className='text-[#000] text-[20px] font-medium  '>
                    Pharmhouse Cannabis Co
                  </h5>
                </div>
                <p className='text-[#000] text-[20px] font-medium'>$1,230.00</p>
              </div>

              <div className='relative'>
                <div className='flex items-center justify-between border-b-[1px] border-[#EBEBEB] '>
                  <div className='flex items-center gap-[11px] py-[18px] '>
                    <button onClick={() => setIsOpen(!isOpen)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='10'
                        viewBox='0 0 16 10'
                        fill='none'
                      >
                        <path
                          d='M14.7415 1.54379L8.32487 7.96046L1.9082 1.54379'
                          stroke='black'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </button>
                    <div>
                      <div className='md:flex items-center gap-[28px]'>
                        <img src='/clipart396725 1.png' alt='' />
                        <div className='md:flex gap-[11px]'>
                          <h5 className='text-[#000] text-[17px] font-medium  '>
                            Stash House Distribution
                          </h5>
                          <a className='text-white text-[15px] h-fit font-medium bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
                            Med
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-[#535353] text-[17px] font-medium'>
                    $1,030.00
                  </p>
                </div>
                <div className={`menu-content ${isOpen ? "open" : ""}`}>
                  <div className='overflow-x-auto w-full'>
                    <div className='pl-[31px] py-[32px] border-b-[1px] border-[#EBEBEB] w-full'>
                      <div className='flex gap-[15px] mb-[28px]'>
                        <h5 className='text-[#000] text-[17px] font-medium'>
                          Packwoods
                        </h5>
                        <div className='text-white text-[15px] font-medium bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
                          Med
                        </div>
                      </div>
                      <div className='flex items-center justify-between  '>
                        <div className='flex gap-[18px] min-w-[360px]'>
                          <img
                            className='w-[106px] h-[120px] rounded-xl'
                            src='/cart-product-image.png'
                            alt='img'
                          />
                          <div>
                            <h5 className='text-[#000] text-[17px] font-medium max-w-[206px] mb-[23px]'>
                              Classic Blunt - Chemdawg - Infused
                            </h5>
                            <div className='flex gap-[21px] items-center'>
                              <input
                                className='w-[111px]  border-[#E9E9E9] border-[1px] rounded-[5px] py-[11px] px-[16px]'
                                type='text'
                                name=''
                                id=''
                                placeholder='2'
                              />
                              <button>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='20'
                                  height='23'
                                  viewBox='0 0 20 23'
                                  fill='none'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M19.0207 4.43202C19.4421 4.43202 19.793 4.78194 19.793 5.22718V5.63884C19.793 6.07326 19.4421 6.434 19.0207 6.434H1.06631C0.643817 6.434 0.292969 6.07326 0.292969 5.63884V5.22718C0.292969 4.78194 0.643817 4.43202 1.06631 4.43202H4.225C4.86664 4.43202 5.42505 3.97594 5.56939 3.33245L5.73481 2.59362C5.99188 1.58722 6.83792 0.918808 7.80618 0.918808H12.2798C13.2375 0.918808 14.093 1.58722 14.3406 2.54054L14.5176 3.33137C14.6609 3.97594 15.2193 4.43202 15.862 4.43202H19.0207ZM17.4159 19.4807C17.7457 16.4073 18.3231 9.10569 18.3231 9.03203C18.3442 8.80886 18.2715 8.59761 18.1271 8.42753C17.9722 8.26828 17.7763 8.17404 17.5603 8.17404H2.53387C2.31683 8.17404 2.11032 8.26828 1.96703 8.42753C1.82163 8.59761 1.74999 8.80886 1.76053 9.03203C1.76246 9.04556 1.78318 9.30276 1.81781 9.73274C1.97168 11.6429 2.40023 16.9632 2.67716 19.4807C2.87313 21.3353 4.09003 22.501 5.8527 22.5432C7.2129 22.5746 8.61418 22.5855 10.0471 22.5855C11.3967 22.5855 12.7675 22.5746 14.1698 22.5432C15.9936 22.5118 17.2094 21.3667 17.4159 19.4807Z'
                                    fill='#535353'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-[#535353] text-[15px] font-medium mb-[56px]'>
                            $200.00/Case (10 Units)
                          </p>
                          <p className='text-[#000] text-[17px] font-medium text-right'>
                            $200.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='overflow-x-auto w-full'>
                    <div className='pl-[31px] py-[32px] border-b-[1px] border-[#EBEBEB] w-full'>
                      <div className='flex gap-[15px] mb-[28px]'>
                        <h5 className='text-[#000] text-[17px] font-medium'>
                          Packwoods
                        </h5>
                        <div className='text-white text-[15px] font-medium bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
                          Med
                        </div>
                      </div>
                      <div className='flex items-center justify-between  '>
                        <div className='flex gap-[18px] min-w-[360px]'>
                          <img
                            className='w-[106px] h-[120px] rounded-xl'
                            src='/cart-product-image.png'
                            alt='img'
                          />
                          <div>
                            <h5 className='text-[#000] text-[17px] font-medium max-w-[206px] mb-[23px]'>
                              Classic Blunt - Chemdawg - Infused
                            </h5>
                            <div className='flex gap-[21px] items-center'>
                              <input
                                className='w-[111px]  border-[#E9E9E9] border-[1px] rounded-[5px] py-[11px] px-[16px]'
                                type='text'
                                name=''
                                id=''
                                placeholder='2'
                              />
                              <button>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='20'
                                  height='23'
                                  viewBox='0 0 20 23'
                                  fill='none'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M19.0207 4.43202C19.4421 4.43202 19.793 4.78194 19.793 5.22718V5.63884C19.793 6.07326 19.4421 6.434 19.0207 6.434H1.06631C0.643817 6.434 0.292969 6.07326 0.292969 5.63884V5.22718C0.292969 4.78194 0.643817 4.43202 1.06631 4.43202H4.225C4.86664 4.43202 5.42505 3.97594 5.56939 3.33245L5.73481 2.59362C5.99188 1.58722 6.83792 0.918808 7.80618 0.918808H12.2798C13.2375 0.918808 14.093 1.58722 14.3406 2.54054L14.5176 3.33137C14.6609 3.97594 15.2193 4.43202 15.862 4.43202H19.0207ZM17.4159 19.4807C17.7457 16.4073 18.3231 9.10569 18.3231 9.03203C18.3442 8.80886 18.2715 8.59761 18.1271 8.42753C17.9722 8.26828 17.7763 8.17404 17.5603 8.17404H2.53387C2.31683 8.17404 2.11032 8.26828 1.96703 8.42753C1.82163 8.59761 1.74999 8.80886 1.76053 9.03203C1.76246 9.04556 1.78318 9.30276 1.81781 9.73274C1.97168 11.6429 2.40023 16.9632 2.67716 19.4807C2.87313 21.3353 4.09003 22.501 5.8527 22.5432C7.2129 22.5746 8.61418 22.5855 10.0471 22.5855C11.3967 22.5855 12.7675 22.5746 14.1698 22.5432C15.9936 22.5118 17.2094 21.3667 17.4159 19.4807Z'
                                    fill='#535353'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-[#535353] text-[15px] font-medium mb-[56px]'>
                            $200.00/Case (10 Units)
                          </p>
                          <p className='text-[#000] text-[17px] font-medium text-right'>
                            $200.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='overflow-x-auto w-full'>
                    <div className='pl-[31px] py-[32px] border-b-[1px] border-[#EBEBEB] w-full'>
                      <div className='flex gap-[15px] mb-[28px]'>
                        <h5 className='text-[#000] text-[17px] font-medium'>
                          Packwoods
                        </h5>
                        <div className='text-white text-[15px] font-medium bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
                          Med
                        </div>
                      </div>
                      <div className='flex items-center justify-between  '>
                        <div className='flex gap-[18px] min-w-[360px]'>
                          <img
                            className='w-[106px] h-[120px] rounded-xl'
                            src='/cart-product-image.png'
                            alt='img'
                          />
                          <div>
                            <h5 className='text-[#000] text-[17px] font-medium max-w-[206px] mb-[23px]'>
                              Classic Blunt - Chemdawg - Infused
                            </h5>
                            <div className='flex gap-[21px] items-center'>
                              <input
                                className='w-[111px]  border-[#E9E9E9] border-[1px] rounded-[5px] py-[11px] px-[16px]'
                                type='text'
                                name=''
                                id=''
                                placeholder='2'
                              />
                              <button>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='20'
                                  height='23'
                                  viewBox='0 0 20 23'
                                  fill='none'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M19.0207 4.43202C19.4421 4.43202 19.793 4.78194 19.793 5.22718V5.63884C19.793 6.07326 19.4421 6.434 19.0207 6.434H1.06631C0.643817 6.434 0.292969 6.07326 0.292969 5.63884V5.22718C0.292969 4.78194 0.643817 4.43202 1.06631 4.43202H4.225C4.86664 4.43202 5.42505 3.97594 5.56939 3.33245L5.73481 2.59362C5.99188 1.58722 6.83792 0.918808 7.80618 0.918808H12.2798C13.2375 0.918808 14.093 1.58722 14.3406 2.54054L14.5176 3.33137C14.6609 3.97594 15.2193 4.43202 15.862 4.43202H19.0207ZM17.4159 19.4807C17.7457 16.4073 18.3231 9.10569 18.3231 9.03203C18.3442 8.80886 18.2715 8.59761 18.1271 8.42753C17.9722 8.26828 17.7763 8.17404 17.5603 8.17404H2.53387C2.31683 8.17404 2.11032 8.26828 1.96703 8.42753C1.82163 8.59761 1.74999 8.80886 1.76053 9.03203C1.76246 9.04556 1.78318 9.30276 1.81781 9.73274C1.97168 11.6429 2.40023 16.9632 2.67716 19.4807C2.87313 21.3353 4.09003 22.501 5.8527 22.5432C7.2129 22.5746 8.61418 22.5855 10.0471 22.5855C11.3967 22.5855 12.7675 22.5746 14.1698 22.5432C15.9936 22.5118 17.2094 21.3667 17.4159 19.4807Z'
                                    fill='#535353'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-[#535353] text-[15px] font-medium mb-[56px]'>
                            $200.00/Case (10 Units)
                          </p>
                          <p className='text-[#000] text-[17px] font-medium text-right'>
                            $200.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='overflow-x-auto w-full'>
                    <div className='pl-[31px] py-[32px] w-full'>
                      <div className='flex gap-[15px] mb-[28px]'>
                        <h5 className='text-[#000] text-[17px] font-medium'>
                          Packwoods
                        </h5>
                        <div className='text-white text-[15px] font-medium bg-[#06F] px-[12.72px] py-[3.64px] rounded-[17px]'>
                          Med
                        </div>
                      </div>
                      <div className='flex items-center justify-between  '>
                        <div className='flex gap-[18px] min-w-[360px]'>
                          <img
                            className='w-[106px] h-[120px] rounded-xl'
                            src='/cart-product-image.png'
                            alt='img'
                          />
                          <div>
                            <h5 className='text-[#000] text-[17px] font-medium max-w-[206px] mb-[23px]'>
                              Classic Blunt - Chemdawg - Infused
                            </h5>
                            <div className='flex gap-[21px] items-center'>
                              <input
                                className='w-[111px]  border-[#E9E9E9] border-[1px] rounded-[5px] py-[11px] px-[16px]'
                                type='text'
                                name=''
                                id=''
                                placeholder='2'
                              />
                              <button>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='20'
                                  height='23'
                                  viewBox='0 0 20 23'
                                  fill='none'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M19.0207 4.43202C19.4421 4.43202 19.793 4.78194 19.793 5.22718V5.63884C19.793 6.07326 19.4421 6.434 19.0207 6.434H1.06631C0.643817 6.434 0.292969 6.07326 0.292969 5.63884V5.22718C0.292969 4.78194 0.643817 4.43202 1.06631 4.43202H4.225C4.86664 4.43202 5.42505 3.97594 5.56939 3.33245L5.73481 2.59362C5.99188 1.58722 6.83792 0.918808 7.80618 0.918808H12.2798C13.2375 0.918808 14.093 1.58722 14.3406 2.54054L14.5176 3.33137C14.6609 3.97594 15.2193 4.43202 15.862 4.43202H19.0207ZM17.4159 19.4807C17.7457 16.4073 18.3231 9.10569 18.3231 9.03203C18.3442 8.80886 18.2715 8.59761 18.1271 8.42753C17.9722 8.26828 17.7763 8.17404 17.5603 8.17404H2.53387C2.31683 8.17404 2.11032 8.26828 1.96703 8.42753C1.82163 8.59761 1.74999 8.80886 1.76053 9.03203C1.76246 9.04556 1.78318 9.30276 1.81781 9.73274C1.97168 11.6429 2.40023 16.9632 2.67716 19.4807C2.87313 21.3353 4.09003 22.501 5.8527 22.5432C7.2129 22.5746 8.61418 22.5855 10.0471 22.5855C11.3967 22.5855 12.7675 22.5746 14.1698 22.5432C15.9936 22.5118 17.2094 21.3667 17.4159 19.4807Z'
                                    fill='#535353'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-[#535353] text-[15px] font-medium mb-[56px]'>
                            $200.00/Case (10 Units)
                          </p>
                          <p className='text-[#000] text-[17px] font-medium text-right'>
                            $200.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[106px] mt-[53px]'>
              <div>
                <div>
                  <label
                    className='text-[#000] text-[17px] font-normal'
                    htmlFor=''
                  >
                    Order Notes
                  </label>
                  <input
                    className='w-full h-[58px] border-[1px] border-[#E6E6E6] rounded-md mt-[18px]'
                    type='text'
                  />
                </div>
                <div className='mt-[28px]'>
                  <label
                    className='text-[#000] text-[17px] font-normal'
                    htmlFor=''
                  >
                    Delivery Preferences
                  </label>
                  <input
                    className='w-full h-[58px] border-[1px] border-[#E6E6E6] rounded-md mt-[18px]'
                    type='text'
                  />
                </div>
              </div>
              <div>
                <p className='text-[#000] text-[17px] font-medium flex items-center justify-between py-[18px] border-b-[1px] border-[#EBEBEB]'>
                  Subtotal <span className='text-[#535353]'>$1,030.00</span>
                </p>

                <p className='text-[#000] text-[20px] font-medium flex items-center justify-between py-[18px] '>
                  Total <span>$1,030.00</span>
                </p>
                <p className='pb-[21px] border-b-[1px] border-[#EBEBEB] text-[#535353] text-[15px] font-normal'>
                  Stash House Distribution
                </p>
                <p className='py-[22px] text-[#000] text-[20px] font-medium'>
                  Payment Method
                </p>
                <div className='px-[24px] pt-[22px] pb-[31px] bg-[#F4F4F4] rounded-[10px]'>
                  <div className='flex justify-between items-center mb-[21px]'>
                    <h6 className='text-[#000] text-[17px] font-medium'>
                      Off-platform payment
                    </h6>
                    <h6 className='text-[#000] text-[17px] font-medium'>
                      Default
                    </h6>
                  </div>
                  <p className='text-[#535353] text-[15px] font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas maximus a sapien in elementum. Ut bibendum felis
                    diam, eu placerat risus efficitur in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[35px] pb-[38px] px-[33px] bg-[#fff] shadow-fourth rounded-[20px]  '>
            <h5 className='text-[#000] text-[24px] font-medium mb-[11px]'>
              Cart Totals :
            </h5>
            <p className='text-[#000] text-[17px] font-medium flex items-center justify-between py-[18px] border-b-[1px] border-[#EBEBEB]'>
              Subtotal <span className='text-[#535353]'>$1,205.00</span>
            </p>

            <p className='text-[#000] text-[17px] font-medium flex items-center justify-between py-[18px] border-b-[1px] border-[#EBEBEB]'>
              Shipping <span className='text-[#535353]'>$25.00</span>
            </p>
            <p className='text-[#000] text-[20px] font-medium flex items-center justify-between py-[18px] '>
              Total <span>$1,23.000</span>
            </p>
            <div className='rounded-[10px] bg-[#E6FAE8] py-[20px] pl-[19px] pr-[54px] flex gap-[8px] mb-[38px]'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M9.98593 0.661255C4.82836 0.661255 0.646484 4.84313 0.646484 10.0007C0.646484 15.1583 4.82836 19.3409 9.98593 19.3409C15.1435 19.3409 19.3262 15.1583 19.3262 10.0007C19.3262 4.84313 15.1435 0.661255 9.98593 0.661255ZM11.9302 15.1361C11.4495 15.3259 11.0668 15.4698 10.7798 15.5694C10.4935 15.669 10.1607 15.7189 9.78194 15.7189C9.2 15.7189 8.74695 15.5765 8.42435 15.2927C8.10176 15.0088 7.94125 14.6491 7.94125 14.2118C7.94125 14.0418 7.95311 13.8679 7.97683 13.6908C8.00134 13.5137 8.04008 13.3144 8.09306 13.0907L8.69476 10.9653C8.74774 10.7613 8.7936 10.5676 8.82997 10.3873C8.86634 10.2055 8.88373 10.0387 8.88373 9.88685C8.88373 9.61644 8.82759 9.42667 8.71611 9.31993C8.60304 9.21319 8.39035 9.16101 8.07329 9.16101C7.91832 9.16101 7.7586 9.18394 7.59493 9.23217C7.43284 9.28198 7.2921 9.32705 7.17667 9.37133L7.33559 8.71665C7.72935 8.55614 8.1065 8.41856 8.46626 8.30471C8.82601 8.18927 9.166 8.13234 9.48623 8.13234C10.0642 8.13234 10.5101 8.27308 10.824 8.5514C11.1364 8.83051 11.2937 9.19342 11.2937 9.63937C11.2937 9.73187 11.2826 9.89475 11.2613 10.1272C11.2399 10.3605 11.1996 10.5732 11.1411 10.7684L10.5426 12.8875C10.4935 13.0575 10.4501 13.252 10.4105 13.4694C10.3718 13.6868 10.3528 13.8529 10.3528 13.9644C10.3528 14.2458 10.4153 14.438 10.5418 14.54C10.6667 14.642 10.8857 14.6934 11.1957 14.6934C11.3419 14.6934 11.5056 14.6673 11.6906 14.6167C11.8741 14.5661 12.0069 14.521 12.0907 14.4822L11.9302 15.1361ZM11.8243 6.53518C11.5451 6.79452 11.2091 6.92419 10.8161 6.92419C10.424 6.92419 10.0856 6.79452 9.80408 6.53518C9.52418 6.27584 9.38265 5.96036 9.38265 5.5919C9.38265 5.22424 9.52497 4.90797 9.80408 4.64626C10.0856 4.38375 10.424 4.25329 10.8161 4.25329C11.2091 4.25329 11.5459 4.38375 11.8243 4.64626C12.1034 4.90797 12.2433 5.22424 12.2433 5.5919C12.2433 5.96115 12.1034 6.27584 11.8243 6.53518Z'
                    fill='#6BCB77'
                  />
                </svg>
              </span>
              <p>Please review the vendor payment options for your orders</p>
            </div>
            <button className='py-[17px] w-full flex justify-center rounded-[40px] bg-[#6BCB77] text-[#fff] text-[17px] font-semibold mb-[18px]'>
              Checkout
            </button>
            <button className='py-[17px] px-[33px] flex justify-center rounded-[30px]  w-full  text-[#535353] text-[17px] font-semibold border-[1px] border-[#535353]'>
              Clear
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
