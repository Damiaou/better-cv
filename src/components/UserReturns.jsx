import React, { useReducer } from "react"
import { France } from "./Animation"
import { BlankCanvas } from "./BlankCanvas"
import Iut from "./Iut"
import CardJobs from "./Jobs/CardJobs"
import { StLo, Rennes, Suisse, StBrieuc } from "./Jobs/Jobs"
import { Wall } from "./Hobbies"
import { StaticImage } from "gatsby-plugin-image"
import { OutLink } from "./OutLink"

export function Help() {
  return (
    <div>
      <p>Hi, do you need help ?</p>
      <p>You can type</p>
      <pre className="text-yellow-200"> help</pre>
      <pre className="text-yellow-200"> clear</pre>
      <pre className="text-yellow-200"> hobbies</pre>
      <pre className="text-yellow-200"> experiences</pre>
      <pre className="text-yellow-200"> schools</pre>
      <pre className="text-yellow-200"> skills</pre>
      <pre className="text-yellow-200"> me</pre>
      <pre className="text-yellow-200"> github</pre>
      <pre className="text-yellow-200"> contact</pre>
      <pre className="text-yellow-200"> projects</pre>
      <pre className="text-yellow-200"> status</pre>
      <p>to get to know me more</p>
    </div>
  )
}

export function Github() {
  return (
    <p>
      You can find the source of this{" "}
      <OutLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Damiaou/better-cv"
        className="underline text-yellow-300 hover:text-yellow-600"
      >
        here
      </OutLink>
    </p>
  )
}

export function UnknownCommand({ command }) {
  return (
    <p className="text-red-400">
      Unknown command `{command}`, need some{" "}
      <span className="text-red-300">help</span> ?
    </p>
  )
}

export function Ascii({ children }) {
  return <pre>{children}</pre>
}

export function Userhistoryline({ command }) {
  console.log("Saving new history line for ", command)
  return <p className="text-yellow-200">{command}</p>
}

export function Hobbies() {
  return (
    <BlankCanvas>
      <Wall />
    </BlankCanvas>
  )
}

function experiencesReducer(state, action) {
  switch (action.type) {
    case "hovered": {
      // remove line with my elm
      let newState = state.filter(elm => elm.id !== action.payload.id)
      return [...newState, { id: action.payload.id, hovered: true }]
    }
    case "unhovered": {
      // remove line with my elm
      let newState = state.filter(elm => elm.id !== action.payload.id)
      return [...newState, { id: action.payload.id, hovered: false }]
    }

    default: {
      console.error(`Type not handled`, action)
    }
  }
}
export function Experiences() {
  // TODO Bring delay bakc on card and sync hover between places on the map and the cards
  // Might be good to use framer for the SVG part
  const [state, hoveredDispatch] = useReducer(experiencesReducer, [])

  const isHovered = id => {
    // Need to check if is hovered, if yes return true, if not or not found return false
    console.log("state on hover", state)
    console.log(
      "isHovered ?",
      state ? !!state.find(elm => elm.id === id && elm.hovered) : false
    )
    return state ? !!state.find(elm => elm.id === id && elm.hovered) : false
  }

  return (
    <BlankCanvas>
      <div className="w-full">
        <France hoveredDispatch={hoveredDispatch} isHovered={isHovered} />
        <CardJobs>
          <StLo hoveredDispatch={hoveredDispatch} isHovered={isHovered} />
          <Rennes hoveredDispatch={hoveredDispatch} isHovered={isHovered} />
          <Suisse hoveredDispatch={hoveredDispatch} isHovered={isHovered} />
          <StBrieuc hoveredDispatch={hoveredDispatch} isHovered={isHovered} />
        </CardJobs>
      </div>
    </BlankCanvas>
  )
}
export function Schools() {
  return (
    <>
      <Iut />
    </>
  )
}

export function Skills() {
  return (
    <div>
      <p>Well, I am getting better everyday at things like </p>
      <ul className="pl-4">
        <li>Solving users problems</li>
        <li>
          Using React to build nice applications powered up by Next or Gatsby
        </li>
        <li>
          Having fun with PHP, NodeJS and Python to create efficient backend for
          apps
        </li>
        <li>
          Messing around with Git, Docker and CLI tools from other great
          developers
        </li>
      </ul>
    </div>
  )
}
export function Ls() {
  return <p>Gatsby & React ¯\_(ツ)_/¯</p>
}

export function Me() {
  return <StaticImage src="../images/my-face.jpg" />
}

export function Status() {
  return (
    <p>
      I am currently looking for front end developer opportunities, you can{" "}
      <OutLink href="mailto:damsauvagere@gmail.com">contact me</OutLink>
    </p>
  )
}

export function Contact() {
  return (
    <span>
      <OutLink href="mailto:damsauvagere@gmail.com">Contact me</OutLink>
    </span>
  )
}

export function Projects() {
  return (
    <div>
      <h4>Here are some of my personal projects : </h4>
      <ul>
        <li className="ml-4">
          A <OutLink href="https://tasks.damien.link">task manager</OutLink>{" "}
          (wip)
        </li>
        <li className="ml-4">
          My <OutLink href="https://blog.damien.link">blog</OutLink>
        </li>
        <li className="ml-4">
          An app that tells you what kind of animal you were in a{" "}
          <OutLink href="https://past.damien.link">past live</OutLink>
        </li>
        <li className="ml-4">
          I've always loved{" "}
          <OutLink href="https://liveit.damien.link/">this quote</OutLink>
        </li>
      </ul>
    </div>
  )
}
