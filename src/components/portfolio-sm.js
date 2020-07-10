import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "../components/portfolio.module.css"

export default function PortfolioSM(props) {
  return (
    <div className={`bg-dark ${styles.portfolio_sm} ${props.class}`}>
      <Img fluid={props.img} sizes={{ ...props.img, aspectRatio: 1 / 1 }} className={styles.portfolio_img} />
      <div className="mt-2">
        <h6>{props.category}</h6>
        <h3>
          <Link to={props.link}>{props.title}</Link>
        </h3>
      </div>
    </div>
  )
}
