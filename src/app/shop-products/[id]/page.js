/* eslint-disable @next/next/no-img-element */
import Header from '@/Components/Header/Header';
import React from 'react';

const SingleProductPage = ({ params }) => {
    const { title } = params;
    console.log(params);
    return (
        <div>
            <Header title={"Details View"}></Header>
            <section className="details-banner">
                <div className='container mx-auto pt-[88px]  pb-[71px]'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='max-w-[600px] w-full'>
                                <h4 className='text-[#000] text-[50px] font-bold text-center'>Goodfellas Disposable Watermelon OG -1G</h4>
                                <p className='text-[#000] text-[24px] font-normal text-center'>Our organic Dragon fruit powder is perfect for making smothies, smoothie bowls, agua fresca’s chia pudding and much more.</p>
                            </div>
                            <img src="/product-detail.png" alt="" />
                        </div>
                        <div className='rounded-[20px] bg-[#fff] shadow-secoundary px-[27px] py-[42px]'>
                            <p className='text-[#000] text-[15px] font-medium text-center mb-[15px]'>Freeze Dried Powder</p>
                            <select className='details-select py-[25px] pl-[26px] pr-[142px] bg-[#FFB800] rounded-[40px] text-[#000] text-[20px] font-semibold focus:border-none mb-[25px]' name="" id="">
                                <option value="">Organic Dragon Fruit</option>
                            </select>
                            <p className="text-[#000] text-[20px] font-medium text-center">$28.99 per bag</p>
                            <p className="text-[#535353] text-[15px] font-medium text-center mb-[50px]">8 oz powder per bag</p>
                            <form action="">
                                <div className="form-control">
                                    <label className="text-[#000] text-[17px] font-medium " htmlFor="">Quantity</label>
                                    <input className="w-full py-[13px] pl-[15px] bg-[#F1F1F1] border-[1px] border-[#D6D6D6] rounded-[5px] mt-[15px]" type="text" name="" id="" placeholder="Amount in Cases" />

                                    <p className='text-right text-[#535353] text-[13px] font-normal pt-[12px] mb-[44px]'>Min : 1, Max -</p>
                                </div>
                                <button className='py-[17px] w-full flex justify-center rounded-[40px] bg-[#6BCB77] text-[#fff] text-[17px] font-semibold mb-[20px]' type="submit">Add To Cart</button>
                            </form>
                            <button className='py-[17px] w-full flex justify-center rounded-[40px] border-[#6BCB77] border-[1px] text-[#6BCB77] text-[17px] font-semibold mb-[20px]'>Request Sample</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProductPage;