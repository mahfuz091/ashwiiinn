/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [isOpen, SetIsOpen] = useState(true)

  const [products, SetProducts] = useState([])
  useEffect(() => {
    fetch("/moondust.json")
      .then((res) => res.json())
      .then((data) => SetProducts(data));

  }, []);

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? '0' : `${contentRef.current.scrollHeight}px`;
    }
  }, [isOpen]);
  return <div className="container mx-auto mb-[94px]">
    <div className='Distillate-Cartridges px-[33px] py-[36px] bg-[#F5F5F5] rounded-[15px]'>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
        <h6 className="text-[#000] text-[20px] font-medium">Moon Dust - 1G Distillate Cartridges</h6>
        <div className='flex justify-between items-center gap-[12px]'>
          <p className="text-[#535353] text-[15px] font-normal">Showing 1 - {products.length} of {products.length} results</p>
          <button onClick={() => SetIsOpen(!isOpen)}>
            <img className={isOpen ? "" : "rotate-180 transition-all"} src='/DownArrowBlack.png' alt='' />
          </button>
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'collapsed' : ''}`}>
        {
          products?.map((product, index) => <SingleProduct key={index} product={product}></SingleProduct>)
        }
      </div>
    </div>
  </div>;
};

export default Products;
