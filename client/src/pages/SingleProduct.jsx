import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import { serverUrl } from "../../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await axios.get(
          `${serverUrl}/api/product/single?_id=${id}`
        );
        const data = response?.data;
        if (data?.success) {
          setProduct(data?.product);
        } else {
          console.log("Get products Error", data?.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log("Get products Error", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  console.log(product);

  return (
    <Container className="grid grid-cols-2 gap-10">
      <div className="w-full max-h-[500px] group overflow-hidden rounded-md border border-gray-300">
        <img
          src={product?.images[0]}
          alt="productImage"
          className="w-full h-full object-cover rounded-md group-hover:scale-110 duration-500 transition-transform ease-in-out"
        />
      </div>
      <ProductInfo product={product} />
    </Container>
  );
};

export default SingleProduct;
