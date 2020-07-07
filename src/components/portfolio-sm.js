import React from "react"
import { Link } from "gatsby"
import styles from "../components/portfolio.module.css"

export default function PortfolioSM(props) {
  return (
    <div className={`border bg-dark ${styles.portfolio_sm} ${props.class}`}>
      <div style={{ width: "100%", height: "100%" }}></div>
      <div className="mt-3">
        <h6>{props.category}</h6>
        <h3>
          <Link to={props.link}>{props.title}</Link>
        </h3>
      </div>
    </div>
  )
}