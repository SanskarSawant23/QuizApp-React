import React, { useRef, useState } from 'react'
import { questions } from '../assets/questions';
const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion ] = useState(questions[index]); //question variable has the questions array's element.
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null); 

  let Option_array = [Option1, Option2, Option3, Option4];
    
  const onClick = (e, ans)=>{
   if(lock === false){
    if(question.ans === ans){   
      console.log("correct ans"); 
      setScore(prev =>prev+1); 
      e.target.classList.add("bg-green-500");
  }else{
      console.log("wrong ans");
      e.target.classList.add("bg-red-400");
      Option_array[question.ans - 1];

  }
    setLock(true);

   }
    
  }
  const next = () =>{
    if(lock){
      if(index === questions.length - 1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(questions[index]);
      setLock(false)
      Option_array.map((option)=>{
        option.current.classList.remove("bg-red-400")
        option.current.classList.remove("bg-green-500");
        return null;
      })
    }
  }

  return (
    <div className="h-screen flex grid gird-cols-1 justify-center items-center bg-gray-100">
        
    <div className="grid grid-cols-1 bg-white w-[640px] rounded-md text-left p-10">
      {result?<>Your Score is: {score}</>:<></>}
      <h2 className="mt-4">{index+1}. {question.question}</h2>
      <ul className="list-none mt-4 text-left cursor-pointer">
        <li ref={Option1} onClick={(e)=>{onClick(e,1)}} className='border border-black rounded-md py-1 mb-2'>{question.option1}</li>  {/* every li tag has a refrence whenever we click on the wrong option then we call the refrence of the correct option*/}
        <li ref={Option2} onClick={(e)=>{onClick(e,2)}} className='border border-black rounded-md py-1 mb-2'>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{onClick(e,3)}} className='border border-black rounded-md py-1 mb-2'>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{onClick(e,4)}} className='border border-black rounded-md py-1 mb-2'>{question.option4}</li>
      </ul>
      <button onClick= {next}className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>
      <div className="mt-4 text-gray-500">{index+1} of {questions.length} questions</div>
    </div>
  </div>
  
  )
}

export default Quiz