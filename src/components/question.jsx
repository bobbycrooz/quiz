/* eslint-disable no-loop-func */
import React from "react";
import { useNavigate } from "react-router-dom";

 
 
 
 
 
                    
export default function Home({ click ,data }) {
     const [currentQuestion, setCurrentQuestion] = React.useState(0);
     const [selectedOptions, setSelectedOptions] = React.useState([]);
     // const [score, setScore] = React.useState(0);
     // const [showScore, setShowScore] = React.useState(false);
     const navigate = useNavigate();

     // const handlePrevious = () => {
     //      const prevQues = currentQuestion - 1;
     //      prevQues >= 0 && setCurrentQuestion(prevQues);
     // };

     const handleNext = () => {
          const nextQues = currentQuestion + 1;
          nextQues < data.length && setCurrentQuestion(nextQues);
     };

     const handleSubmitButton = () => {
          let newScore = 0;
          for (let i = 0; i < data.length; i++) {
               data[i].answerOptions.map(
                    (answer) =>
                         answer.isCorrect && answer.answer === selectedOptions[i]?.answerByUser && (newScore += 1)
               );
          }
          // setScore(newScore);
          // get user from localStorage
          const taker = JSON.parse(localStorage.getItem('user'))
         let  userAnswers = {
               name: taker.name,
               answer: selectedOptions
          };
          
          localStorage.setItem('postData', JSON.stringify(userAnswers))
          navigate("/score");
          
          
     };

     const handleAnswerOption = (answer) => {
          setSelectedOptions([(selectedOptions[currentQuestion] = { answer: answer })]);

          setSelectedOptions([...selectedOptions]);
     };

     return (
          <div className=' flex flex-col items-center justify-center w-screen h-screen  px-3  md:px-28'>
            

               <React.Fragment>
                    <div className='flex flex-col items-start w-full    md:w-2/3 '>
                         <h4 className='mt-10 md:text-xl text-white'>
                              Question {currentQuestion + 1} of {data.length}
                         </h4>
                         {/**/}

                         <div className='question-cont md:mt-4 text-2xl text-white w-[90%]  md:w-full py-6'>
                              {data[currentQuestion].question}
                         </div>

                         {/**/}
                         <div className='mt-4 text-2xl text-white  w-full'>
                              <div className='grid gap-4 grid-cols-2  w-full '>
                                   {data[currentQuestion].answerOptions.map((answer, index) => (
                                        <div
                                             type='radio'
                                             name={answer.answer}
                                             value={answer.answer}
                                             onChange={(e) => handleAnswerOption(answer.answer)}
                                            
                                             key={index}
                                             className='option-container flex items-center w-full py-2 md:py-4 pl-1 md:pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-sm hover:shadow-xl text-lg md:text-xl'
                                             onClick={(e) => handleAnswerOption(answer.answer)}>
                                             <input
                                                  type='radio'
                                                  name={answer.answer}
                                                  value={answer.answer}
                                                  checked={
                                                       answer.answer === selectedOptions[currentQuestion]?.answer
                                                  }
                                                  onChange={(e) => handleAnswerOption(answer.answer)}
                                                  className='w-6 h-6 bg-black'
                                             />
                                             <p className='ml-6 text-white'>{answer.answer}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    <div className='flex justify-end w-full md:w-2/3 mt-4 text-white  '>
                         <button
                              disabled={false}
                              onClick={currentQuestion + 1 === data.length ? handleSubmitButton : handleNext}
                              className='p-3 px-4 font-medium w-32  border hover:bg-gray-50 hover:text-black'>
                              {currentQuestion + 1 === data.length ? "Submit" : "Next"}
                         </button>
                    </div>
               </React.Fragment>
          </div>
     );
}
