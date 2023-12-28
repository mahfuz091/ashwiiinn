"use client";
import React, { useEffect, useState } from "react";
import SingleBrands from "./SingleBrands";

const Brands = () => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    fetch("/moondust.json")
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);
  return (
    <>
      <p className='text-[#535353] text-[15px] font-normal mt-[100px] mb-[20px]'>
        Showing 1 - 32 of 32 results
      </p>
      <div className='px-[33px]  bg-[#F5F5F5] rounded-[15px] '>
        {products.map((product, index) => (
          <SingleBrands key={index} product={product}></SingleBrands>
        ))}
      </div>
      <div className='text-center my-[61px]'>
        <button className='px-[46px] py-[29px] bg-[#442862] rounded-[50px] text-[19px] text-[#fff] font-semibold'>
          Load More
        </button>
      </div>
    </>
  );
};

export default Brands;
