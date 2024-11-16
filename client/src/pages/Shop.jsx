// import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
// import { serverUrl } from '../../config';
// import axios from 'axios';
import Container from '../components/Container';
// import ProductsSideNav from '../components/ProductsSideNav';
import PaginationProductList from '../components/PaginationProductList';

const Shop = () => {

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [total, setTotal] = useState(0);


  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     const fetchData = async () => {
  //       const response = await axios.get(serverUrl + "/api/product/list");
  //       const data = response?.data;
  //       if (data?.success) {
  //         setProducts(data?.products);
  //         setTotal(data?.total);
  //       } else {
  //         console.log("Get products Error", data?.message);
  //       }
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log("Get products Error", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);


  


  return (
   <Container>
    <Title>Available Products on Sale</Title>
    <div className='mt-5 flex gap-10'>
      {/* <div className='w-[20%] lg:w-[25%] hidden md:inline-flex h-full bg-red-300'>
        <ProductsSideNav/>
      </div> */}
      <PaginationProductList />
    </div>
   </Container>
  )
}

export default Shop
