import React from "react";

const LoadProductData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });

  return await res.json();
};

export default LoadProductData;
