import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Input, { Label } from "./ui/input";
import { serverUrl } from "../../config";
import axios from "axios";
import toast from "react-hot-toast";


const NewUserForm = ({
  isOpen,
  setIsOpen,
  close,
  selectedUser,
  getUsersList,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (selectedUser) {
      // is user exist
      setFormData({
        _id: selectedUser._id || null,
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        password: "",
      });
    } else {
      // add new user
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddOrUpdateUser = async (e) => {
    e.preventDefault();
    try {
      let response;

      if (selectedUser) {
        response = await axios.put(
          `${serverUrl}/api/user/update/${selectedUser?._id}`,
          formData
        );
      } else {
        response = await axios.post(`${serverUrl}/api/user/register`, formData);

      }

      const data = response?.data;

      if (data?.success) {
        toast.success(data?.message);
        getUsersList();
        setIsOpen(false);
      } else{
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("User save error", error);
      toast.error(error?.response?.data.message || "An error occured");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed w-full min-h-screen bg-black/70 top-0 left-0">
          <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel className="w-full max-w-xl rounded-lg px-10 py-5 bg-white shadow-md shadow-orange-200 border border-gray-300 text-black">
                  <div className="flex min-h-full items-center justify-between">
                    <DialogTitle>
                      {selectedUser ? "Edit User" : "Add User"}
                    </DialogTitle>
                    <IoMdClose
                      onClick={() => setIsOpen(false)}
                      className="text-lg hover:text-red-600 cursor-pointer duration-300"
                    />
                  </div>
                  <div className="mt-3">
                    <form
                      onSubmit={handleAddOrUpdateUser}
                      className=" flex flex-col gap-3"
                    >
                      <div className="flex flex-col gap-1">
                        <Label>Enter name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Label>Enter email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Label>Enter password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-black/80 text-white w-32 py-2 rounded-md text-sm font-semibold hover:bg-black duration-300"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default NewUserForm;
