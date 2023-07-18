import styled from "styled-components";

export const Footerdiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  align-items: start;
  padding-top: 50px;
  height: 350px;
  background: #006dab;
  width: 100%;
  h1 {
    font-family: monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 850px){
    display: flex;
    justify-content: space-around;
  }
`;
export const Servicesdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    font-family: monospace;
  }
  h1:hover {
    color: black;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;
export const Writings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  p {
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
  p:hover {
    cursor: pointer;
    color: black;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    h1 {
      display: none;
    }
    p {
      display: none;
    }
  }
`;
export const SocialMedia = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-around;
  align-items: center;
  a {
    font-family: monospace;
    display: flex;
    gap: 60px;
    cursor: pointer;
  }
`;
