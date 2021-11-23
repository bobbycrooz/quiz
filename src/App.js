import React from "react";
// import './App.css';
// import Head from "next/head";
import Quest from "./components/question";
import Welcome from "./components/welcome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import styled from 'styled-components'
// import img from '../public/assets/qq.jpg'

export default function Home() {
     const [start, setStart] = React.useState(false);
     const [data, setData] = React.useState(false);
     // const [toastText, setToastText] = React.useState('');
     // console.log(data);

     React.useEffect(  () => {
          const data =  getAllData();
          setData(data);
     }, []);

     async function getAllData() {
          const res = await fetch(`https://bobbydev-server.herokuapp.com/question`);
          const data = await res.json();

          if (!data) {
               return {
                    notFound: true,
               };
          }

          return data
     }

     const notify = (toastText) =>
          toast.warn(toastText, {
               position: "top-center",
               autoClose: 3000,
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });

     const handleStart = async  () => {
          // save username to user object
          const userInput = document.getElementById("nick");
          if (userInput.value === "") {
               notify("nickname is important");
          } else {
               let aaa = { name: userInput.value };

               if (!localStorage.getItem("user")) {
                    localStorage.setItem("user", JSON.stringify(aaa));
                    const qData = await getAllData();
                    setData(qData);
                    
                    setStart((prev) => !prev);
               } else {
                    notify("quiz already taken, click again to start");
                    localStorage.clear();
               }
          }
     };

     // const styles = {
     //      backgroundImage: "url(" + `${require("../public/qq.jpg")}` + ")",
     // };

     return (
          <div className='bg-img2 flex flex-col items-center justify-center w-screen h-screen'>
               <main className='app'>
                    <ToastContainer theme='dark' />
                    {start ? <Quest click={handleStart} data={data} /> : <Welcome click={handleStart} />}
               </main>
          </div>
     );
}
