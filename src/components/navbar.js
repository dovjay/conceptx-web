import React, { useState, useEffect, useRef } from "react"
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
      <div className="d-flex px-5">
        <div className="h4">ConceptX</div>
        <div className="ml-auto">
          View our work, learn about us or reach out.
        </div>
      </div>
    </div>
  )
}