import { Description, Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height:40vh;
  align-items:center;
  justify-content:center;
  background-color:grey;
  display:flex;
  flex-direction:column;
  
  `;
  const Title = styled.h1`
  margin-top:-5px;
  margin-bottom:10px;
  font-size:70px;


  `;
  const Tescription = styled.div`

  font-size:24px;
  font-weight:400;
  margin-bottom:20px;
  ${mobile({textAlign:"center"})}


  `;
  const InputContainer = styled.div`
  width:80%;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:space-between;
  ${mobile({width:"80%"})}

  


  
  `;
  const Input= styled.input`
  border:none;
  flex:8;  
  padding-left:20px;
  `;
  const Button = styled.button`
  background-color:darkgrey;
  border:none;
  flex:1;
  color:black;
  
  `;
const Newslater = () => {
  return (
    <Container>
      <Title>Newslatter</Title>
      <Tescription>get your updates here..</Tescription>
      <InputContainer>
      <Input placeholder='your Email '/>
      <Button>
      <Send/>
      </Button>

      </InputContainer>
    </Container>
  )
}

export default Newslater
