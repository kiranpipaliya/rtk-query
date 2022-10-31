import React from 'react';
import { useGetAllProductsQuery, useGetProductQuery } from '../store/apiSlice/apiSlice';
const Data = () => {
  const { data: allProductData, error, isError, isLoading, isSuccess, isFetching } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery('iphone');
  console.log('allProductData', allProductData);
  console.log('singleProductData', singleProductData);

  if (error) {
    return <h1>---------{error}error -----</h1>;
  }

  if (isError) {
    return <h1>---------{isError} -----</h1>;
  }
  if (isLoading) {
    return <h1>---------{isLoading}isLoading -----</h1>;
  }
  if (isFetching) {
    return <h1>---------{isFetching}isFetching -----</h1>;
  }
  if (isSuccess) {
    return (
      <>
        <h1>---------{isSuccess}isSuccess -----</h1>
        <p>{`${allProductData}`}</p>
      </>
    );
  }

  return <div>Data:</div>;
};

export default Data;
