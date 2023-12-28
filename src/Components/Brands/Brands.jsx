"use client"
import React, { useEffect, useState } from 'react';
import SingleBrands from './SingleBrands';

const Brands = () => {
    const [products, SetProducts] = useState([])
    useEffect(() => {
        fetch("/moondust.json")
            .then((res) => res.json())
            .then((data) => SetProducts(data));

    }, []);
    return (<>
        <p className="text-[#535353] text-[15px] font-normal mt-[100px] mb-[20px]">Showing 1 - 32 of 32 results</p>
        <div className="px-[33px] py-[36px] bg-[#F5F5F5] rounded-[15px] ">

            {
                products.map((product, index) => <SingleBrands key={index} product={product}></SingleBrands>)
            }
        </div>
    </>
    );
};

export default Brands;