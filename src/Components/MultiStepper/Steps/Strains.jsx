import React from "react";
import { useForm } from "react-hook-form";

const Strains = ({ onSubmit, currentStep, setCurrentStep }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className='mb-[65px]'>
      <h4 className='text-[#000] text-[22px] md:text-[30px] font-semibold'>
        Strains
      </h4>
      <form
        action=''
        className='form-container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='md:grid grid-cols-2 gap-[44px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Manage Strains</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''>Moon Dust</option>
            </select>
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal'>
              You may tag strains that best match your product. At least one is
              required for Flower products.
            </p>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Manage Strains</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''></option>
            </select>
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-[44px] mt-[33px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Value</label>
            <input
              className='w-full input-primary'
              {...register("field1")}
              placeholder='0'
            />
            <div className='flex gap-[10px] items-center mt-[22px] '>
              <input className='checkbox-round' type='checkbox' name='' id='' />
              <label className='text-[15px] text-[#000] font-normal' htmlFor=''>
                Is This Value a Range?
              </label>
            </div>
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-[44px] mt-[33px]'>
          <div className='form-control w-full'>
            <label htmlFor=''>Dosage Unit</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''>-------</option>
            </select>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Specification Type</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''>--------</option>
            </select>
          </div>
        </div>
        <div className='text-center mt-[65px]'>
          <a className='thm-btn'>Add Additional Product Specs</a>
        </div>
        <div className='mt-[40px] flex justify-between '>
          <button
            className='thm-btn'
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Prev
          </button>
          <input className='thm-btn ' type='submit' value='Next' />
        </div>
      </form>
    </div>
  );
};

export default Strains;
