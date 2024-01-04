import React, { useState } from "react";
import { useForm } from "react-hook-form";

const VolumeDiscounts = ({ onSubmit, currentStep, setCurrentStep }) => {
  const { register, handleSubmit } = useForm();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='mb-[65px]'>
      <h4 className='text-[#000] text-[22px] md:text-[30px] font-semibold'>
        Volume Discounts
      </h4>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-container'>
          <div className='md:grid grid-cols-3'>
            <div className='form-control w-full'>
              <label htmlFor=''>Type of Discount</label>
              <select
                className='w-full input-primary'
                name=''
                id=''
                {...register("discountPercentage")}
              >
                <option value=''>By Percent (%)</option>
              </select>
            </div>
          </div>
          <div className='md:flex justify-between items-center gap-[15px] mt-[35px]'>
            <span className='text-[#000] text-[15px] font-normal mt-[25px]'>
              If a customer buys
            </span>
            <div className='form-control md:w-[302px]'>
              <label htmlFor=''>Product Line</label>
              <input
                className='w-full input-primary'
                {...register("field1")}
                placeholder='2 (Minimum)'
              />
            </div>
            <p className='text-[#000] text-[15px] font-normal mt-[25px]'>
              or more, the customer will get
            </p>
            <div className='form-control md:w-[302px]'>
              <label htmlFor=''>Product Line</label>
              <input
                className='w-full input-primary'
                {...register("productLinePercentage")}
                placeholder='%'
              />
            </div>

            <p className='text-[#000] text-[15px] font-normal mt-[25px]'>
              Off the wholesale price
            </p>
          </div>
          <div className='mt-[40px]'>
            <div className='thm-btn inline-block cursor-pointer'>
              Add Another Discount Threshold
            </div>
          </div>
        </div>
        <h4 className='text-[#000] text-[30px] font-semibold mt-14 mb-9'>
          Product Visibility Settings
        </h4>
        <div className='form-container'>
          <div className='md:flex gap-[89px]'>
            <label className='text-[#000] text-[17px] font-medium'>
              <input
                type='radio'
                name='options'
                value='option1'
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className='mr-3 checkbox-round checked:mr-[13px]'
              />
              Featured Product
              <p className='text-[13px] text-[#535353] font-normal ml-[26px] max-w-[456px]'>
                Feature one product per brand per license. This product will
                appear at the top of your Shop brand page and have greater
                visibility throughout Leaflink. A photo is required for featured
                products to display
              </p>
            </label>
            <label className=''>
              <input
                type='radio'
                name='options'
                value='option2'
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className='mr-3 checkbox-round checked:mr-[13px]'
              />
              Show Inventory Quantity to Buyers
              <p className='text-[13px] text-[#535353] font-normal ml-[26px] max-w-[456px]'>
                Allow retailers to see this product’s quantity
              </p>
            </label>
          </div>
          <div className='md:grid grid-cols-2 gap-x-[42px] gap-y-[35px] mt-[35px]'>
            <div className='form-control w-full'>
              <label htmlFor=''>Decreasing quantity threshold</label>
              <select
                className='w-full input-primary'
                name=''
                id=''
                {...register("DecreasingQtyThreshold")}
              >
                <option value=''>0</option>
                <option value=''>1</option>
                <option value=''>2</option>
              </select>
              <p className='mt-[14px] text-[13px] text-[#535353] font-normal'>
                If a products available quantity reaches this value or below,
                take the selected action.
              </p>
            </div>
            <div className='form-control w-full'>
              <label htmlFor=''>Threshold Action</label>
              <input
                className='w-full input-primary'
                {...register("thresholdAction")}
                placeholder='Keep visible bu prevent orders (Default)'
              />
              <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>
                The action to take if a product’s available quantity reaches the
                decreasing threshold value or below.
              </p>
            </div>
            <div className='form-control w-full'>
              <label htmlFor=''>Increasing Quantity Threshold</label>
              <input
                className='w-full input-primary'
                {...register("increasingThreshold")}
              />
              <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>
                If a products available quantity reaches this value or below,
                take the selected action.
              </p>
            </div>
            <div className='form-control w-full'>
              <label htmlFor=''>Threshold Action</label>
              <input
                className='w-full input-primary'
                {...register("thresholdAction")}
                placeholder='Do nothing (Default)'
              />
              <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>
                The action to take if a product’s available quantity reaches the
                decreasing threshold value or below.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-[40px] flex justify-between '>
          <input
            className='thm-btn'
            onClick={() => setCurrentStep(currentStep - 1)}
            type='button'
            value='Prev'
          />

          <input className='thm-btn' type='submit' value='Next' />
        </div>
      </form>
    </div>
  );
};

export default VolumeDiscounts;
