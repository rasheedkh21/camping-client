import React from 'react'
import { AskedQuestions, Linediv, QuestionContainer, SendQuestion } from './style';

const Question = () => {
  return (
    <div>
       <QuestionContainer>
         <AskedQuestions>
            <details>
              <summary>Question Lorem ipsum dolor sit amet ?</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <Linediv/>
            <details>
              <summary>Question Lorem ipsum dolor sit amet ?</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <Linediv/>
            <details>
              <summary>Question Lorem ipsum dolor sit amet ?</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <Linediv/>
            <details>
              <summary>Question Lorem ipsum dolor sit amet ?</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <Linediv/>
            <details>
              <summary>Question Lorem ipsum dolor sit amet ?</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <Linediv/>
            </AskedQuestions>
         <SendQuestion>
            <h1>Send a question</h1>
            <input type="text" name="" id="" placeholder='Your name' />
            <input type="text" name="" id="" placeholder='Your email' />
            <input type="text" name="" id="" placeholder='Your question'
            style={{padding:"50px"}}
            />
            <button>Send Question</button>
        </SendQuestion>
       </QuestionContainer>
    </div>
  )
}

export default Question;