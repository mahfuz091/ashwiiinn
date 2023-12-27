"use client";
import { baseApi } from "./baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get products
    getProducts: builder.query({
      query: () => "/getProducts",
      providesTags: ["Products"],
    }),
    //get task by id
    getProductById: builder.query({
      query: (_id) => `/getProduct/${_id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = taskApi;
