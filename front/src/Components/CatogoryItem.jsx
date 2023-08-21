import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
flex : 1 ;
margin : 5px;
height : 100vh;
position : relative ;
`;
const Image = styled.img`
width :100% ;
height :100% ;
object-fit :cover ;
${mobile({height:"30vh"})}

`;
const Info = styled.div`
position : absolute ;
top :30%;
left:30%;
width :100vh ;
height :100vh ;
align-item: center ;
justify-content:center ;






`;
const Title = styled.h1`
color : white;
margin-buttom :20px;



`;
const Buutton = styled.button`
border :none;
padding :20px
border-radius:10px;
background-color :white ;
opacity:0.5:
color: gray;
cursor:pointer;
font-weight :600;
`;

const CatogoryItem = ({item}) => {
  return (
    <Container>
      <Image src = {item.img}/>
      <Info>
        <Title>{item.title}</Title>
       <Buutton>shop now</Buutton>
      </Info>
    </Container>
  )
}

export default CatogoryItem
