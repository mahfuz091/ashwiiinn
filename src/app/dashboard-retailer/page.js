/* eslint-disable @next/next/no-img-element */
import Header from "@/Components/Header/Header";
import React from "react";

const DashboardRetailerPage = () => {
  return (
    <div className='mb-[76px]'>
      <Header title={"DashBoard Retailer"}></Header>
      <section className='container mx-auto mt-[72px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[45px]'>
          <div className='pt-[30px] pr-[40px] pb-[49px] pl-[29px] shadow-third bg-[#fff] rounded-[20px]'>
            <h5 className='text-[#000] text-[17px] font-medium'>Open Orders</h5>
            <div className='flex justify-between items-center text-center'>
              <div>
                <p className='text-[#000] text-[70px] font-medium '>0</p>
                <p className='flex items-center gap-[5px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='6'
                    height='6'
                    viewBox='0 0 6 6'
                    fill='none'
                  >
                    <circle
                      cx='3.04004'
                      cy='3.01941'
                      r='2.87646'
                      fill='#535353'
                    />
                  </svg>
                  <span className='text-[#535353] text-[15px] font-normal'>
                    Submitted
                  </span>
                </p>
              </div>
              <div>
                <p className='text-[#000] text-[70px] font-medium '>0</p>
                <p className='flex items-center gap-[5px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='6'
                    viewBox='0 0 7 6'
                    fill='none'
                  >
                    <circle
                      cx='3.37305'
                      cy='3.01941'
                      r='2.87646'
                      fill='#6BCB77'
                    />
                  </svg>
                  <span className='text-[#535353] text-[15px] font-normal'>
                    Accepted
                  </span>
                </p>
              </div>
              <div>
                <p className='text-[#000] text-[70px] font-medium '>9</p>
                <p className='flex items-center gap-[5px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='6'
                    viewBox='0 0 7 6'
                    fill='none'
                  >
                    <circle
                      cx='3.85938'
                      cy='3.01941'
                      r='2.87646'
                      fill='#2C4AE9'
                    />
                  </svg>
                  <span>Fulfilled</span>
                </p>
              </div>
              <div>
                <p className='text-[#000] text-[70px] font-medium '>5</p>
                <p className='flex items-center gap-[5px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='7'
                    height='6'
                    viewBox='0 0 7 6'
                    fill='none'
                  >
                    <circle
                      cx='3.18994'
                      cy='3.01941'
                      r='2.87646'
                      fill='#CC02FF'
                    />
                  </svg>{" "}
                  <span className='text-[#535353] text-[15px] font-normal'>
                    Shipped
                  </span>
                </p>
              </div>
            </div>
            <p className='text-[#6BCB77] text-[15px] font-medium mt-10'>
              Manage Orders
            </p>
          </div>
          <div className='row-span-2 px-[35px] py-[42px]  shadow-third bg-[#fff] rounded-[20px]'>
            <div className='flex items-center gap-[18px] mb-[31px]'>
              <div className='w-[73px] h-[73px] bg-[#26907D] rounded-full flex justify-center items-center'>
                <img src='/M.png' alt='' />
              </div>
              <div>
                <h5 className='tex-[#000] text-[20px] font-medium mb-2'>
                  Moon Dust
                </h5>
                <p className='text-[#535353] text-[15px] font-normal'>
                  You’re a Leaflink Elite Seller
                </p>
              </div>
            </div>
            <div>
              <h5 className='text-[#000] text-[17px] font-medium mb-[8px]'>
                ELITE
              </h5>
              <div className='py-[4px] pr-[9px] bg-[#2C4AE9] rounded-[18px] text-right'>
                <p className='text-white text-[13px] font-medium'>100%</p>
              </div>
              <div className='mt-[34px]'>
                <div className='flex items-center gap-[10px] mb-[19px]'>
                  <img src='/blue.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    20 buyer gereated orders
                  </p>
                </div>
                <div className='flex items-center gap-[10px] mb-[19px]'>
                  <img src='/blue.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    90% order acceptance rate
                  </p>
                </div>
                <div className='flex items-center gap-[10px] mb-[19px]'>
                  <img src='/blue.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    12 inventory/menu updates
                  </p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <img src='/blue.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    80% of orders have ship dates
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-[38px]'>
              <h5 className='text-[#000] text-[17px] font-medium mb-[8px]'>
                POWER
              </h5>
              <div className='py-[4px] pr-[9px] bg-[#529B38] rounded-[18px] text-right'>
                <p className='text-white text-[13px] font-medium'>100%</p>
              </div>
              <div className='mt-[34px]'>
                <div className='flex items-center gap-[10px] mb-[19px]'>
                  <img src='/green.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    License verfication
                  </p>
                </div>
                <div className='flex items-center gap-[10px] mb-[19px]'>
                  <img src='/green.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    Logo and description
                  </p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <img src='/green.png' alt='' />
                  <p className='text-[#535353] text-[15px] font-normal'>
                    Average order review time &lt;48.00 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[30px] pr-[40px] pb-[49px] pl-[29px] shadow-third bg-[#fff] rounded-[20px]'>
            <p className='text-[#000] text-[17px] font-medium mb-[36px]'>
              Total Sales in the Last 7 Days
            </p>
            <h4 className='text-[#000] text-[70px] font-medium mb-[64px]'>
              $5,047.01
            </h4>
            <a className='text-[#442862] text-[15px] font-medium' href='#'>
              View Orders Report
            </a>
          </div>
        </div>
        <div className='pt-[26px] pr-[35px] pb-[31px] pl-[29px] shadow-third bg-[#fff] rounded-[20px]'>
          <h5 className='text-[#000] text-[17px] font-medium mb-[6px]'>
            Recent Orders
          </h5>
          <div>
            <div className='flex justify-between items-center pt-[23px] pb-[22px] border-[#DFDFDF] border-b-[1px]'>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[8px]'>
                  Cannabis Trade Company
                </h5>
                <p className='text-[#535353] text-[13px] font-normal mb-[8px]'>
                  878sd4fs4df5s4
                </p>
                <div className='flex items-center gap-[14px]'>
                  <p className='flex items-center gap-[4px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='6'
                      height='7'
                      viewBox='0 0 6 7'
                      fill='none'
                    >
                      <circle
                        cx='2.99609'
                        cy='3.27716'
                        r='2.87646'
                        fill='#2C4AE9'
                      />
                    </svg>{" "}
                    <span className='text-[#000] text-[13px] font-normal'>
                      Fulfilled
                    </span>
                  </p>
                  <p className='text-[#535353] text-[13px] font-normal'>
                    about 7 hours ago
                  </p>
                </div>
              </div>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[6px]'>
                  $625.00
                </h5>
                <a className='text-[#6BCB77] text-[15px] font-medium ' href=''>
                  Review
                </a>
              </div>
            </div>
            <div className='flex justify-between items-center pt-[23px] pb-[22px] border-[#DFDFDF] border-b-[1px]'>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[8px]'>
                  Cannabis Trade Company
                </h5>
                <p className='text-[#535353] text-[13px] font-normal mb-[8px]'>
                  878sd4fs4df5s4
                </p>
                <div className='flex items-center gap-[14px]'>
                  <p className='flex items-center gap-[4px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='6'
                      height='7'
                      viewBox='0 0 6 7'
                      fill='none'
                    >
                      <circle
                        cx='2.99609'
                        cy='3.27716'
                        r='2.87646'
                        fill='#2C4AE9'
                      />
                    </svg>{" "}
                    <span className='text-[#000] text-[13px] font-normal'>
                      Fulfilled
                    </span>
                  </p>
                  <p className='text-[#535353] text-[13px] font-normal'>
                    about 7 hours ago
                  </p>
                </div>
              </div>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[6px]'>
                  $625.00
                </h5>
                <a className='text-[#6BCB77] text-[15px] font-medium ' href=''>
                  Review
                </a>
              </div>
            </div>
            <div className='flex justify-between items-center pt-[23px] pb-[22px] border-[#DFDFDF] border-b-[1px]'>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[8px]'>
                  Cannabis Trade Company
                </h5>
                <p className='text-[#535353] text-[13px] font-normal mb-[8px]'>
                  878sd4fs4df5s4
                </p>
                <div className='flex items-center gap-[14px]'>
                  <p className='flex items-center gap-[4px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='6'
                      height='7'
                      viewBox='0 0 6 7'
                      fill='none'
                    >
                      <circle
                        cx='2.99609'
                        cy='3.27716'
                        r='2.87646'
                        fill='#2C4AE9'
                      />
                    </svg>{" "}
                    <span className='text-[#000] text-[13px] font-normal'>
                      Fulfilled
                    </span>
                  </p>
                  <p className='text-[#535353] text-[13px] font-normal'>
                    about 7 hours ago
                  </p>
                </div>
              </div>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[6px]'>
                  $625.00
                </h5>
                <a className='text-[#6BCB77] text-[15px] font-medium ' href=''>
                  Review
                </a>
              </div>
            </div>
            <div className='flex justify-between items-center pt-[23px] pb-[22px] '>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[8px]'>
                  Cannabis Trade Company
                </h5>
                <p className='text-[#535353] text-[13px] font-normal mb-[8px]'>
                  878sd4fs4df5s4
                </p>
                <div className='flex items-center gap-[14px]'>
                  <p className='flex items-center gap-[4px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='6'
                      height='7'
                      viewBox='0 0 6 7'
                      fill='none'
                    >
                      <circle
                        cx='2.99609'
                        cy='3.27716'
                        r='2.87646'
                        fill='#2C4AE9'
                      />
                    </svg>{" "}
                    <span className='text-[#000] text-[13px] font-normal'>
                      Fulfilled
                    </span>
                  </p>
                  <p className='text-[#535353] text-[13px] font-normal'>
                    about 7 hours ago
                  </p>
                </div>
              </div>
              <div>
                <h5 className='text-[#000] text-[15px] font-medium mb-[6px]'>
                  $625.00
                </h5>
                <a className='text-[#6BCB77] text-[15px] font-medium ' href=''>
                  Review
                </a>
              </div>
            </div>
          </div>
          <a className='text-[#6BCB77] text-[15px] font-medium ' href=''>
            Manage Orders
          </a>
        </div>
      </section>
    </div>
  );
};

export default DashboardRetailerPage;
