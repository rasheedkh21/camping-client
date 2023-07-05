import styled from "styled-components";

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
  video {
    margin-top: 30px;
    width: 291px;
    height: 292px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    border-radius: 20px;
  }
  @media (max-width: 830px){
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    align-items: center;
  }
  video{
    width: 326.989990234375px;
height: 359.888916015625px;
border-radius: 20px;
  }
  @media (max-width:414px) {
    display: grid;
    grid-template-columns: auto;
    justify-content: space-evenly;
    align-items: center;
    video{
      width: 326.9825439453125px;
height: 391.857421875px;
border-radius: 20px;

    }
  }
`;
export const Blogscontainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;

  @media (max-width: 830px ) {
    margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
  }
  h3 {
    font-family: "Courier New", Courier, monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ff7a00;
  }
  p {
    width: 380px;
    height: 107px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
`
export const Imagecontainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 258px;
    height: 258px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: auto auto;
    img {
      width: 326.91px;
      height: 326.43px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    }
  }
  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: auto;
    img{
      width: 354px;
height: 354px;
border-radius: 20px;
    }
  }
`;
