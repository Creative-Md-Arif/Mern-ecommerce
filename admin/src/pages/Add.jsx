import React, { useState } from "react";
import Title from "../components/Title";
import { IoIosArrowDown, IoMdAdd, IoMdCloudUpload } from "react-icons/io";
import Input, { Label } from "../components/ui/input";
import SmallLoader from "../components/SmallLoader";
import { toast } from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../config.js";
import { useNavigate } from "react-router-dom";

const Add = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    discountedPercentage: "",
    _type: "",
    category: "",
    offer: false,
    isAvailable: true,
    badge: false,
    tags: [],
    image1: null,
    image2: null,
  });

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setFormData({
      ...formData,
      [id]: files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (name === "offer" || name === "isAvailable" || name === "badge") {
      // Convert string to boolean for specific fields
      setFormData({
        ...formData,
        [name]: value === "true",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleUploadProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value);
        } else {
          data.append(key, value);
        }
        // console.log(data);
      });

      const response = await axios.post(serverUrl + "/api/product/add", data, {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      });

      const responseData = await response?.data;

      if (responseData?.success) {
        toast.success(responseData?.message);
        navigate("/list");
      } else {
        toast.error(responseData?.message);
      }
    } catch (error) {
      console.log("Upload product error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleUploadProduct}
      className="flex flex-col items-start gap-3 w-full pb-10"
    >
      <Title>Upload products to Database </Title>
      <div className=" flex flex-wrap items-center gap-5">
        {["image1", "image2"].map((imageId) => (
          <label htmlFor={imageId} key={imageId}>
            <div className=" text-gray-500 border-2 border-dashed px-4 py-2 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md flex items-center gap-3">
              {formData[imageId] ? (
                <img
                  src={URL.createObjectURL(formData[imageId])}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-md mb-2"
                />
              ) : (
                <IoMdCloudUpload className="text-5xl" />
              )}
              <input
                type="file"
                hidden
                id={imageId}
                onChange={handleImageChange}
                disabled={loading}
              />
              <p>{formData[imageId] ? "Change" : "Upload"}</p>
            </div>
          </label>
        ))}
      </div>
      <div className=" flex flex-col w-full gap-1">
        <Label htmlFor="name">Product name</Label>
        <Input
          type={"text"}
          placeholder="Type the product name"
          name="name"
          id="name"
          // value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className=" flex flex-col w-full gap-1">
        <Label htmlFor="description">Product description</Label>
        <textarea
          type="text"
          placeholder="Type the product description"
          name="description"
          id="description"
          // value={formData.name}
          rows={4}
          onChange={handleChange}
          disabled={loading}
          className="border px-4 py-2 border-gray-500 rounded-md max-w-lg resize-none"
        />
      </div>
      <div className=" flex flex-col w-full gap-1">
        <Label htmlFor="brand">Product brand</Label>
        <Input
          type={"text"}
          placeholder="Type product brand here"
          name="brand"
          id="brand"
          // value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
        <div className=" flex flex-col w-full gap-1">
          <Label htmlFor="price">Product price</Label>
          <Input
            type={"number"}
            placeholder="Type product brand here"
            name="price"
            id="price"
            // value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div className=" flex flex-col w-full gap-1">
          <Label htmlFor="discountedPercentage">Product discount percentage</Label>
          <Input
            type={"number"}
            placeholder="Discount percentage %"
            name="discountedPercentage"
            id="discountedPercentage"
            // value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
      </div>
      {/* product type */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
        <div className=" flex flex-col w-full gap-1 relative">
          <Label htmlFor="_type">Product type</Label>
          <select
            name="_type"
            onChange={handleChange}
            disabled={loading}
            className="border pl-2 pr-5 py-2 border-gray-500 rounded-md max-w-[280px] appearance-none outline-none bg-transparent"
          >
            <option value="">Select product type</option>
            <option value="new_arrivals">New Arrivals</option>
            <option value="best_sellers"> Best Sellers</option>
            <option value="special_offers">Special Offers</option>
            <option value="promotions">Promotions</option>
          </select>
          <IoIosArrowDown className="text-sm absolute top-11 right-1 z-10" />
        </div>

        {/* product category */}
        <div className=" flex flex-col w-full gap-1 relative">
          <Label htmlFor="category">Product category</Label>
          <select
            name="category"
            onChange={handleChange}
            disabled={loading}
            className="border pl-2 pr-5 py-2 border-gray-500 rounded-md max-w-[280px] appearance-none outline-none bg-transparent"
          >
            <option value="">Select category type</option>
            <option value="Men">Man</option>
            <option value="Woman"> Woman</option>
            <option value="Kids">Kids </option>
            <option value="Accessories">Accessories</option>
            <option value="Others">Others</option>
          </select>
          <IoIosArrowDown className="text-sm absolute top-11 right-1 z-10" />
        </div>
        {/* product offers */}
        <div className=" flex flex-col w-full gap-1 relative">
          <Label htmlFor="offer">Offer</Label>
          <select
            name="offer"
            onChange={handleChange}
            value={formData.offer}
            disabled={loading}
            className="border pl-2 pr-5 py-2 border-gray-500 rounded-md max-w-[280px] appearance-none outline-none bg-transparent"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
          <IoIosArrowDown className="text-sm absolute top-11 right-1 z-10" />
        </div>
        {/* product available */}
        <div className=" flex flex-col w-full gap-1 relative">
          <Label htmlFor="isAvailable">Available</Label>
          <select
            name="isAvailable"
            onChange={handleChange}
            disabled={loading}
            value={formData.isAvailable}
            className="border pl-2 pr-5 py-2 border-gray-500 rounded-md max-w-[280px] appearance-none outline-none bg-transparent"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <IoIosArrowDown className="text-sm absolute top-11 right-1 z-10" />
        </div>
        {/* product badge */}
        <div className=" flex flex-col w-full gap-1 relative">
          <Label htmlFor="badge">badge</Label>
          <select
            name="badge"
            onChange={handleChange}
            
            disabled={loading}
            className="border pl-2 pr-5 py-2 border-gray-500 rounded-md max-w-[280px] appearance-none outline-none bg-transparent"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
          <IoIosArrowDown className="text-sm absolute top-11 right-1 z-10" />
        </div>
      </div>
      {/* product tags */}
      <div className="flex flex-col gap-1 items-start">
        <Label htmlFor="tags">Tags</Label>
        <div>
          {["Fashion", "Men", "Woman", "Kids", "Accessories", "Others"].map(
            (tag) => (
              <div key={tag} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  id={tag.toLowerCase()}
                  disabled={loading}
                  className="cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData((prevData) => ({
                        ...prevData,
                        tags: [...prevData.tags, tag],
                      }));
                    } else {
                      setFormData((prevData) => ({
                        ...prevData,
                        tags: prevData.tags.filter((t) => t !== tag),
                      }));
                    }
                  }}
                />
                <p>{tag}</p>
              </div>
            )
          )}
        </div>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-black/80 text-white uppercase font-semibold flex items-center justify-center gap-1 tracking-wide w-44 py-2.5 rounded-md hover:bg-black duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add
        {loading ? <SmallLoader /> : <IoMdAdd className="text-xl mt-0.5" />}
      </button>
    </form>
  );
};

export default Add;
