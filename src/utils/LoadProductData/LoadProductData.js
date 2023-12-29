import React from "react";

const LoadProductData = async () => {
  const res = await fetch("/products.json", { cache: "force-cache" });

  return res.json();
};

export default LoadProductData;
