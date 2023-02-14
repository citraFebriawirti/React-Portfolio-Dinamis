import React from 'react'
import { Edu } from './Constant/Index'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
  useEffect(() => {
    AOS.init(
    );
  }, [])
  return (
    <div>
    <div id=''>
          <h1 className='text-center text-2xl font-bold'>Education</h1>
          <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700 " />
          <div className="w-full mx-auto lg:max-w-4xl">
            <div className="relative">
              {/* <!-- Vertical middle line--> */}
              <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-teal-300 lg:block left-1/2 -z-0"></div>
              <div className=" mt-20">
                {/* <!-- Left section --> */}
                <div>
                {Edu.map((item) => (
                  <div className="flex flex-col items-center ">
                    <div className={"flex items-center w-full mx-auto " + (item.id % 2 == 0 ? "justify-end " :" justify-start")}   >
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="-z-10 p-4 bg-white rounded shadow-lg ml-7" data-aos={item.id % 2 == 0 ? "zoom-in-right" : "zoom-in-left"}>
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 sm:text-center dark:text-gray-500">{item.time_edu}</time>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.place_edu}</h3>
                        </div>
                      </div>
                      <div className="absolute  items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-600 border-2  rounded-full left-1/2 sm:translate-y-0 hidden lg:block "></div>
                    </div>
                  </div>
                ))}
                </div>

              </div>
            </div>
  </div>
    </div>
    </div>
  )
}
