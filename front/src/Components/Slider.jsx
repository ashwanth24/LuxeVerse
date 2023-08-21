import styled from "styled-components"
import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
width : 100%;
height : 100vh;
display : flex;
background-color: white;
position : relative;
overflow: hidden;
`;

const Arrow = styled.div`
width : 50 px;
height : 30px ;
background-color : white ;
border-radius :50%;
display :flex;
align-item:center;
justify-content :center;
position : absolute;
top :0 ;
bottom :0 ;
left: ${props => props.direction === "left" && "10px"} ;
right : ${props => props.direction === "right" && "10px"} ;
margin : auto ;
cursor : pointer ;
opacity : 0.5;
z-index:2;


`;
const Wrapper = styled.div`
height 100% ;
display :flex;
transform :translateX(${props=>props.slideIndex*-100}vw);
transition :all  1.5s ease;

`;
const Slide = styled.div`
width : 100vw;
height 100vh;
align-item :center;
display :flex;

`;
const Image = styled.img`
height : 80%;
`;


const ImgContainer = styled.div`
height : 100%;
flex :1;
display :flex;

`;
const InfoContainer = styled.div`
flex : 1; 
padding : 50px;

`;
const Title = styled.h1`
font-size:60px;
`;
const Dec = styled.p`
margin : 50px 0px;
font-weight :600;
font-size : 20px;
letter-spacing:3px;
`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color: transparent;
cursor:pointer;




`;


const Slider = () => {
    const [slideIndex,setSlideIndex]= useState()
    const handleclick =(direction)=>{

            if(direction==="left"){
                setSlideIndex(slideIndex>0? slideIndex-1 :2)

            }else{
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 :0)
            }
        };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleclick("left")}>
        <ArrowLeftOutlined/>
        
        </Arrow>
    <Wrapper slideIndex = {slideIndex}> 
        {sliderItems.map(items=>(
            <Slide bg={items.bg} key={items.id}>
                <ImgContainer>
                    <Image src= {items.img} />
                    <InfoContainer>
                        <Title>{items.title}</Title>
                        <Dec>
                        {items.dec}
                        </Dec>
                        <Button>shop now</Button>
                        </InfoContainer>
                    </ImgContainer>
            </Slide>
        ))}

        
    </Wrapper>

    <Arrow direction = "right" onClick={()=>handleclick("left")}>
        
        <ArrowRightOutlined/>
    </Arrow>
    </Container>
  )
}

export default Slider
