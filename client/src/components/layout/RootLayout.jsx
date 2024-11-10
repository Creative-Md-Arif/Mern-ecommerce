import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServicesTag from '../ServicesTag'
import Footer from '../Footer'
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
   <>
     <Header/>
     <Outlet/>
     <ServicesTag/>
     <Footer/>
     <Toaster
        position="bottom-rigjht"
        toastOptions={{
          style: {
            background: "#000000",
            color: "white",
          },
        }}
      />
   </>
  )
}

export default RootLayout