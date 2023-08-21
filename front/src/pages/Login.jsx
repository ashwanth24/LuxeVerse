import  styled  from 'styled-components'
import React from 'react'
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
const Link = styled.a`
margin : 5px 0px;
font-size:12px;
//text-decoration:underline;
cursor:pointer;
color:white;
`
const Tittle = styled.h1`
font-size:25px;
font-weight:700;
color:white;
`
const From = styled.form`
  display: flex;
  flex-direction :column;
`
const Input = styled.input`
flex : 1;
min-width:40%;
min-height:30px;
border:none;
border-radius:5px;
margin : 10px 0px;
padding:5px;

`
const Wrapper = styled.div`
padding:20px;
width:30% ;
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
margin-bottom:10px;
border-radius:10px;
`



const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Tittle>Login</Tittle>
            <From>
                
                <Input placeholder="UserName "/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>Forgot Password</Link>
                <Link>Create account</Link>

            </From>
        </Wrapper>
    </Container>
  )
}

export default Login
