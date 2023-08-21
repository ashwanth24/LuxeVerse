import { Email, Facebook, Instagram, LocalPhone, Map, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:40px;
${mobile({padding:"5px"})}


`;
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}


`;
const Right = styled.div`
flex:1;
padding:20px;

`;
const Logo = styled.h1`


`;
const Title = styled.h3`
margin-bottom:30px;

`;
const  ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;
const List = styled.ul`
margin : 0;
padding :0;
list-style:none;
display:flex;
flex-wrap:wrap;

`;
const Decp = styled.p`
margin:20px ;

`;
const SocialContainer = styled.div`
display:flex;

`; 
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:black;
display:flex;
align-item:center;
justify-content:center;
background-colour :pink;
margin-right:20px;


`;

const ContactItem = styled.div`
margin-bottom :20px;
display:flex;
align-item:center;

`; 
const Payment = styled.img`
width:60%;

`; 

const footer = () => {
  return (
    <div>
      <Container>
          <Left>
              <Logo>ERANDS</Logo>
              <Decp>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel ipsam alias quidem at perferendis, placeat explicabo obcaecati, iusto reiciendis aspernatur esse tempora incidunt minus tenetur culpa ea quaerat fugiat.</Decp>
              <SocialContainer>
                  <SocialIcon >
                  <Facebook/>
                  </SocialIcon>
                  <SocialIcon >
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon >
                      <Twitter/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
            <Title>Useful links</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fasion</ListItem>
              <ListItem>Women Fasion</ListItem>
              <ListItem>Acessories</ListItem>
              <ListItem>Myaccount</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>T&C</ListItem>
            </List>
          </Center>
          <Right>
            <Title> contact</Title>
            <ContactItem>
              <Map style={{marginRight:"10px"}}/>
              Address
            </ContactItem>
            <ContactItem>
              <LocalPhone style={{marginRight:"10px"}}/>
              +91 457892545
            </ContactItem>
            <ContactItem>
              <Email style={{marginRight:"10px"}}/>
              Contact@gmail.com
            </ContactItem>
            <Payment src="https://www.ijettjournal.org/images/online-sbi.png" />
          </Right>
      </Container>
    </div>
  )
}

export default footer
