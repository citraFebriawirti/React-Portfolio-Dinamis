import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {
  useEffect(() => {
    AOS.init(
    
    );
  }, [])
  return (
    <div >
      <div id='' >
        <h1 className='text-center text-2xl font-bold'>About</h1>
        <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700  -z-10" />
      <div className=" px-5 flex flex-wrap ">
      <aside className="w-full self-end px-5 my-3 lg:w-1/2 " data-aos="fade-right"  data-aos-duration="1000">
        <div className="mt-9" >
          <img
            src="../image/about.svg "
            className="max-w-full mx-auto hidden lg:block "
            alt="foto Citra"/>
        </div>
        </aside>
        <aside className="w-full self-center px-5 lg:w-1/2"  data-aos="fade-left" data-aos-duration="1000">
        <h1 className="text-4xl text-[#213644]
        font-bold lg:text-6xl md:text-5xl">
        </h1>
        <p className="font-normal text-gray-400 mb-16 text-xs flex justify-between md:text-base lg:text-xl lg:mt-3 sm:mt-6">
        I am currently in the 6th semester studying at Universitas Metamedia. My major is Information System. I
        am interested in website development, especially in the field of Frontend development using Javascript as
        the main programming language. I take a part in student organization to improve my communication,
        teamwork, critical thinking skills. I love to share my knowledge with others and hope to enhance my idea as
        well as to create chemistry with my fellows.
        </p>
      </aside>
      </div>
      </div>
    </div>
  )
}
