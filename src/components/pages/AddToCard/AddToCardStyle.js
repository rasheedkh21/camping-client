import styled from "styled-components";


export const Linediv=styled.div`
display: flex;
width: 100px;
height: 3px;
background: #FF7A00;
`

export const CardContainer=styled.div`
display: flex;
flex-direction: row;
/* justify-content: start;
align-items: center; */
width: 100%;
height: fit-content;
padding: 0 60px 0 60px;
gap: 30px;
margin-top: 30px;
margin-bottom: 40px;
@media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

export const CarView=styled.div`
display: flex;
flex-direction: column;
div{
    border-radius: 10px;
background: #FFF;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

}
`
export const ButtonDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 100%;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: var(--text, #373737);
font-family: monospace;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`