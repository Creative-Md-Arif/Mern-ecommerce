import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServicesTag from '../ServicesTag'
import Footer from '../Footer'

const RootLayout = () => {
  return (
   <>
     <Header/>
     <Outlet/>
     <ServicesTag/>
     <Footer/>
   </>
  )
}

export default RootLayout