import React from "react";
import { useForm } from "react-hook-form";

const ProductSpec = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      Product Specation
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field2")} placeholder='Field 2' />
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default ProductSpec;
