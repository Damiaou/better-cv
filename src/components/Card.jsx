import React from "react"

export default function Card({
  title,
  subtitle,
  content,
  id,
  hoveredDispatch,
}) {
  function handleMouseEnter() {
    console.log("handleMouseEnter elm", id)
    hoveredDispatch({ type: "hovered", payload: { id: id } })
  }

  function handleMouseOut() {
    console.log("handleMouseOut elm", id)
    hoveredDispatch({ type: "unhovered", payload: { id: id } })
  }
  return (
    <div
      className="font-sans"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseOut()}
    >
      <article className="w-56 h-80 bg-blue-400 rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white text-center rounded-t-lg py-2">
          <h3 className="font-semibold text-2xl">{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className="p-4 text-gray-100">
          {content.split("\n").map(p => {
            return <p>{p}</p>
          })}
        </div>
      </article>
    </div>
  )
}
