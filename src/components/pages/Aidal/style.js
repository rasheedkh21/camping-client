import styled from "styled-components";
import backimg from "../../../assets/aidalback.png"

export const AidalBack=styled.div`
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
h1{
  color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
div{
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  width: 20%;
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
border: 2px solid #FFF;
width: 150px;
height:60px;
background: none;
color: #FFF;
font-family: monospace;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
font-size: 100%;
text-decoration: none;
}
a:hover{
  border-radius: 10px;
background: var(--blue, #006DAB);

}
`
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

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
  justify-content: space-evenly;
  align-items: center;
  button {
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
  button:hover {
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
    width: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    button {
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
    button:hover {
      color: white;
      border-radius: 10px;
      background: var(--blue, #006dab);
    }
  }
`;
