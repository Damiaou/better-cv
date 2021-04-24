import React from "react"

export function OutLink({ href, children }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="underline text-yellow-600 hover:text-yellow-500"
    >
      {children}
    </a>
  )
}
