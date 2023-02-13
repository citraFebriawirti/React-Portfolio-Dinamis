import React from 'react'
import { Link } from "react-router-dom"
import Typical from 'react-typical'

export default function Home(props) {
  return (
    <div>
      <div id=''>
      <div className=" px-5 flex flex-wrap ">
      <aside className="w-full self-center px-5 lg:w-1/2">
        <h1 className="text-4xl text-[#213644]
        font-bold lg:text-6xl md:text-5xl">
        <Typical
        steps={['Hello 👋' , 1000, 'Citra Febriawirti', 500,]}
        loop={Infinity}
        wrapper="p"
        />
        </h1>
        <p className="font-normal text-gray-400 mb-5 leading-relaxed text-xs md:text-base lg:text-xl lg:mt-3 ">
        Hello my name is Citra Febriawirti, I'm a frontend enthusiast and interested in website development using Javascript.
        </p>
        <a href="https://drive.google.com/file/d/1p_Jt0GuWSs9rpzcbBwLgXRInoWFqwn8k/view?usp=sharing" target="_blank"
          className="text-base font-semibold text-white bg-teal-600 py-2 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-150">
          Download CV
        </a>
      </aside>
      <aside className="w-full self-end px-5 my-3 lg:w-1/2 ">
        <div className="mt-9">
          <img
            src="../image/foto citra.png "
            className="max-w-full mx-auto"
            alt="foto Citra"/>
        </div>
      </aside>
      </div>
      </div>
    </div>
  )
}
