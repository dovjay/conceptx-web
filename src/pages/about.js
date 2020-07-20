import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./about.module.css"

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
        <h1 className={styles.main_header}>
          We make digital more simpler.
        </h1>
      </div>

      <div style={{ marginTop: 400 }} className="d-flex align-items-center flex-column">
        <SubHeader content="WHAT WE DO" />
        <p  className={styles.what_we_do_desc}>
          As technology becomes core to every company, our job is to make digital experiences that create human connections. Websites and products that spark joy and bring value to both people and businesses.
        </p>
      </div>

      {/* Strategy Section */}
      <div style={{ marginTop: 300 }} className="d-flex">
      <div className={`d-flex row ${styles.flow_direction} m-0 w-100`}>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className={styles.flow_desc_container}>
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
          <div className={`${styles.flow_img_container} col-md-6`}>
            <Img className={styles.flow_img} fluid={data.developmentPict.childImageSharp.fluid} sizes={{ ...data.strategyPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
          </div>
        </div>
      </div>

      {/* Design Section */}
      <div style={{ marginTop: 100 }} className="d-flex">
        <div className="row  m-0">
          <div className={`${styles.flow_img_container} col-md-6`}>
            <Img className={`${styles.flow_img} ml-auto`} fluid={data.designPict.childImageSharp.fluid} sizes={{ ...data.designPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <div className={styles.flow_desc_container}>
              <SubHeader content="DESIGN"/>
              <h4 className="font-weight-normal">Digital branding.</h4>
              <p>
                Modern brands are digital-first. They evoke people's emotions through craft and motion — and they look good on any screen or medium. We design brands that speak to your audience and stand out amidst the information abundance of today.
              </p>
              <h4 className="mt-5 font-weight-normal">Experience & interface design.</h4>
              <p>
                Websites, products — we design interfaces that are both functional and fun to use. The experiences we create tell engaging stories, guide people to do the right thing, and shape long-lasting connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Section */}
      <div style={{ marginTop: 100 }} className="d-flex">
        <div className={`d-flex row ${styles.flow_direction} m-0 w-100`}>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className={styles.flow_desc_container}>
              <SubHeader content="DEVELOPMENT"/>
              <h4 className="font-weight-normal">Creative development.</h4>
              <p>
                We write code. Html, JavaScript, CSS, React… the whole package. We have a lot of experience doing it and, most importantly, build things the right way. We make sure to create scalable solutions that are fast and maintainable by your team in the future.
              </p>
              <h4 className="mt-5 font-weight-normal">Modern technologies</h4>
              <p>
                As we try to develop what you're going to build, we also try to make sure to use the latest, fastest, and efficient technologies so your product stays on the edge of today's world technology.
              </p>
            </div>
          </div>
          <div className={`${styles.flow_img_container} col-md-6`}>
            <Img className={styles.flow_img} fluid={data.developmentPict.childImageSharp.fluid} sizes={{ ...data.developmentPict.childImageSharp.fluid, aspectRatio: 1 / 2 }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
