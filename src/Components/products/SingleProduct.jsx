/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SingleProduct = ({ product }) => {

    console.log(product);
    return (
        <div className='py-[37px] border-b-[1px] border-b-[#DBDBDB] last:border-none flex justify-between items-center'>
            <div className='flex items-center gap-[26px]'>
                <img className='rounded-[10px] w-[189px] h-[189px]' src={product.image} alt="" />
                <div className='max-w-[373px]'>
                    <h4 className="text-[24px] text-[#442862] font-medium mb-[17px]">{product.title}</h4>
                    <p className='mb-[27px]'><span className='line-through text-[17px] text-[#535353] font-normal mr-[12px]'>${product.price}</span> <span className=' text-[20px] text-[#000] font-medium'>${product.discountPrice}/Unit</span> <span className='text-[20px] text-[#535353] font-normal'>(${product.discountPrice}/gram)</span></p>
                    <div className='flex items-center gap-[16px]'><p className='text-[17px] text-[#000] font-medium'>Strain<span className='ml-[10px]'>{product.strain}</span></p> <span><svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                        <path d="M1.24512 0.474609V21.9526" stroke="#878787" />
                    </svg></span> <p className='text-[17px] text-[#000] font-medium'>Staiva<span className='ml-[10px]'>{product.staiva}%</span></p></div>
                </div>
            </div>
            <div>
                <div className='flex w-[201px] items-center gap-[37px] p-2 border-[2px] border-[#6BCB77] rounded-[42px]'>
                    <button className='flex justify-center items-center w-[41px] h-[41px] bg-[#6BCB77] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3" fill="none">
                        <path d="M1.79514 1.34497H12.8401" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                    </svg></button>
                    <p className='text-[24px] text-[#000] font-medium'>05</p>
                    <button className='flex justify-center items-center w-[41px] h-[41px] bg-[#6BCB77] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.57227 6.76685H12.6172" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                        <path d="M7.09473 1.24438L7.09473 12.2893" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                    </svg></button>
                </div>
                <div>
                    <button className='w-[201px] rounded-[42px] py-[18px] bg-[#DCDCDC] mt-[23px] text-[#535353] text-[15px] font-normal ' >Notes</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;