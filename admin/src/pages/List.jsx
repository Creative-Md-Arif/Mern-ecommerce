import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../config";
import Title from "../components/Title";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import PriceFormet from "../components/PriceFormet";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(serverUrl + "/api/product/list");
      const data = response?.data;
      if (data?.success) {
        setList(data?.products);
      } 
    } catch (error) {
      console.log("Product list fetching error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRemoveProduct = async (item) => {
    // console.log(_id);
    const confirmRemoval = await Swal.fire({
      title: `Are you sure you want to delete this ${item?.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmRemoval) {
      try {
        setLoading(true);
        const response = await axios.post(
          serverUrl + "/api/product/remove",
          {
            _id: item?._id,
          },
          {
            headers: {
              token,
            },
          }
        );

        const data = response?.data;
        if (data?.success) {
          setList(data?.products);
          await fetchProducts();
        } 
      } catch (error) {
        console.log("Product remove error", error);
        toast.error(error?.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <Title>Product List</Title>
            <Link
              to="/add"
              className="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
            >
              Add Products +
            </Link>
          </div>
          {list?.length > 0 ? (
            <div className="flex flex-col gap-2 mt-2">
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5">
                <b>Image</b>
                <b>Name</b>
                <b className="hidden md:inline-block">Category</b>
                <b>Price</b>
                <b className="text-center">Action</b>
                <b className="text-center">Edit</b>
              </div>
              {list?.map((item) => (
                <div
                  key={item?._id}
                  className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5"
                >
                  <img
                    src={item?.images[0]}
                    alt={item?.name}
                    className="w-16 object-cover bg-white rounded-sm"
                  />
                  <p className="font-semibold line-clamp-1">{item?.name}</p>
                  <p className="hidden md:inline-block font-medium">
                    {item?.category}
                  </p>
                  <PriceFormet amount={item?.price} />
                  <div className="flex justify-center">
                    <MdDelete
                      onClick={() => handleRemoveProduct(item)}
                      className="text-2xl hover:text-red-600 duration-300 ease-in-out cursor-pointer"
                    />
                  </div>
                  <p className="text-center">
                    <Link
                      to="/add"
                      className="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
                    >
                      Edit
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className=" text-red-600 font-medium tracking-wide">
                No products found Database
              </p>
              <Link
                to="/add"
                className="bg-black/80  w-fit text-white py-3 px-4 rounded-md hover:bg-black duration-300 ease-in-out"
              >
                Add Products
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default List;
