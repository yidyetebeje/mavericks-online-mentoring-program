import React from 'react'


const CourseCard = ({ title, description}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 colo mt-0">
        <div className="bg-cyan-600 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 m-0">
        <div className='text-xl sm: text-lg text-center text-gray-50'>{title} </div>
          <div className="flex items-center p-4">
          
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-100">{description}</h3>
            </div>
          </div>
                      <button className="mt-2 ml-32 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-cyan-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Enroll Now
            </span>
          </button>
        </div>
      </div>
  
    )
}


export default CourseCard

// <div className="w-1/4 p-4 mx-4 bg-cyan-300 transform hover:scale-110 rounded-lg">
//             <div className="flex items-center">
//             <div >
//                 <img className="w-12 h-12 rounded-full mr-4" alt='hello' src = {imgUrl}></img>
//             </div>
//             <div>
//                 <h2 className="text-lg font-medium">{title}</h2>
//                 <p className="text-gray-600 text-sm">{description}</p>
//             </div>
            
//             </div>
//             <button className="mt-2 ml-32 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-cyan-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 Enroll Now
//             </span>
//           </button>
//         </div>