import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projek } from "./Constant/Index";

export default function Project() {
  useEffect(() => {
    AOS.init(
    
    );
  }, [])
  return (
    <div>
      <div id='' className="my-10">
          <h1 className='text-center text-2xl font-bold '>Project</h1>
          <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700" />
          <div className="py-4 mx-32 grid grid-cols-1  lg:grid-cols-2 ">
          {projek.map((item) => (
            <div className="shadow-lg  mb-10 group container rounded-md bg-white  max-w-lg flex justify-center items-center mx-auto content-div lg:max-w-md" data-aos="zoom-in" data-aos-duration="1000" key={item.id}>
              <div>
                <div className="py-8 px-2 bg-white rounded-b-md fd-cl group-hover:opacity-25 lg:py-8 lg:px-5">
                  <img src={"../image/" + item.image_projek} />
                  <span className="block  text-gray-800 font-bold tracking-wide text-sm text-center lg:text-start lg:text-lg">{item.span1_projek}</span>
                  <span className="block text-gray-600 text-[10px] text-justify lg:text-sm">{item.span2_projek}</span>
                </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                <span className="text-[10px] font-bold  tracking-wider leading-relaxed font-sans text-teal-800 lg:text-sm">{item.hover_span_projek}</span>
                <div className="pt-8 text-center">
                  <a href={item.link_projek} target="_blank" className="text-center rounded-lg p-1 bg-teal-600  text-gray-700 font-bold text-sm lg:p-2 lg:text-lg"> View</a>
                </div>
              </div>
           </div>
         ))}
          </div>
      </div>
    </div>
  )
}
