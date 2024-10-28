import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { serverUrl } from "../../config";
import Loader from "../components/Loader";
import Title from "../components/Title";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const Users = ({ token }) => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsersList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(serverUrl + "/api/user/users", {
        headers: {
          token,
          "Content-Type": "application/json",
        },
      });
      const data = response?.data;

      if (data?.success) {
        setUsersList(data?.users);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("Get users Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className=" flex items-center justify-between max-w-3xl">
            <Title>Users</Title>
            <button className=" flex items-center gap-1 bg-black/80 text-white px-6 text-sm font-medium py-2 rounded-md hover:bg-black duration-300 transition-colors">
              Add user <IoMdAdd />
            </button>
          </div>
          {usersList?.length > 0 ? (
            <div className=" max-w-3xl flex flex-col gap-2 mt-2">
              <div className=" grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5">
                <b className="hidden md:inline-block">Name</b>
                <b>Email</b>
                <b className=" text-center">Action</b>
                <b className="text-center">Edit</b>
              </div>

              {usersList?.map((item) => (
                <div
                  key={item?._id}
                  className=" grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-white text-sm my-1.5"
                >
                  <p className=" hidden md:inline-block font-semibold">{item?.name}</p>
                  <p className="font-medium">{item?.email}</p>
                  <p><IoMdClose className=" text-lg cursor-pointer hover:text-red-600 duration-300 ease-in-out text-center w-full"/></p>
                  <button className=" text-base cursor-pointer hover:text-green-600 duration-300 ease-in-out">Edit</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-2">
              <p className="mb-4">You have no users in your database</p>
              {/* <button>Add user</button> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Users;
