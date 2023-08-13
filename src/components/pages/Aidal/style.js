import styled from "styled-components";
import backimg from "../../../assets/aidalback.png";

export const AidalBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #fff;
    width: 150px;
    height: 60px;
    background: none;
    color: #fff;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 100%;
    text-decoration: none;
  }
  a:hover {
    border-radius: 10px;
    background: var(--blue, #006dab);
  }
`;
export const PriceAidal = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  /* grid-template-columns: auto auto; */
  justify-content: center;
  align-items: center;
  height: fit-content;
  @media (max-width: 850px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const ImageDivCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  width: 100%;
  height: fit-content;
  /* img{
    flex: 1;
    width: 100%;
    height: 425px;
  } */
  @media (max-width: 850px) {
    img {
      flex: 1;
      width: 100%;
      height: 425.09px;
    }
  }
  @media (max-width: 420px) {
    img {
      flex: 1;
      width: 100%;
      height: 224px;
    }
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  background: #fff;
  width: 100%;
  height: 360px;
  justify-content: space-evenly;
  align-items: start;
  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    height: 425px;
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 309px;
  }
`;
export const FirstAidalDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  align-items:start;

  h2 {
    color: #000;
    font-family: monospace;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h1 {
    color: #006dab;
    font-family: monospace;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const LineAidal = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
`;

export const ComfortAllDivLorem = styled.div`
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  p {
    display: flex;
    width: 50%;
    height: fit-content;
    flex-direction: column;
    color: #373737;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  h1 {
    color: var(--text, #373737);
    font-family: sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    h1 {
      color: var(--text, #373737);
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p {
      width: 50%;
      height: fit-content;
    }
  }
`;
export const ComfortImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  img {
    flex: 1;
    width: 100%;
    height: 477px;
    flex-shrink: 0;
  }
  @media (max-width: 420px) {
    img {
      width: 100%;
      height: 309px;
    }
  }
`;
export const Buttondiv = styled.data`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin: 30px 0 30px;
  padding: 0 30px 0 30px;
  justify-content: space-evenly;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #006dab;
    color: #006dab;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
  a:hover {
    color: white;
    border-radius: 10px;
    background: var(--blue, #006dab);
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const Buttondivseconnd = styled.div`
  display: none;
  @media (max-width: 850px) {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    a {
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: 2px solid #006dab;
      color: #006dab;
      font-family: monospace;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
    }
    a:hover {
      color: white;
      border-radius: 10px;
      background: var(--blue, #006dab);
    }
  }
`;

//Items review

export const Optionsdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;

  select {
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    background: #fff;
    width: 177px;
    height: 35px;
    flex-shrink: 0;
    color: var(--blue, #006dab);
    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
  h1 {
    color: var(--blue, #006dab);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const Review = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }
`;

export const Carname = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const CArID = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  h1 {
    color: rgba(55, 55, 55, 0.7);
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

//Questiom and Answers
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 60px 0 60px;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 425.09px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SendQuestion = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.1);
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  h1 {
    color: var(--text-color, #023047);
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
  }
  input {
    height: 50px;
    width: 70%;

    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
  button {
    border-radius: 10px;
    background: var(--blue, #006dab);
    height: 50px;
    width: 70%;
    color: #fff;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
  }
`;
export const AskedQuestions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  details {
    color: #373737;
    font-family: monospace;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
  }
`;
export const Linediv = styled.div`
  width: 100%;
  background: rgba(55, 55, 55, 0.3);
  height: 1px;
  margin-top: 10px;
`;

//For only questions
export const FrequentAsked = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 15px;
  details {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  summary {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

//CONTACTS
export const SearchMap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 100%;
    height: 300px;
  }
`;
export const Contacts = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 30px;
  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    border-radius: 10px;
    border: 1px solid rgba(0, 109, 171, 0.1);
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

    padding: 0 60px 0 60px;
    margin-top: 30px;
  }
  p {
    color: #666;
    font-family: monospace;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
  h2 {
    color: var(--txt-color, #1e1c1c);
    font-family: monospace;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 23.4px */
  }
`;
