import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const Inventory = ({ onSubmit, currentStep, setCurrentStep }) => {
  const [startDate, setStartDate] = useState("");
  const { register, handleSubmit } = useForm();
  return (
    <div className='mb-[65px]'>
      <h4 className='text-[#000] text-[22px] md:text-[30px] font-semibold'>
        Inventory
      </h4>
      <form
        className='form-container'
        action=''
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='md:grid grid-cols-3 gap-[44px]'>
          <div className='form-control w-full flex flex-col'>
            <label className='w-full' htmlFor=''>
              Product Launch Date
            </label>
            <ReactDatePicker
              className='w-full input-primary date-picker'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal'>
              The date and time at which your product will be listed as
              available for purchase
            </p>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Status</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''></option>
            </select>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Inventory Management</label>
            <select className='w-full input-primary' name='' id=''>
              <option value=''>Managed</option>
            </select>
          </div>
        </div>
        <div className='md:grid grid-cols-3 gap-[44px] mt-[33px]'>
          <div className='form-control w-full flex flex-col'>
            <label className='w-full' htmlFor=''>
              Total Available Inventory
            </label>
            <input className='w-full input-primary' {...register("field1")} />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>
              The amount of physical inventory on your shelf. This number will
              change as your fulfill orders.
            </p>
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Min Order</label>
            <input
              className='w-full input-primary'
              {...register("field1")}
              placeholder='1.0'
            />
          </div>
          <div className='form-control w-full'>
            <label htmlFor=''>Inventory Management</label>
            <input className='w-full input-primary' {...register("field1")} />
          </div>
        </div>
        <div className='md:grid grid-cols-3 gap-[44px] mt-[33px]'>
          <div className='form-control w-full flex flex-col'>
            <label className='w-full' htmlFor=''>
              Low Inventory Alert Threshold
            </label>
            <input className='w-full input-primary' {...register("field1")} />
            <p className='mt-[14px] text-[13px] text-[#535353] font-normal w-full'>
              An email will be sent when available inventory (i.e. total
              inventory minus any reserved inventory) reaches or drops below the
              amount entered.
            </p>
          </div>
          <div className='form-control w-full col-span-2'>
            <div className='md:mt-[50px]'>
              <div className='flex gap-[10px] items-center '>
                <input
                  className='checkbox-round'
                  type='checkbox'
                  name=''
                  id=''
                />
                <label
                  className='text-[17px] text-[#000] font-medium'
                  htmlFor=''
                >
                  Alert Me When Inventory is Low
                </label>
              </div>
              <p className='pl-[26px] text-[13px] text-[#535353] font-normal mt-[9px] '>
                Update recipients in Company settings under the Notifications
                tab.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-[40px] flex justify-between '>
          <button
            className='thm-btn'
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Prev
          </button>
          <button className='thm-btn ' type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inventory;
