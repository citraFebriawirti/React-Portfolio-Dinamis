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
            <div className="shadow-lg  mb-10 group container rounded-md bg-teal-300  w-48 flex justify-center items-center mx-auto content-div lg:w-96" data-aos="zoom-in" data-aos-duration="1000" key={item.id}>
              <div>
                <div className="py-8 px-7 bg-white rounded-b-md fd-cl group-hover:opacity-25 lg:py-8 lg:px-4">
                  <img src={"../image/" + item.image_projek} />
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">{item.span1_projek}</span>
                  <span className="block text-gray-600 text-sm">{item.span2_projek}</span>
                </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                <span className="text-sm font-bold  tracking-wider leading-relaxed font-sans text-teal-800">{item.hover_span_projek}</span>
                <div className="pt-8 text-center">
                  <a href={item.link_projek} target="_blank" className="text-center rounded-lg p-2 bg-teal-600  text-gray-700 font-bold text-lg"> View</a>
                </div>
              </div>
           </div>
         ))}
          </div>
      </div>
    </div>
  )
}
