import React from "react"

export default function Contact() {
  return (
    <>
      <div className="text-center" style={{ marginTop: 200 }}>
        <h1>Let's make something great together.</h1>
        <p>Have a project or want to talk? Say hello to radi@conceptx.id</p>
      </div>
      <div style={{ marginTop: 200 }}>
        <div className="d-flex">
          <div className="col-4">
            <h4>Careers</h4>
            <p>Want to join conceptX? Happy to hear more about you at radi@conceptx.id.</p>
          </div>
          <div className="col-4 mx-auto">
          <h4>Blog</h4>
          <p>Read about design, technology, and culture on our insightful page.</p>
          </div>
          <div className="col-4">
          <h4>Social</h4>
          <p>Let's connect. You can find us on Instagram.</p>
          </div>
        </div>
      </div>
    </>
  )
}