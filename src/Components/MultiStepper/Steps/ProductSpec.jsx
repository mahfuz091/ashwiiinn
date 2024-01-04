import React from "react";
import { useForm } from "react-hook-form";

const ProductSpec = ({ onSubmit, currentStep, setCurrentStep }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className='mb-[65px]'>
      <h4 className='text-[#000] text-[22px] md:text-[30px] font-semibold'>
        Product Specifications
      </h4>
      <form
        className='form-container'
        action=''
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='md:grid grid-cols-3 gap-[44px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Product Category*</label>
            <select
              className='w-full input-primary'
              name=''
              id=''
              defaultValue='Flower'
              {...register("Category")}
            >
              <option value='Flower'>Flower</option>
            </select>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Product Subcategory*</label>
            <select
              className='w-full input-primary'
              name=''
              id=''
              defaultValue='Flower'
              {...register("SubCategory")}
            >
              <option value=''>---------</option>
              <option value='Rose'>Rose</option>
            </select>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Flower Growing Operation*</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''></option>
            </select>
          </div>
        </div>
        <div className='md:grid grid-cols-3 gap-[44px] mt-[38px]'>
          <div className=''>
            <div className='form-control w-full'>
              <label htmlFor=''>Units of Measure**</label>
              <div className='md:grid grid-cols-2 gap-[18px]'>
                <select
                  className='w-full input-primary mb-[12px] md:mb-0'
                  name=''
                  id=''
                  {...register("unit")}
                >
                  <option value=''>---------</option>
                </select>
                <select className='w-full input-primary' name='' id=''>
                  <option value=''>Unit</option>
                </select>
              </div>
            </div>
            <div className='form-control w-full'>
              <label htmlFor=''></label>
            </div>
          </div>
          <div className='form-control w-full col-span-2'>
            <label htmlFor=''>Product Line</label>
            <input
              className='w-full input-primary'
              {...register("productLine")}
            />
          </div>
        </div>
        <div className='md:grid grid-cols-3 gap-[44px] mt-[45px]'>
          <div>
            <div className='flex gap-[10px] items-center '>
              <input className='checkbox-round' type='checkbox' name='' id='' />
              <label className='text-[17px] text-[#000] font-medium' htmlFor=''>
                Sell in Muliples
              </label>
            </div>
            <p className='pl-[26px] text-[13px] text-[#535353] font-normal mt-[9px] max-w-[332px]'>
              Shoppers will select the number of cases or packages to purchase,
              instead of individual units.
            </p>
          </div>

          <div>
            <div className='flex gap-[10px] items-center '>
              <input className='checkbox-round' type='checkbox' name='' id='' />
              <label className='text-[17px] text-[#000] font-medium' htmlFor=''>
                Allow Fractional Quantities
              </label>
            </div>
            <p className='pl-[26px] text-[13px] text-[#535353] font-normal mt-[9px] max-w-[332px]'>
              When checked, this product can be ordered in fractional quantites.
            </p>
          </div>
          <div>
            <div className='flex gap-[10px] items-center '>
              <input className='checkbox-round' type='checkbox' name='' id='' />
              <label className='text-[17px] text-[#000] font-medium' htmlFor=''>
                Enables Sample Request
              </label>
            </div>
            <p className='pl-[26px] text-[13px] text-[#535353] font-normal mt-[9px] max-w-[332px]'>
              When checked, this product will be available for sample request.
            </p>
          </div>
        </div>
        <div className='mt-[40px] flex justify-between '>
          <input
            className='thm-btn'
            onClick={() => {
              setCurrentStep(currentStep - 1);
            }}
            type='button'
            value='Prev'
          />
          <input className='thm-btn' type='submit' value='Next' />
        </div>
      </form>
    </div>
  );
};

export default ProductSpec;
