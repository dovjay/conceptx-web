import React, { useEffect } from "react"
import anime from "animejs/lib/anime.es"

export default function WelcomeText() {
  const textVariation = [
    "We build fun experiences using cutting edge technologies.",
    "We create lovable products going from vision to launch.",
    "We make memorable sites that grow your business.",
  ]

  useEffect(() => {
    const animateIn = {
      opacity: 1,
      duration: 1000,
      delay: anime.stagger(15),
    }
    const animateOut = {
      opacity: 0,
      delay: 1000,
      duration: 700
    }

    anime.timeline({ loop: true, easing: 'easeInExpo' })
    .add({ targets: '.animated-text-1', ...animateIn })
    .add({ targets: '.animated-text-1', ...animateOut })
    .add({ targets: '.animated-text-2', ...animateIn })
    .add({ targets: '.animated-text-2', ...animateOut })
    .add({ targets: '.animated-text-3', ...animateIn })
    .add({ targets: '.animated-text-3', ...animateOut })
  }, [])

  return (
    <div className="text-center" style={{ marginTop: 200 }}>
      <h6>HELLO THERE</h6>
      <div className="d-flex w-100 justify-content-center align-items-center mt-5">
        <h1 className="position-absolute w-50">
          {[...textVariation[0]].map((letter, index) => (
            <span style={{ opacity: 0 }} className="animated-text-1" key={index}>{letter}</span>
          ))}
        </h1>
        <h1 className="position-absolute w-50">
          {[...textVariation[1]].map((letter, index) => (
            <span style={{ opacity: 0 }} className="animated-text-2" key={index}>{letter}</span>
          ))}
        </h1>
        <h1 className="position-absolute w-50">
          {[...textVariation[2]].map((letter, index) => (
            <span style={{ opacity: 0 }} className="animated-text-3" key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  )
}