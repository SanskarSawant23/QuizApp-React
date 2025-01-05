import React, { useRef, useState } from 'react'
import { questions } from '../assets/questions';
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion ] = useState(questions[index]); //question variable has the questions array's element.
  const [lock, setLock] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null); 

  let Option_array = [Option1, Option2, Option3, Option4];
    
  const onClick = (e, ans)=>{
   if(lock === false){
    if(question.ans === ans){   
      console.log("correct ans");  
      e.target.classList.add("correct");
  }else{
      console.log("wrong ans");
      e.target.classList.add("wrong");
      Option_array[question.ans - 1] 

  }
    setLock(true);

   }
    
  }
  return (
    <div className="h-screen flex grid gird-cols-1 justify-center items-center bg-gray-100">
        
    <div className="grid grid-cols-1 bg-white w-[640px] rounded-md text-left p-10">
        
      <h2 className="mt-4">{index+1}. {question.question}</h2>
      <ul className="list-disc mt-4 text-left cursor-pointer">
        <li ref={Option1} onClick={(e)=>{onClick(e,1)}}>{question.option1}</li>  {/* every li tag has a refrence whenever we click on the wrong option then we call the refrence of the correct option*/}
        <li ref={Option2} onClick={(e)=>{onClick(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{onClick(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{onClick(e,4)}}>{question.option4}</li>
      </ul>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>
      <div className="mt-4 text-gray-500">1 of 5 questions</div>
    </div>
  </div>
  
  )
}

export default Quiz