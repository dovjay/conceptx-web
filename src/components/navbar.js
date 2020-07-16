import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es"

export default function Navbar() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false)
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true)
      }

      prevScrollY.current = currentScrollY

      if (goingUp) {
        anime({
          targets: '.nav-bar',
          translateY: '0px',
          easing:	'easeOutCirc'
        })
      } else {
        anime({
          targets: '.nav-bar',
          translateY: '-100px',
          easing: 'easeOutCirc'
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [goingUp])

  return (
    <div className="p-5 fixed-top nav-bar">
      <div className="d-flex">
        <div className="h4">
          <Link style={{ textDecoration: 'none' }} to="/">ConceptX</Link>
        </div>

        <div className="ml-auto nav-menu-mobile">
          Menu
        </div>
        <div className="ml-auto nav-menu-desktop">
          View <Link activeStyle={{ textDecoration: 'none' }} to="/">our work</Link>, 
          learn <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/about">about us</Link> or&nbsp;
          <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/contact">reach out</Link>.
        </div>
      </div>
    </div>
  )
}