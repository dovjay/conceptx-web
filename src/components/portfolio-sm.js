import React from "react"
import Img from "gatsby-image"
import styles from "./portfolio.module.css"

import SubHeader from "./sub-header"

export default function PortfolioSM(props) {
  return (
    <div className={`${styles.portfolio_sm} ${props.class}`}>
      <Img fluid={props.img} sizes={{ ...props.img, aspectRatio: 1 / 1 }} className={styles.portfolio_img} />
      <div className="mt-2">
      <SubHeader content={props.category}/>
        <h3 className="font-weight-normal" style={{ fontSize: '1.3vw' }}>
          <a target="_blank" rel="noreferrer" href={props.link}>{props.title}</a> - {props.description}
        </h3>
      </div>
    </div>
  )
}
