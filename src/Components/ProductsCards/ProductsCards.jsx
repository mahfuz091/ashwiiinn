"use client";
import React, { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import LoadProductData from "@/utils/LoadProductData/LoadProductData";

const ProductsCards = () => {
  const [productsData, SetProductsData] = useState([]);
  const product = LoadProductData();
  console.log(product);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => SetProductsData(data));
  }, []);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[31px] gap-y-[48px]'>
      {productsData.map((singleProduct, index) => (
        <SingleProductCard
          key={index}
          singleProduct={singleProduct}
        ></SingleProductCard>
      ))}
    </div>
  );
};

export default ProductsCards;
