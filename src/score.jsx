/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Head from "next/head";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../Context";
import Modal from './components/modal'


export default ({ click, data }) => {
     const navigate = useNavigate();
     // const value = useAppContext();
     const [result, setResult] = React.useState();
     const [loading, setLoading] = React.useState(true);


     async function getResult(params) {
          // get postdata from localStorage
          const response = await fetch(`https://bobbydev-server.herokuapp.com/question`, {
               method: "POST",
               mode: "cors",
               headers: {
                    "Content-Type": "application/json",
               },

               body: localStorage.getItem("postData"),
          });

          return await response.json();
     }

     React.useEffect(async () => {
          const result = await getResult();
          // console.log(result);
          setResult({ ...result });
          setLoading(false)
     }, []);

     return (
          <section className='w-screen h-auto  md:h-screen  bg-[#ffffff] bg-img'>
         {loading && <Modal/>}
               <main className='w-screen md:h-screen fade flex flex-col md:flex-row border-red-700 items-center text-white justify-center py-8 p-4'>
                    <div className=' '>
                         <div className='modal modal--congratulations '>
                              <div className='modal-top '>
                                   <img
                                        className='modal-icon u-imgResponsive'
                                        src='https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png'
                                        alt='Trophy'
                                   />

                                   <div className='modal-header text-[#eff8fd] md:text-6xl text-xl font-medium font-pac'>
                                        Congratulations
                                   </div>
                                   <h1 className='user text-xl w-full text-center  my-1'>{result?.name}</h1>
                                   <div className='modal-subheader text-gray-200'>your score: {result?.score}</div>
                                   <div className='modal-bottom'>
                                        <button
                                             onClick={() => navigate("/")}
                                             className='border border-white p-1 px-4  capitalize hover:bg-white hover:text-gray-900 mx-auto'>
                                             Back
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='md:w-11'></div>

                    <div className='content-wrapper content-wrapper-score shadow-lg text-left border  md:ml-24'>
                         <div className='text-wrapper  font-'>
                              <p className='text-sm text-gray-200 my-2'>where you rank</p>
                              <h1 className='text-4xl font-semibold'>Leader board</h1>
                         </div>

                         <div className='name-field name-field-score p-1 py-3 w-full flex justify-between rounded'>
                              <p className='name text-xl'>Name</p>
                              <p className='name text-xl'>Score</p>
                         </div>
                         <div className='w-full mt-2 scroll-bar overflow-y-scroll h-80'>
                              {result?.leaderboard.map((item, index) => (
                                   <div
                                        key={`${index}-dhiaeh`}
                                        className='name-field  p-1 py-3 w-full flex justify-between rounded'>
                                        <p className='name text-xl'>{item.name}</p>
                                        <p className='name text-xl'>{item.score}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </main>
          </section>
     );
};
