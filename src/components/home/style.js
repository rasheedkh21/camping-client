import styled from "styled-components";
import backimg from "../../assets/car33.png";

export const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;
export const Linediv = styled.div`
  display: flex;
  width: 170px;
  border: 2px solid #ff7a00;
`;
export const Videodiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: max-content;
  height: fit-content;
  /* padding: 0 60px 0 60px; */




 
  @media (max-width: 850px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 430px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const VideoPlayer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    padding: 150px;
    height: 292px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    border-radius: 20px;
    background-image: url(${backimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`


export const Blogscontainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;

  @media (max-width: 850px) {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
  }
`;
export const Loremcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  height: fit-content;
  h1 {
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
  }
  h3 {
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ff7a00;
  }
  p {
    width: 50%;
    font-family: monospace;
    height: fit-content;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
`;
export const Imagecontainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: fit-content;
  padding: 0 60px 0 60px;
  img {
    width: 100%;
    height: 258px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: auto auto;
    img {
      width: 100%;
      height: 326px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    }
  }
  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: auto;
    img {
      width: 100%;
      height: 354px;
      border-radius: 20px;
    }
  }
`;
