import { Title } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjAjh_5DGz5wG099EUPjvpmSYG-4SAIAG6Q&usqp=CAU")center;

background-size:cover;
display : flex;
align-items:center;
justify-content:center;




`
const Agrement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Tittle = styled.h1`
font-size:25px;
font-weight:300;
`
const From = styled.form`
  display: flex;
  flex-wrap:wrap;
`
const Input = styled.input`
flex : 1;
min-width:40%;
margin : 20px 10px 0px 0px;
`
const Wrapper = styled.div`
padding:20px;
width:40% ;
background-color:rgba(255,255,255,0.35);
border-radius:8%;
${mobile({width:"75%"})}

`
const Button = styled.button`
width : 40%;
border:none;
padding:15px 20px;
background-color:teal;
color: white;
cursor:pointer;

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Tittle>CREATE ACCOUNT</Tittle>
            <From>
                <Input placeholder="Name "/>
                <Input placeholder="LastName "/>
                <Input placeholder="UserName "/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm pass"/>
                <Agrement>
                    By creating a ACcount i agree to terms and conditions
                    <b>PRIVACY POLICY</b>
                </Agrement>
                <Button>Create</Button>
            </From>
        </Wrapper>
    </Container>
  )
}

export default Register
