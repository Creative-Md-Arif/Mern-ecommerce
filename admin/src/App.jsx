import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {

  const [token , setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  )


  return (
   <main className=" w-full bg-gray-50 min-h-screen">
     <Navbar  token={token}  setToken={setToken} />
     <div className="flex w-full">
      <div  className="w-[18%] fixed min-h-screen border-r-2">
        <Sidebar/>
      </div>
      <div className="flex-1 px-5 py-2 ml-[18%]">
        {/* Routing */}
        <p>Pages content </p>
      </div>
     </div>
   </main>
  )
}

export default App
