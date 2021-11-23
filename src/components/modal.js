import React from 'react'
import { Portal } from "react-portal";
import SyncLoader from "react-spinners/SyncLoader";
const Modal = () => {
      return (
           <Portal>
                <div className=' mod fixed top-0 z-30 w-screen h-screen flex justify-center items-center '>
                     <div className=' spinner p-4 w-60 h-60 flex flex-col justify-center items-center'>
                          <SyncLoader color={"#fff"} loading={true} margin={"10px"} />
                          <p className='text-sm leading-3 my-2 text-white'>
                               <i className='tracking-wide'>fetching result...</i>
                          </p>
                     </div>
                </div>
           </Portal>
      );
}

export default Modal
