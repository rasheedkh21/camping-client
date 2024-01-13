import React from 'react'
import { QuestionContainer, SendQuestion, SearchMap, Contacts } from './style'

const Contact = () => {
  return (
    <div>
      <QuestionContainer>
        <SearchMap>
          <img src="https://thumbs.dreamstime.com/z/seoul-administrative-political-vector-map-flag-137184920.jpg?w=768" alt="adress" />
          <Contacts>
            <div>
              <p>Phone number:</p>
              <h2>+7 237 181 181</h2>
              <h2>+7 237 181 181</h2>
            </div>
            <div  >
              <p>E-mail</p>
              <h2>logo.uz</h2>
            </div>
          </Contacts>
        </SearchMap>
        <SendQuestion>
        <h1>Have you got a Question</h1>
            <input type="text"  id="name" placeholder='Your name' required />
            <input type="text"  id="email" placeholder='Your email'  required/>
            <textarea name="message" placeholder="Your Question" cols={10} rows={5} />
            <button>Send Question</button>
        </SendQuestion>
      </QuestionContainer>
    </div>
  )
}

export default Contact