import React from 'react'
import Header from '../Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import ServicesTag from '../ServicesTag'
import Footer from '../Footer'
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const RootLayout = () => {
  return (
   <Provider store={store}>
     <Header/>
     <ScrollRestoration/>
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
   </Provider>
  )
}

export default RootLayout