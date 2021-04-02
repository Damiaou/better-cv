import React from "react"
import { France } from "./Animation"
import { BlankCanvas } from "./BlankCanvas"
import Iut from "./Iut"

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
      <pre className="text-yellow-200"> interests</pre>
      <pre className="text-yellow-200"> skills</pre>
      <p>to get to know me more</p>
    </div>
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
  return <p>hobbies</p>
}
export function Experiences() {
  return (
    <BlankCanvas>
      <France />
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
export function Interests() {
  return <p>interests</p>
}
export function Skills() {
  return (
    <div>
      <p>Well, I'm getting better everyday at things like </p>
      <ul className="pl-4">
        <li>Solving users problems</li>
        <li>
          Using React to build nice applications (like this one) powered up with
          Next or Gatsby
        </li>
        <li>
          Having fun PHP, NodeJS and Python to create efficient backend for apps
        </li>
        <li>
          Messing around with Git, Docker and CLI tools from lovely developers
        </li>
      </ul>
    </div>
  )
}
export function Ls() {
  return <p>Gatsby & React ¯\_(ツ)_/¯</p>
}
