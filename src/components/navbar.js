import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es"

export default function Navbar() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)

  const [mobileNav, setMobileNav] = useState(false)

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

  useEffect(() => {
    if (mobileNav) {
      anime({
        targets: ".nav-mobile-activated",
        translateX: "0"
      })
    } else {
      anime({
        targets: ".nav-mobile-activated",
        translateX: "100vw"
      })
    }
  }, [mobileNav])

  return (
    <>
      <div className="p-5 fixed-top nav-bar">
        <div className="d-flex">
          <div className="h4">
            <Link style={{ textDecoration: 'none' }} to="/">ConceptX</Link>
          </div>

          <div 
            className="ml-auto nav-menu-mobile" 
            onClick={() => setMobileNav(true)} 
            onKeyDown={() => setMobileNav(true)} 
            role="button"
            tabIndex={0}
          >
            Menu
          </div>
          
          <div className="ml-auto nav-menu-desktop">
            View <Link activeStyle={{ textDecoration: 'none' }} to="/">our work</Link>, 
            learn <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/about">about us</Link> or&nbsp;
            <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/contact">reach out</Link>.
          </div>
        </div>
      </div>
      <div className="nav-mobile-activated p-4">
        <div 
          className="d-flex" 
          onClick={() => setMobileNav(false)} 
          onKeyDown={() => setMobileNav(false)}
          role="button"
          tabIndex={0}
        >
          <div className="ml-auto h2">X</div>
        </div>
        <div style={{ marginTop: 100, fontSize: '2em' }}>
          <div>View <Link activeStyle={{ textDecoration: 'none' }} to="/">our work</Link>,</div>
          <div>learn more <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/about">about us</Link></div>
          <div> or simply <Link activeStyle={{ textDecoration: 'none' }} partiallyActive={true} to="/contact">reach out</Link>.</div>
        </div>
      </div>
    </>
  )
}