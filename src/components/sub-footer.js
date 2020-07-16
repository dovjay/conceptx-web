import React from "react"
import styles from "./footer.module.css"

export default function subFooter(props) {
  return (
    <>
      <div className={`text-center d-flex justify-content-center align-items-center flex-column ${styles.sub_footer}`}>
        <h1 className="font-weight-normal sub-footer-header w-75">
          { props.contact ? "Get in touch." : "Let's make something great together." }
        </h1>
        <p className="mt-3 sub-footer-sub-header w-75">
          Have a project or want to talk? Say hello to <a href="mailto:radi@conceptx.id">radi@conceptx.id</a>
        </p>
      </div>
      <div className="footer-card-container">
        <div className="footer-card">
          <h4 className="font-weight-normal">Careers</h4>
          <p>Want to join conceptX? Happy to hear more about you at <a href="mailto:radi@conceptx.id">radi@conceptx.id</a>.</p>
        </div>
        <div className="footer-card ml-auto">
          <h4 className="font-weight-normal">Blog</h4>
          <p>Read about design, technology, and culture on our insightful page.</p>
        </div>
        <div className="footer-card ml-auto">
          <h4 className="font-weight-normal">Social</h4>
          <p>
            Let's connect. You can find us on <a href="https://instagram.com/conceptx.id">Instagram</a> and <a href="https://facebook.com/conceptx.id">Facebook</a>.
          </p>
        </div>
      </div>
    </>
  )
}