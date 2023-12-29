"use client";
import React, { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
// import LoadProductData from "@/utils/LoadProductData/LoadProductData";

const Products = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);
  // const products = LoadProductData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[31px] gap-y-[48px]'>
      {products.map((product, index) => (
        <SingleProductCard key={index} product={product}></SingleProductCard>
      ))}
    </div>
  );
};

export default Products;
