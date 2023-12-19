import React from "react";
import { useForm } from "react-hook-form";

const ProductDescriptions = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className='mb-[63px]'>
      <h4 className='text-[#000] text-[30px] font-semibold'>Product Details</h4>
      <form action=''>
        <div className='form0container'></div>
        <p className='text-[15px] text-[#535353] font-normal mt-[24px]'>
          Enter a product description. Include all the details you can.
        </p>
        <div className='mt-[66px] md:grid grid-cols-3 gap-[44px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Wholesale Price</label>
            <input
              className='w-full input-primary'
              {...register("field1")}
              placeholder='0.00'
            />
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Sale Price</label>
            <input
              className='w-full input-primary'
              {...register("field1")}
              placeholder='0.00'
            />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal leading-6'>
              If this price is set, your wholesale price will appear crossed out
              and this price will appear in red.
            </p>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Retail Price (MSRP)</label>
            <input
              className='w-full input-primary'
              {...register("field1")}
              placeholder='0.00'
            />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal leading-6'>
              For information purpose. Does not affect transations on Leaflink.
            </p>
          </div>
        </div>
        <div className='mt-[35px] '>
          <div className='form-control w-full'>
            <label htmlFor=''>Custom Menu Price</label>
            <div className='md:grid grid-cols-2 gap-[42px]'>
              <select className='w-full input-primary' name='' id=''>
                <option value=''></option>
              </select>
              <input
                className='w-full input-primary'
                {...register("field1")}
                placeholder='0.00'
              />
            </div>
            <button className='thm-btn mt-[24px]'>Add Custom Menu Price</button>
          </div>
        </div>
        <div className='mt-[35px] md:grid grid-cols-2'>
          <div className='form-control w-full'>
            <label htmlFor=''>Cost of Goods Sold</label>
            <input className='w-full input-primary' {...register("field1")} />
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-[44px] mt-[35px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Product Packaging</label>
            <select className='w-full input-primary mb-[24px]' name='' id=''>
              <option value=''>-------</option>
            </select>
            <a className='text-[#6BCB77] text-[17px] ' href='#'>
              Manage
            </a>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Shipping Temperature</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''>--------</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDescriptions;
