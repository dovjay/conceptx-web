import React from "react"

import mainVideo from "../data/videos/Conceptx_video_promo.mp4"

import Layout from "../components/layout"
import WelcomeText from "../components/welcome-text"
import Portfolio from "../components/portfolio"

export default function Home() {
  return (
    <Layout>
      <div>
        <video autoPlay muted loop style={{ width: "100%" }}>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>

      <WelcomeText />

      <Portfolio />
    </Layout>
  )
}
