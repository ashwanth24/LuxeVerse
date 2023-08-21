import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Newslater from '../Components/Newslater';
import Footer from '../Components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container =styled.div`

`
const Wrapper =styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}

`
const ImgContainer =styled.div`
flex :1;

`
const InfoContainer =styled.div`
flex :1;
padding: 0px 50px;
${mobile({padding:"10px"})}

`
const Image =styled.img`
width : 100%;
height:40vh;
object-fit:cover;
${mobile({height:"40vh"})}

`
const Price =styled.span`
font-weight:100;
font-size:40px;
`
const Dec =styled.div`
margin : 20px 0px;

`
const Title =styled.h1`
font-weight:200;
`
const FilterContainer =styled.div` 
width : 50%;
margin : 30px 0px;
display : flex;
justify-content : space-between;
${mobile({width:"100%"})}


`
const Filter =styled.div`
display:flex;
align-items:center;
`
const FilterColor = styled.div`
width: 20px;
height :20px;
cursor : pointer;
background-color: ${(props)=>props.color};
border-radius :45%;
margin:5px;

`
const FilterTitle =styled.span`
font-size:20px;
font-width:200px;
`
const FilterSizeOption =styled.option`

`
const FilterSize =styled.select`
margin-left : 10px;
padding:5px;
`

const AddContainer =styled.div`
display:flex;
width:50%;
align-items:center;
justify-content: space-between;
${mobile({width:"100%"})}

`
const AmountContainer =styled.div`
display : flex;
align-items:center;
font-weight:700;


`
const Amount =styled.span`
width:30px;
height: 30px;
border-radius :10px;
display:flex;
border:1px solid teal;
border-radius:10%;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button =styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor : pointer;
font-weight:700;
&:hover{
  background-color:teal;
}


`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src = "https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/master/pass/fullsizeoutput_6bcd_1_1080x.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>dress</Title>
                <Dec>Description:
Suited for a day at the office as well as evening meet-ups with friends is this sage Oscar dress from Wardrobe. Constructed in a smooth floral print profile with a V-neck for a smart touch, the silhouette comes complete with dual pockets and a tie-up detail at the back for added utility Description:

                  </Dec>
                <Price>Rs 1,999</Price>
                <FilterContainer>

                  <Filter>
                    <FilterTitle>color  </FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="Blue"/>
                    <FilterColor color="red"/> 
                
                    
                  </Filter>

                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>m</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>

                </FilterContainer>
               <AddContainer>
                 <AmountContainer>
                   <Remove/>
                   <Amount>1</Amount>
                   <Add/>
                 </AmountContainer>
                 <Button>ADD TO CART</Button>
               </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newslater/>
        <Footer/>

    </Container>
      
   
  )
}

export default Product
