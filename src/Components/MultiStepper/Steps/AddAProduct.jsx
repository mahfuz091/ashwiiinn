import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <div className='addproduct-header  flex justify-between items-center'>
        <h4 className='text-[#000] text-[30px] font-semibold'>Add A Product</h4>
        <select
          className='py-[17px] px-[33px] bg-[#6BCB77] rounded-[30px] text-[#fff] text-[17px] font-semibold'
          name=''
          id=''
        >
          <option value=''>Pick a Product Template</option>
        </select>
      </div>
      <form
        className='form-container'
        action=''
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center mb-[40px]'>
          <h5 className='text-[17px] text-[#000] font-medium'>
            Add / Edit a Product
          </h5>
          <p className='text-[13px] text-[#535353] font-normal'>
            fill out the following and click save at the bottom
          </p>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Brand</label>
          <input
            className='w-full'
            {...register("field1")}
            placeholder='Field 1'
          />
        </div>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default AddAProduct;
