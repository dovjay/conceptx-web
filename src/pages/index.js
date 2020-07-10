import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import mainVideo from "../data/videos/Conceptx_video_promo.mp4"

import Layout from "../components/layout"
import WelcomeText from "../components/welcome-text"
import PortfolioSM from "../components/portfolio-sm"
import PortfolioLG from "../components/portfolio-lg"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      squareImage: allFile(filter: { relativeDirectory: { eq: "images/portfolio/square" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div style={{ marginTop: 150 }}>
        <video controls autoPlay muted loop style={{ width: "100%" }}>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>

      <WelcomeText />

      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <PortfolioSM 
            category="PRODUCT" 
            link="/" 
            title="Product Name" 
            img={data.squareImage.edges[0].node.childImageSharp.fluid} 
          />
          <PortfolioSM 
            category="PRODUCT" 
            link="/" 
            title="Product Name" 
            class="ml-4" 
            img={data.squareImage.edges[1].node.childImageSharp.fluid} 
          />
        </div>
        <PortfolioLG 
          category="PRODUCT" 
          link="/" 
          title="Product Name"
        />
      </div>
    </Layout>
  )
}
