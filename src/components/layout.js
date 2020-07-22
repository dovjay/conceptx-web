import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "./navbar"
import SubFooter from "./sub-footer"
import Footer from "./footer"

export default function Layout({ contact, children }) {
  return (
    <div>
      <Helmet title="ConceptX" defer={false} />
      <Navbar/>
      <div className='layout-container'>
        {children}
        <SubFooter contact={contact} />
      </div>
      <Footer/>
    </div>
  )
}