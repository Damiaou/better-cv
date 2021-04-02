import React from "react"

export default function Background({ children }) {
  return (
    <div className="p-10 bg-gray-800 font-mono text-yellow-400 h-full flex-1">
      {children}
    </div>
  )
}
