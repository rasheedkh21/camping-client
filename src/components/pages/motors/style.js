import styled from "styled-components";
import slidercar from "../../../assets/slidecar.png"

export const Bigcontainer=styled.div`
display: flex;
flex-direction: row;
gap: 15px;
justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 40px;
`

export const CostContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`
export const ItemContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 4;
`
export const ItemSort=styled.div`
display: flex;
flex-direction: row;
gap: 500px;
justify-content: space-around;
align-items: center;
h1{
    color: #373737;
font-family: monospace;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`
export const SelectionDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%;
}
`
export const SelectionCars=styled.select`
width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%;
`
export const SelectionNumbers=styled.select`
width: 80px;
height: 30px;
flex-shrink: 0;
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%;
`
export const ThinLine=styled.div`
width: 100%;
height: 1px;
background: rgba(55, 55, 55, 0.50);
margin-top: 10px;
`
export const OrderSort=styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
width: 100%;
height: fit-content;
`
export  const Orders=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 223px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
margin-top: 30px;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: -100px;
}
h2{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: -150px;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
button{
    border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
width: 94px;
height: 35px;
flex-shrink: 0;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
button:hover{
    cursor: pointer;
    background-color: #006DAB;
    color: white;
}
}
`
export const ImageOfOffer=styled.div`
background-image: url(${slidercar});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
width: 202.42px;
height: 137.433px;
flex-shrink: 0;
display: flex;
`




