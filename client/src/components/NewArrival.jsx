import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../config";
import Title from "./Title";
import Slider from "react-slick";
import Product from "./Product";
import PreviousArrow from "./PreviousArrow";
import NextArrow from "./NextArrow";
import { useWindowSize } from "react-use";


const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const windowWidth = useWindowSize();

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
          console.log("Get products Error", error);
        }
      };
      fetchData();
    } catch (error) {
      console.log("Get products Error", error);
    } finally {
      setLoading(false);
    }
  }, []);
  //   console.log(products , total);
  const skeletonCount = windowWidth.width > 1025 ? 4 : windowWidth.width > 769 ? 3 : windowWidth.width > 400 ? 2 : 1;

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <Title>New Arrivals</Title>
      {products?.length > 0 ? (
        <Slider {...settings}>
          {products?.map((item) => (
            <Product key={item?._id} item={item} />
          ))}
        </Slider>
      ) : (
        <div className="w-full h-96 flex items-center gap-[20px] mt-4">
          {
            Array.from({length:skeletonCount }).map((_, i) =>(
              <div key={i} className="w-full h-full bg-gray-200 animate-pulse rounded-md"/>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default NewArrival;
