import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SubHeader from "../components/sub-header"

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      strategyPict: file(name: {eq: "strategy"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designPict: file(name: {eq: "design"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      developmentPict: file(name: {eq: "development"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }  
  `)

  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <h1 style={{ fontSize: '9vw', lineHeight: 1.1, letterSpacing: -7, marginTop: 50 }} className="text-center font-weight-normal w-75">
          We make digital more simpler.
        </h1>
      </div>

      <div style={{ marginTop: 400 }} className="d-flex align-items-center flex-column">
        <SubHeader content="WHAT WE DO" />
        <p style={{ width: '55vw' }} className="h1 text-center">
          As technology becomes core to every company, our job is to make digital experiences that create human connections. Websites and products that spark joy and bring value to both people and businesses.
        </p>
      </div>

      {/* Strategy Section */}
      <div style={{ marginTop: 300 }} className="d-flex">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div style={{ width: '50%' }} className="ml-5">
            <SubHeader content="STRATEGY"/>
            <h4 className="font-weight-normal">Design sprints & workshops.</h4>
            <p>
              Design sprints and workshops establish a common vision and give you the ability to move fast from ideation and prototyping to implementation. We empower your people to innovate, iterate and collaborate openly.
            </p>
            <h4 className="mt-5 font-weight-normal">Business & user research.</h4>
            <p>
              By evaluating your business needs and finding core customer insights, we help you develop truly tailored experiences and build meaningful relationships between your business and customers.
            </p>
          </div>
        </div>
        <div style={{ height: "47vw" }} className="col-md-6">
          <Img style={{ height: '100%', width: '82%' }} fluid={data.strategyPict.childImageSharp.fluid} sizes={{ ...data.strategyPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
        </div>
      </div>

      {/* Design Section */}
      <div style={{ marginTop: 100 }} className="d-flex">
        <div style={{ height: "47vw" }} className="col-md-6">
          <Img style={{ height: '100%', width: '82%' }} className="ml-auto" fluid={data.designPict.childImageSharp.fluid} sizes={{ ...data.designPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div style={{ width: '50%' }} className="mr-5">
            <SubHeader content="DESIGN"/>
            <h4 className="font-weight-normal">Digital branding.</h4>
            <p>
              Modern brands are digital-first. They evoke people's emotions through craft and motion — and they look good on any screen or medium. We design brands that speak to your audience and stand out amidst the information abundance of today.
            </p>
            <h4 className="mt-5 font-weight-normal">Experience & interface design.</h4>
            <p>
              Websites, products, games — we design interfaces that are both functional and fun to use. The experiences we create tell engaging stories, guide people to do the right thing, and shape long-lasting connections.
            </p>
          </div>
        </div>
      </div>

      {/* Development Section */}
      <div style={{ marginTop: 100 }} className="d-flex">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div style={{ width: '50%' }} className="ml-5">
            <SubHeader content="DEVELOPMENT"/>
            <h4 className="font-weight-normal">Creative development.</h4>
            <p>
              We write code. Html, JavaScript, CSS, React… the whole package. We have a lot of experience doing it and, most importantly, build things the right way. We make sure to create scalable solutions that are fast and maintainable by your team in the future.
            </p>
            <h4 className="mt-5 font-weight-normal">Emerging technologies.</h4>
            <p>
              We love to experiment with emerging technologies such as VR, AR, AI, 3D (WebGL) and look for the best tech solutions for innovative ideas, making sure that our tech recommendations fit your goal. Check out our lab for our latest experiments.
            </p>
          </div>
        </div>
        <div style={{ height: "47vw" }} className="col-md-6">
          <Img style={{ height: '100%', width: '82%' }} fluid={data.developmentPict.childImageSharp.fluid} sizes={{ ...data.developmentPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
        </div>
      </div>
    </Layout>
  )
}