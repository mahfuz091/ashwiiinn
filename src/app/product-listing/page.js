
import Header from "@/Components/Header/Header";
import MultistepForm from "@/Components/MultiStepper/MultistepForm/MultistepForm";

import React from "react";
export const metadata = {
  title: "LeafLink | The Wholesale Cannabis Platform",
  description: "Generated by create next app",
};

const ProductListingPage = () => {
  return (
    <div>
      <Header title={"Product Listings"}></Header>
      <MultistepForm></MultistepForm>

    </div>
  );
};

export default ProductListingPage;
