import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = ({ onSubmit }) => {
  const { register, handleSubmit, getValues,
    onChange, } = useForm();
  return (
    <div>
      <div className='addproduct-header  flex justify-between items-center'>
        <h4 className='text-[#000] text-[30px] font-semibold'>Add A Product</h4>
        <select
          className='py-[17px] pl-[33px] pr-[64px] bg-[#6BCB77] rounded-[30px] text-[#fff] text-[17px] font-semibold'
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
        <div className="md:grid md:grid-cols-2 md:gap-x-[42px] md:gap-y-[30px]">
          <div className='form-control w-full'>
            <label htmlFor=''>Brand</label>
            <select className='w-full input-primary' name="" id="" {...register("brand")}>
              <option value="Moon Dust">Moon Dust</option>
            </select>
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal'>Do you have more than on brand? Contact sales@leaflink.com to learn how to make them stand out for Leaflink shoppers.</p>

          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Product Line</label>
            <input
              className='w-full input-primary'
              {...register("ProductLine")}

            />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>Associate a product line with product. Your shop brand page will group together products in the same product line.</p>
            <p className='mt-[11px] text-[15px] text-[#6BCB77] font-medium'>Manage Product Lines</p>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Product Name*</label>
            <input
              className='w-full input-primary'
              {...register("ProductName")}

            />
            <div className='flex gap-[10px] mt-[19px]'>
              <input className='checkbox-round' type="checkbox" name="" id="" />
              <label htmlFor="">This Product Has Varieties</label>
            </div>

          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Product SKU</label>
            <input
              className='w-full input-primary'
              {...register("ProductSku")}

            />


          </div>
          <div className="form-control col-span-2 relative bg-[#442862] rounded-md py-[18px] pl-[21px] pr-[32px] md:pr-[125px] ">
            <h2 className=" text-[13px] text-[#fff] font-normal leading-[23px]">Buyers will have a choice of package sizes, flavors, or stains when shopping this product. The values you enter will automatically populate to all varieties , except where you overwrite them individually.</h2>
            <div className="absolute top-2 right-2"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.1074" cy="14.2344" r="13.9043" fill="#624285" />
              <path d="M10.4297 10.5566L17.7853 17.9123" stroke="white" stroke-linecap="round" />
              <path d="M17.7852 10.5566L10.4295 17.9123" stroke="white" stroke-linecap="round" />
            </svg></div>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>License*</label>
            <select className='w-full input-primary' name="" id="">
              <option value="">-------------</option>
            </select>
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal'>Cannabis and cannabis infused products must have an associated License.</p>

          </div>
        </div>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default AddAProduct;
