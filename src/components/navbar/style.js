import styled from "styled-components";

export const Navdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 10px;
  padding: 50px;
  a {
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    color: #006dab;
    cursor: pointer;
    text-decoration: none;
   
  }

  @media (max-width: 420px) {
    h1 {
      font-family: monospace;
      font-size: 30px;
      font-weight: 600;
      line-height: 37px;
      letter-spacing: 0em;
      text-align: left;
      width: 100%;
    }
  }
`;
export const Hamburger = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
export const HamburgerRight = styled.div`
  display: none;

  @media (max-width: 420px) {
    display: flex;
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: fit-content;
  
  a {
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #373737;
    
  }
  a:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #006dab;
    height: 40px;
    background: rgba(0, 109, 171, 0.05);
    border-radius: 10px;
    font-family: monospace;
  
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const Selection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  select {
    border: none;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    select {
      display: none;
    }
    .people {
      display: none;
    }
  }
`;
export const Dropmenu = styled.div`
display: block;
  background-color: white;
  z-index: 1;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 100%;

  button {
    height: 40px;
    border-radius: 10px;
    background-color: white;
    color: #006dab;
    border: 1px #006dab snow;
    margin-bottom: 70px;
    font-family: monospace;
    padding: 0 60px 0 60px;
  }
  button:hover {
    background: #006dab;
    cursor: pointer;
    color: white;
  }
`;
export const DropdownShow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  gap: 90px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      cursor: pointer;
      color: #006dab;
      height: 40px;
      border-radius: 10px;
      width: 100%;
      font-family: monospace;
    }
  }
`;
