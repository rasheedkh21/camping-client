import styled from "styled-components";

export const Order=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height:fit-content;
padding: 0 60px 0 60px;
h1{
    color: var(--text, #373737);
font-family: monospace;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`
export const Linediv=styled.div`
width: 190px;
height: 3px;
background: #FF7A00;
`
export const OrderList=styled.div`
margin-top: 40px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 180px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
@media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
}

`

export const OrderLeft=styled.div`
flex: 1;
display: flex;
width: 100%;
height: fit-content;

`
export const OrderRight=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h2{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h3{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    color: rgba(55, 55, 55, 0.70);
font-family: monospace;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const Writings=styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: center;
gap: 30px;
margin-top: 30px;
`