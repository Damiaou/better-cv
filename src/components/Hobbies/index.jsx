import React from "react"
import "./hobbies.css"
export function Hobbies() {
  return (
    <div className="house flex w-screen h-screen bg-gray-100 justify-center items-center">
      <div className="relative good-wall w-5/6 bg-gradient-to-tr from-yellow-200 to-red-200 h-5/6 grid grid-cols-3">
        <div className="surfboard self-end static place-self-center h-full">
          {/* <!--       surfboard --> */}
        </div>
        <div className="w-full h-full grid grid-cols-2 grid-rows-8 static justify-items-center">
          {/* <!--       climbing holds --> */}
          <div className="holds" id="hold-0"></div>
          <div></div>
          <div></div>
          <div className="holds" id="hold-1"></div>
          <div className="holds" id="hold-2"></div>
          <div></div>
          <div></div>
          <div className="holds" id="hold-3"></div>
          <div className="holds" id="hold-4"></div>
          <div></div>
          <div></div>
          <div className="holds" id="hold-5"></div>
          <div className="holds" id="hold-6"></div>
          <div></div>
          <div></div>
          <div className="holds" id="hold-7"></div>
        </div>
        <div className=" self-end w-full flex justify-center">
          <div className="w-5/6 ">
            {/* <!--   books --> */}
            <div className="place-self-center grid grid-rows-4 grid-flow-row gap-y-4 border-4 border-gray-400 bg-gray-400">
              <div className="w-full h-24 bg-gray-100 shadow-inner gap-x-1 grid grid-cols-10 pt-2">
                <div className="h-full w-full col-span-2 bg-red-500"></div>
                <div className="h-full w-full bg-blue-300"></div>
                <div className="h-full w-full bg-yellow-500"></div>
                <div className="h-full w-full bg-blue-500"></div>
                <div className="h-full w-full col-span-2 bg-green-800"></div>
                <div className="h-full w-full bg-blue-600"></div>
                <div className="h-full w-full bg-yellow-300"></div>
                <div className="h-full w-full bg-blue-500"></div>
              </div>
              <div className="w-full h-24 bg-gray-100 shadow-inner gap-x-1 grid grid-cols-10 pt-2">
                <div className="h-full w-full bg-yellow-300"></div>
                <div className="h-full w-full bg-yellow-500"></div>
                <div className="h-full w-full col-span-2 bg-blue-500"></div>
                <div className="h-full w-full bg-green-500"></div>
                <div className="h-full w-full bg-blue-600"></div>
                <div className="h-full w-full bg-yellow-300"></div>
                <div className="h-full w-full col-span-2 bg-purple-800"></div>
                <div className="h-full w-full bg-blue-500"></div>
              </div>
              <div className="w-full h-24 bg-gray-100 shadow-inner gap-x-1 grid grid-cols-10 pt-2">
                <div className="h-full w-full bg-blue-300"></div>
                <div className="h-full w-full bg-indigo-400"></div>
                <div className="h-full w-full bg-yellow-500"></div>
                <div className="h-full w-full bg-blue-500"></div>
                <div className="h-full w-full col-span-2 bg-pink-300"></div>
                <div className="h-full w-full bg-blue-600"></div>
                <div className="h-full w-full bg-red-300"></div>
                <div className="h-full w-full bg-indigo-500"></div>
                <div className="h-full w-full bg-yellow-500"></div>
              </div>
              <div className="w-full h-24 bg-gray-100 shadow-inner gap-x-1 grid grid-cols-10 pt-2">
                <div className="h-full w-full bg-blue-300"></div>
                <div className="h-full w-full col-span-2 bg-red-900"></div>
                <div className="h-full w-full bg-indigo-400"></div>
                <div className="h-full w-full bg-yellow-500"></div>
                <div className="h-full w-full bg-indigo-500"></div>
                <div className="h-full w-full bg-blue-600"></div>
                <div className="h-full w-full bg-red-600"></div>
                <div className="h-full w-full bg-green-500"></div>
                <div className="h-full w-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
