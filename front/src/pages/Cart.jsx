import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Product from './Product'
import { Add, Details, Remove, Title } from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile({pading:"10px"})}

`
const Tittle = styled.h1`
font-weight: 300;
text-align:center;
`
const Top = styled.div`
display :flex;
align-item:center;
justify-content:space-between;
padding:20px;
`
const Bottom = styled.div`
display:flex;
Justify-content:space-between;
${mobile({flexDirection:"column"})}

`
const Info = styled.div`
flex:3;
`
const Summary = styled.div`
flex:1;
`
const Toptexts = styled.div`
${mobile({display:"none"})}

`
const Toptext = styled.span`
text-decoration:underline;
cursor:pointer;
margin : 0px 10px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border :${props=>props.type=== "filled"&& "none"};
background-color :${props=>props.type=== "filled" ? "black" : "transparent"};
color :${props=>props.type=== "filled"&& "white"};

`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const ProductSize = styled.span`

`
const ProductId = styled.span`

`
const Productt = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}

` 
const Detailss = styled.div`
padding: 20px;
display:flex;
flex-direction:column;
justify-content:space-around;
` 

const Productcolor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`
const productName = styled.span`

`
const Image = styled.img`
width :100px;
`
const PriceDetail = styled.div`
flex :1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


` 

const hr = styled.hr`
border:none;
height:1px;
backgound-color:grey;
`  

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:5px;

` 
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}


` 
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom:"20px"})}

` 
const Sumary = styled.div`
flex :1;
border:0.5px solid lightgrey;
border-radius :10px;
padding:20px;
height:50vh;
`
const SummaryTitle = styled.h1`
fontwidth:200;

`
const SummarItem = styled.div`
margin: 30px 0px;
display:flex;
justify_content:space-between;
font-weight : ${props=>props.type==="total" && "700"};
font-size : ${props=>props.type==="total" && "24px"};

`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-width:600;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Tittle>Your bag</Tittle>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <Toptexts>
                    <Toptext>Shoping bag</Toptext>
                    <Toptext>Your wishlist </Toptext>
                </Toptexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Productt>
                        <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/71ZeTzMuhCL._UY550_.jpg"/>
                        <Detailss>
                            <productName><b>product:</b>dress1</productName>
                            <ProductId><b>Id:</b>5564</ProductId>
                            <Productcolor color="black"/>
                            <ProductSize><b>size:</b>45</ProductSize>

                        </Detailss>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>5000</ProductPrice>
                        </PriceDetail>
                        
                    </Productt>
                    <hr/>
                    <Productt>
                        <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/71ZeTzMuhCL._UY550_.jpg"/>
                        <Detailss>
                            <productName><b>product:</b>dress1</productName>
                            <ProductId><b>Id:</b>5564</ProductId>
                            <Productcolor color="black"/>
                            <ProductSize><b>size:</b>45</ProductSize>

                        </Detailss>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>5000</ProductPrice>
                        </PriceDetail>
                        
                    </Productt>
                </Info>
                <Sumary>
                    <SummaryTitle>order summary</SummaryTitle>
                    <SummarItem>
                        <SummaryItemText>subtotal</SummaryItemText>
                        <SummaryItemPrice>5000</SummaryItemPrice> 
                    </SummarItem>

                    <SummarItem>
                        <SummaryItemText>Estimated shiping</SummaryItemText>
                        <SummaryItemPrice>50</SummaryItemPrice> 
                    </SummarItem>

                    <SummarItem>
                        <SummaryItemText>Shipping disc</SummaryItemText>
                        <SummaryItemPrice>-50</SummaryItemPrice> 
                    </SummarItem>

                    <SummarItem type="total">
                        <SummaryItemText >total</SummaryItemText>
                        <SummaryItemPrice>5000</SummaryItemPrice> 
                    </SummarItem>
                    <SummaryButton>Checkout</SummaryButton>
                </Sumary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
