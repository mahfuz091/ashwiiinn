"use client";
import React, { useState } from "react";

import AddAProduct from "../Steps/AddAProduct";
import ProductSpec from "../Steps/ProductSpec";
import Inventory from "../Steps/Inventory";
import Strains from "../Steps/Strains";
import ProductDescriptions from "../Steps/ProductDescriptions";
import VolumeDiscounts from "../Steps/VolumeDiscounts";
import ProductImage from "../Steps/ProductImage";
import Stepper from "../Stepper/Stepper";

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Add a Product",
    "Product Specification",
    "Inventory",
    "Strains",
    "Product Details",
    "Volume Discounts",
    "Product Images",
  ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AddAProduct onSubmit={onSubmit}></AddAProduct>;
      case 2:
        return <ProductSpec onSubmit={onSubmit}></ProductSpec>;
      case 3:
        return <Inventory onSubmit={onSubmit}></Inventory>;
      case 4:
        return <Strains onSubmit={onSubmit}></Strains>;
      case 5:
        return <ProductDescriptions onSubmit={onSubmit}></ProductDescriptions>;
      case 6:
        return <VolumeDiscounts onSubmit={onSubmit}></VolumeDiscounts>;
      case 7:
        return <ProductImage onSubmit={onSubmit}></ProductImage>;
      default:
    }
  };

  const [formData, setFormData] = useState({});
  console.log(formData);
  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className='mx-auto container'>
      <Stepper
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        steps={steps}
      />
      {displayStep(currentStep)}
    </div>
  );
};

export default MultistepForm;
