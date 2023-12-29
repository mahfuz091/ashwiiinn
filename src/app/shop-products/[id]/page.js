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
                                <p>Our organic Dragon fruit powder is perfect for making smothies, smoothie bowls, agua fresca’s chia pudding and much more.</p>
                            </div>
                            <img src="/product-detail.png" alt="" />
                        </div>
                        <div className='rounded-[20px] bg-[#fff] shadow-secoundary px-[27px] py-[42px]'>
                            <p>Freeze Dried Powder</p>
                            <select name="" id="">
                                <option value="">Organic Dragon Fruit</option>
                            </select>
                            <p>$28.99 per bag</p>
                            <p>8 oz powder per bag</p>
                            <form action="">
                                <div className="form-control">
                                    <label htmlFor="">Quantity</label>
                                    <input type="text" name="" id="" placeholder="Amount in Cases" />

                                </div>
                                <button type="submit">Add To Cart</button>
                            </form>
                            <button>Request Sample</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProductPage;