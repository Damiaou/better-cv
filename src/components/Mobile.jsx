import React from "react"
import CV from "../files/Damien_CV_FINAL.pdf"
import { OutLink } from "./OutLink"

export default function Mobile() {
  return (
    <div className="md:hidden">
      <h2>
        Hello ! Unfortunately this website is not (yet) optimized for mobile
      </h2>
      <p>
        Here's <OutLink href={CV}>my resume</OutLink>
      </p>
    </div>
  )
}
