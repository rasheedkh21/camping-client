import styled from "styled-components";

export const Navdiv=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100px;
h1{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 46px;
color: #006DAB;
cursor: pointer;
}
`
export const Infos=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
gap: 40px;
p {

 font-family: monospace;
 font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
color: #373737;
}
p:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #006DAB;
    width: 113px;
height: 40px;
background: rgba(0, 109, 171, 0.05);
border-radius: 10px;
}
@media screen and(max-width: 850px) {
    display: none;
}
`
export const Selection=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
gap: 15px;
cursor: pointer;
select{
    border: none;
    cursor: pointer;
}
`
export const Dropmenu=styled.div`
background-color:white;
z-index: 100;
border: 1px solid red;
position: absolute;
top: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 400px;
width: 100%;
border: 1px solid red;
div{
    display: flex;
    justify-content: space-evenly;
}

button{
    width: 230px;
height: 40px;
background: #006DAB;
border-radius: 10px;
cursor: pointer;
color: white;
border: none;
}
`