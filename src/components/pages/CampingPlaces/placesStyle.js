import styled from "styled-components";
import placeimg from "../../../assets/placeback.png"


export const PlacesBack=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 60vh;
background-image: url(${placeimg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
a{
    color: #FFF;
font-family: monospace;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
}
a:hover{
    text-decoration-line: underline;
}
p{
    color: #FFF;
font-family: monospace;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
}
@media (max-width: 430px) {
    p{
        text-align: center;
        font-size: 50px;
        font-weight: 400;
    }
}
`
export const PlaceOptions=styled.div`
display: grid;
grid-template-columns: auto auto auto ;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: fit-content;
gap: 30px;
@media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
}
@media (max-width: 430px) {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
}
`
export const PlaceOffers=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
border-radius: 10px;
padding-top: 20px;
padding-bottom: 30px;
p{
    padding-top: 20px;
    color: var(--text, #373737);
font-family: monospace;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
a{
    color: var(--text, #373737);
font-family: monospace;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
}
a:hover{
    text-decoration-line: underline;
}
img{
    width: 100%;
}
`