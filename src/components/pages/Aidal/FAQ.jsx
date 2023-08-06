import React from 'react'
import { FrequentAsked, QuestionContainer, SendQuestion } from './style'

const FAQ = () => {
  return (
    <div>
      <QuestionContainer>
        <FrequentAsked>
        <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
            <details>
              <summary>Frequently asked question</summary>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam?</p>
            </details>
        </FrequentAsked>
        <SendQuestion>
        <h1>Have you got a Question</h1>
            <input type="text" placeholder='Your name' required />
            <input type="text" placeholder='Your email'  required/>
            <input type="text" placeholder='Your question '
            required
            style={{padding:"50px"}}
            />
            <button>Send Question</button>
        </SendQuestion>
      </QuestionContainer>
    </div>
  )
}

export default FAQ