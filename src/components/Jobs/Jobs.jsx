import React from "react"
import Card from "../Card"
import { motion } from "framer-motion"

export function StLo({ hoveredDispatch, isHovered }) {
  const elmIsHovered = isHovered("st-lo")

  let animateProperties = {
    scale: elmIsHovered ? 1.2 : 1,
    opacity: 1,
  }

  let content =
    "Main classes : web development with various languages like HTML, CSS, PHP, Java, Javascript.\n\
  Secondary : communication and design classes."
  return (
    <>
      <motion.div
        animate={animateProperties}
        initial={{
          opacity: 0,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Card
          title="Saint-Lô"
          subtitle="CS degree in Saint-Lô Institute of Technology"
          content={content}
          hoveredDispatch={hoveredDispatch}
          id="st-lo"
        />
      </motion.div>
    </>
  )
}

export function Rennes({ hoveredDispatch, isHovered }) {
  let content =
    "Creating a web messaging app with another trainee for a client.\n\
    It was similar to an email client with the ability to send TODOs"
  const elmIsHovered = isHovered("rennes")
  console.log("Rennes")
  console.log(elmIsHovered)
  let animateProperties = {
    scale: elmIsHovered ? 1.2 : 1,
    opacity: 1,
  }
  return (
    <>
      <motion.div
        animate={animateProperties}
        initial={{
          opacity: 0,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Card
          title="Rennes"
          subtitle="Web developer trainee"
          content={content}
          hoveredDispatch={hoveredDispatch}
          id="rennes"
        />
      </motion.div>
    </>
  )
}

export function Suisse({ hoveredDispatch, isHovered }) {
  let content =
    "Working in a team to build features for a passport managment system.\n\n\n\
    Building a SaaS mode cash register software for drycleaners with a in-home framework."
  const elmIsHovered = isHovered("suisse")
  let animateProperties = {
    scale: elmIsHovered ? 1.2 : 1,
    opacity: 1,
  }
  return (
    <>
      <motion.div
        animate={animateProperties}
        initial={{
          opacity: 0,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Card
          title="Geneva - CH"
          subtitle="Python & Javascript developer"
          content={content}
          hoveredDispatch={hoveredDispatch}
          id="suisse"
        />
      </motion.div>
    </>
  )
}

export function StBrieuc({ hoveredDispatch, isHovered }) {
  let content =
    "Working on corporate ERP, adding features and connecting it to business softwares.\n\
    Maintaining the application infrastructure and our CI/CD workflow"
  const elmIsHovered = isHovered("st-brieuc")
  let animateProperties = {
    scale: elmIsHovered ? 1.2 : 1,
    opacity: 1,
  }
  return (
    <>
      <motion.div
        animate={animateProperties}
        initial={{
          opacity: 0,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Card
          title="Saint-Brieuc"
          subtitle="Web developer"
          content={content}
          hoveredDispatch={hoveredDispatch}
          id="st-brieuc"
        />
      </motion.div>
    </>
  )
}
