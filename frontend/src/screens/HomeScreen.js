import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import data from '../data.js';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading = false, products = [], error = null } = productList ? productList : {};
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (<div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    )}
  </div>)
}