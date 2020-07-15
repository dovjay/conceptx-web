import React from "react"

import Navbar from "./navbar"
import SubFooter from "./sub-footer"
import Footer from "./footer"

export default function Layout({ contact, children }) {
  return (
    <div>
      <Navbar/>
      <div style={{ margin: 'auto 6rem', marginTop: 120 }}>
        {children}
        <SubFooter contact={contact} />
      </div>
      <Footer/>
    </div>
  )
}