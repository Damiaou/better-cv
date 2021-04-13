import React, { useReducer } from "react"
import { motion } from "framer-motion"

import "./animation.css"

const usefull = [
  { id: "st-lo-circle", hovered: false },
  { id: "rennes-circle", hovered: false },
  { id: "suisse-circle", hovered: false },
  { id: "st-brieuc-circle", hovered: false },
]

export function France({ hoveredDispatch, isHovered }) {
  // Move the reducer from here to userreturn experiences function to dispatch ;) to circle AND card
  function handleMouseEnter(e) {
    console.log(e.target)
    console.log("handleMouseEnter elm")
    hoveredDispatch({ type: "hovered", payload: { id: e.target.id } })
  }

  function handleMouseOut(e) {
    console.log("handleMouseOut elm")
    hoveredDispatch({ type: "unhovered", payload: { id: e.target.id } })
  }
  return (
    <div className="flex justify-around">
      {/* <! --- min-x, min-y, width, height---!> */}
      <div className="svg-wrapper">
        <svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
          <polygon
            className="shape"
            points="80,80 200,20 320,80 320,250 200,300 80,250"
            fill="transparent"
          ></polygon>
          <circle
            id="st-lo"
            cx="135"
            cy="60"
            r={isHovered("st-lo") ? 10 : 5}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseOut(e)}
          />
          <line id="from-1-to-2" x1="135" y1="60" x2="135" y2="90" />
          <circle
            id="rennes"
            cx="135"
            cy="90"
            r={isHovered("rennes") ? 10 : 5}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseOut(e)}
          />
          <line id="from-2-to-3" x1="135" y1="90" x2="300" y2="180" />
          <circle
            id="suisse"
            cx="300"
            cy="180"
            r={isHovered("suisse") ? 10 : 5}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseOut(e)}
          />
          <line id="from-3-to-4" x1="300" y1="180" x2="105" y2="80" />
          <circle
            id="st-brieuc"
            cx="105"
            cy="80"
            r={isHovered("st-brieuc") ? 10 : 5}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseOut(e)}
          />
        </svg>
      </div>
    </div>
  )
}
