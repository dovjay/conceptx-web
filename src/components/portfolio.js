import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PortfolioSM from "./portfolio-sm"
import PortfolioLG from "./portfolio-lg"
import PortfolioMobile from "./portfolio-mobile"

export default function Portfolio() {
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
    <>
      <div className="portfolio-desktop">
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
      </div>

      <div className="portfolio-mobile">
        <div style={{ marginTop: 200 }}>
          <PortfolioMobile 
            category="MICROSITE" 
            link="https://jelajahnussa.com" 
            title="Jelajah Nussa" 
            description="We build website for Jelajah Nussa event."
            img={data.squareImage.edges[0].node.childImageSharp.fluid} 
          />
          <PortfolioMobile
            category="GAMING MARKETPLACE" 
            link="https://upvolv.id" 
            title="Upvolv" 
            description="For gamer who wants to trade in-game items."
            img={data.squareImage.edges[1].node.childImageSharp.fluid} 
          />
          <PortfolioMobile
            category="COMPANY PROFILE" 
            link="https://dytonadelikrisp.com"
            title="Langit Pitu"
            description="Present the best of cultural event concept."
            img={data.rectImage.edges[0].node.childImageSharp.fluid} 
          />
          <PortfolioMobile
              category="PRODUCT" 
              link="https://mofoto.id" 
              title="MOFOTO"
              description="Captures your best life moment."
              img={data.squareImage.edges[2].node.childImageSharp.fluid} 
            />
            <PortfolioMobile
              category="PRODUCT" 
              link="https://hisense.id" 
              title="Hisense"
              description="Biggest electronic company in the world." 
              img={data.squareImage.edges[3].node.childImageSharp.fluid} 
            />
          <PortfolioMobile
            category="COMPANY PROFILE" 
            title="Dytona Deli Krisp"
            description="Bring Indonesian native snack to international market."
            link="https://langitpituofficial.com" 
            img={data.rectImage.edges[1].node.childImageSharp.fluid} 
          />
        </div>
      </div>
    </>
  )
}