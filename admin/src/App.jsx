import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Login from "./components/Login";
function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main className=" w-full bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar token={token} setToken={setToken} />
          <div className="flex w-full">
            <div className="w-[18%] fixed min-h-screen border-r-2">
              <Sidebar />
            </div>
            <div className="flex-1 px-5 py-2 ml-[18%]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
