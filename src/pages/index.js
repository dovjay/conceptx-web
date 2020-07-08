import React from "react"

import Layout from "../components/layout"
import WelcomeText from "../components/welcome-text"
import PortfolioSM from "../components/portfolio-sm"
import PortfolioLG from "../components/portfolio-lg"

export default function Home() {
  return (
    <Layout>
      <div className="border" style={{ height: 800, marginTop: 150 }}>
        <h1>Big Main Hero Banner</h1>
      </div>

      <WelcomeText />

      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <PortfolioSM category="PRODUCT" link="/" title="Product Name" />
          <PortfolioSM category="PRODUCT" link="/" title="Product Name" class="ml-4" />
        </div>
        <PortfolioLG category="PRODUCT" link="/" title="Product Name" />
      </div>

      <div className="text-center" style={{ marginTop: 200 }}>
        <h1>Let's make something great together.</h1>
        <p>Have a project or want to talk? Say hello to radi@conceptx.id</p>
      </div>

      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <div className="col-4">
            <h4>Careers</h4>
            <p>Want to join conceptX? Happy to hear more about you at radi@conceptx.id.</p>
          </div>
          <div className="col-4 mx-auto">
          <h4>Blog</h4>
          <p>Read about design, technology, and culture on our insightful page.</p>
          </div>
          <div className="col-4">
          <h4>Social</h4>
          <p>Let's connect. You can find us on Instagram.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}