import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;

const generalSlice = createSlice({
  name: 'rtk-query-learning',
  initialState: {
    items: [],
  },
  reducers: {},
});

export const generalAction = generalSlice.actions;
export default generalSlice;
