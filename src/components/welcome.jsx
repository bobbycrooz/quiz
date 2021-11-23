import React from "react";
// import Head from "next/head";
 

export const Welcome =  ({ click }) => {
     return (
          <section className='w-screen h-screen flex items-start md:items-center text-white px-2 md:px-0'>
             
               

               <div className='content-wrapper shadow-lg text-center md:text-left  space-y-6 md:ml-24 mt-20 md:mt-0'>
                    <div className='text-wrapper font-lato font-semibold'>
                         <h1 className='text-4xl font-semibold'>
                              Welcome to the quiz,
                              <br />
                              type your name bellow to begin.
                         </h1>
                    </div>

                    <div className='name-field h-14 w-full mx-auto md:mx-0'>
                         <input
                              type='text'
                              id='nick'
                              className='pl-4 text-xl w-full h-full font-joe bg-transparent outline-none text-gray-200'
                              placeholder='Nick'
                         />
                    </div>
                    <button
                         className='border border-white p-1 px-4 capitalize hover:bg-white hover:text-gray-900'
                         onClick={click}>
                         start
                    </button>
               </div>
          </section>
     );
};

export default Welcome