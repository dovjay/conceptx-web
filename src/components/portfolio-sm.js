import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "../components/portfolio.module.css"

import SubHeader from "./sub-header"

export default function PortfolioSM(props) {
  return (
    <div className={`bg-dark ${styles.portfolio_sm} ${props.class}`}>
      <Img fluid={props.img} sizes={{ ...props.img, aspectRatio: 1 / 1 }} className={styles.portfolio_img} />
      <div className="mt-2">
      <SubHeader content={props.category}/>
        <h3 className="font-weight-normal" style={{ fontSize: '1.3vw' }}>
          <Link target="_blank" to={props.link}>{props.title}</Link> - {props.description}
        </h3>
      </div>
    </div>
  )
}
