import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skil } from "./Constant/Index"

export default function Skill() {
  useEffect(() => {
    AOS.init(
    );
  }, [])
  return (
    <div>
        <div id="" className="my-10">
          <h1 className='text-center text-2xl font-bold '>Skills</h1>
          <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700" />
        
            <div id="skills" className="container mx-auto px-10 mt-10 w-[80%] ">
            <div id="skills-content" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
             {skil.map((item) => (
              <div className="card relative shadow-xl rounded-lg bg-white h-48 hover:shadow-slate-700" data-tilt data-tilt-glare data-tilt-max-glare="0.8" data-aos="zoom-in-up" data-aos-duration="500" key={item.id}>
                <div className="flex justify-center w-full">
                  <img src={"../image/" + item.img} className="w-[70%] my-8 lg:my-0"/>
                </div>
                <h2 className="text-center font-semibold text-black text-lg lg:text-2xl pb-5">{item.name_skill}</h2>
                 </div>
               ))}
              </div>
            </div>
          </div>
    </div>
  )
}
