import React from 'react'

export default function Education(props) {
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
                  <div className="flex flex-col items-center ">
                    <div className="flex items-center justify-start w-full mx-auto ">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="-z-10 p-4 bg-white rounded shadow-lg">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 sm:text-center dark:text-gray-500">2020 - Now</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Metamedia</h3>
                        </div>
                      </div>
                    </div>
                    <div className="absolute  items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-600 border-2  rounded-full left-1/2 sm:translate-y-0 hidden lg:block ">
                    </div>
                  </div>
                </div>

                {/* <!-- Right section --> */}
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-end w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <div className="p-4 bg-white rounded shadow-lg ">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2020</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMA Negeri 9 Padang</h3>
                        </div>
                      </div>
                    </div>
                    <div className="absolute items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-600 border-2  rounded-full left-1/2 sm:translate-y-0 hidden lg:block ">
                    </div>
                  </div>
                </div>

                {/* <!-- Left section --> */}
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="p-4 bg-white rounded shadow-lg ">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2014 - 2017</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMP Negeri 31 Padang</h3>
                        </div>
                      </div>
                    </div>
                    <div className="absolute items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-600 border-2  rounded-full left-1/2 sm:translate-y-0 hidden lg:block">
                    </div>
                  </div>
                </div>

                {/* <!-- Right section --> */}
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-end w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="p-4 bg-white rounded shadow-lg ">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2007 - 2014</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SD Negeri 03 Kampung Dalam
</h3>
                        </div>
                      </div>
                    </div>
                    <div className="absolute items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-teal-600 border-2  rounded-full left-1/2 sm:translate-y-0 hidden lg:block">
                    </div>
                  </div>
              </div>
              
              </div>
            </div>
  </div>




    
    </div>
    </div>
  )
}
