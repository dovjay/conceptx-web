import React from "react"

export default function subFooter(props) {
  return (
    <>
      <div className="text-center d-flex justify-content-center align-items-center flex-column" style={{ marginTop: 400 }}>
        <h1 style={{ fontSize: '6.5vw' }} className="font-weight-normal w-75">
          { props.contact ? "Get in touch." : "Let's make something great together." }
        </h1>
        <p style={{ fontSize: '1.5em' }} className="mt-3">
          Have a project or want to talk? Say hello to <a href="mailto:radi@conceptx.id">radi@conceptx.id</a>
        </p>
      </div>
      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <div style={{ width: "25vw" }}>
            <h4>Careers</h4>
            <p>Want to join conceptX? Happy to hear more about you at <a href="mailto:radi@conceptx.id">radi@conceptx.id</a>.</p>
          </div>
          <div style={{ width: "25vw" }} className="ml-auto">
            <h4>Blog</h4>
            <p>Read about design, technology, and culture on our insightful page.</p>
          </div>
          <div style={{ width: "25vw" }} className="ml-auto">
            <h4>Social</h4>
            <p>
              Let's connect. You can find us on <a href="https://instagram.com/conceptx.id">Instagram</a> and <a href="https://facebook.com/conceptx.id">Facebook</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}