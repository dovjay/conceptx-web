import React from "react"

export default function subHeader(props) {
  return <h6 style={{ fontSize: '0.75em' }} className="font-weight-lighter text-secondary">
    {props.content}
  </h6>
}