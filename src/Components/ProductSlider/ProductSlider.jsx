"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SingleProductCard from "../ProductsCards/SingleProductCard";
import SlideNextButton from "../SlideNextButton/SlideNextButton";
import SlidePrevButton from "../SlidePrevButton/SlidePrevButton";

const ProductSlider = () => {
  const [productsData, SetProductsData] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => SetProductsData(data));
  }, []);
  const product = {
    id: "1",
    title: "Live Resin Gummy 100mg (10pc) Pack - Tiger’s Blood",
    discountPrice: "8.00",
    price: "7.00",

    image: "https://i.ibb.co/wKFKPvJ/pngegg-1.png",
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
      >
        <SlidePrevButton></SlidePrevButton>
        <SlideNextButton></SlideNextButton>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductCard singleProduct={product}></SingleProductCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
