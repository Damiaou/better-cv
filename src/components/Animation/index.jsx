import React from "react"

import "./animation.css"

export function France() {
  return (
    <div>
      {/* <! --- min-x, min-y, width, height---!> */}
      <div class="svg-wrapper">
        <svg height="200" width="400" xmlns="http://www.w3.org/2000/svg">
          <polygon
            class="shape"
            points="80,80 200,20 320,80 260,180 140,180"
            fill="transparent"
          ></polygon>
          <circle id="st-lo-circle" cx="135" cy="65" r="5" />
          <line id="from-1-to-2" x1="135" y1="65" x2="125" y2="82" />
          <circle id="rennes-circle" cx="125" cy="82" r="5" />
          <line id="from-2-to-3" x1="125" y1="82" x2="275" y2="125" />
          <circle id="suisse-circle" cx="275" cy="125" r="5" />
          <line id="from-3-to-4" x1="275" y1="125" x2="105" y2="82" />
          <circle id="st-brieuc-circle" cx="105" cy="82" r="5" />
        </svg>
      </div>
    </div>
  )
}
