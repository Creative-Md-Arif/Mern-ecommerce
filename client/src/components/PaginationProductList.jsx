import { serverUrl } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductBanner from "./ProductBanner";
import Pagination from "./Pagination";
const PaginationProductList = () => {
  const [itemPerPage, setItemPerPage] = useState(8);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await axios.get(serverUrl + "/api/product/list");
        const data = response?.data;
        if (data?.success) {
          setProducts(data?.products);
          setTotal(data?.total);
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
  }, []);

  const itemsPerPageFormBanner = (itemPerPage) => {
    setItemPerPage(itemPerPage);
  };


  

  return (
    <div className="flex flex-col gap-5 w-full">
      <ProductBanner itemsPerPageFormBanner={itemsPerPageFormBanner} />
      <Pagination itemPerPage={itemPerPage} products={products} />
    </div>
  );
};

export default PaginationProductList;
