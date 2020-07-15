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
      rectImage: allFile(filter: { relativeDirectory: { eq: "images/portfolio/rectangle" } }) {
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
      <div style={{ marginTop: 120 }}>
        <video autoPlay muted loop style={{ width: "100%" }}>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>

      <WelcomeText />

      <div style={{ marginTop: 450 }}>
        <div className="d-flex">
          <PortfolioSM 
            category="MICROSITE" 
            link="https://jelajahnussa.com" 
            title="Jelajah Nussa" 
            description="We build website for Jelajah Nussa event."
            img={data.squareImage.edges[0].node.childImageSharp.fluid} 
          />
          <PortfolioSM 
            category="GAMING MARKETPLACE" 
            link="https://upvolv.id" 
            title="Upvolv" 
            description="For gamer who wants to trade in-game items."
            class="ml-4" 
            img={data.squareImage.edges[1].node.childImageSharp.fluid} 
          />
        </div>
        <PortfolioLG 
          category="COMPANY PROFILE" 
          link="https://dytonadelikrisp.com" 
          title="Dytona Deli Krisp"
          description="Bring Indonesian native snack to international market."
          img={data.rectImage.edges[0].node.childImageSharp.fluid} 
        />
      </div>

      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <PortfolioSM 
            category="PRODUCT" 
            link="https://mofoto.id" 
            title="MOFOTO"
            description="Captures your best life moment."
            img={data.squareImage.edges[2].node.childImageSharp.fluid} 
          />
          <PortfolioSM 
            category="PRODUCT" 
            link="https://hisense.id" 
            title="Hisense"
            description="Biggest electronic company in the world." 
            class="ml-4" 
            img={data.squareImage.edges[3].node.childImageSharp.fluid} 
          />
        </div>
        <PortfolioLG 
          category="COMPANY PROFILE" 
          link="https://langitpituofficial.com" 
          title="Langit Pitu"
          description="Present the best of cultural event concept."
          img={data.rectImage.edges[1].node.childImageSharp.fluid} 
        />
      </div>
    </Layout>
  )
}
