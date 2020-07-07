import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <div style={{ margin: 'auto 6rem' }}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}