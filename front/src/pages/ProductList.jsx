import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import { Title } from '@material-ui/icons'
import Products from '../Components/Products'
import Newslater from '../Components/Newslater'
import Footer from '../Components/Footer'
import { mobile } from '../responsive'

const Container =styled.div``

const Ttitle =styled.h1`
margin:20px;`
const FilterContainer =styled.div`
display:flex;
justify-content:space-between;

`
const Filter =styled.div`
margin:20px;
${mobile({width:"0px 20px",display : "flex",flexDirection : "column"})}

`
const FilterText =styled.span`
fontsize:20px;
font-weight:600;
margin-right:10px;
${mobile({marginRight:"0px"})}

`
const Select =styled.select`
padding:10px;
margin:20px;
${mobile({margin:"10px 0px "})}

`
const Option =styled.option`
margin:20px;
`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
     <Ttitle> dress</Ttitle>
        <FilterContainer>
            <Filter><FilterText>filter products</FilterText>
            <Select>
            <Option disabled selected>colour</Option>
            <Option> white</Option>
            <Option>black</Option>
            <Option>green</Option>
            <Option>blue</Option>
            
            
            </Select>

            <Select>
            <Option disabled selected>colour</Option>
            <Option> xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            
            
            </Select>
            </Filter>
            <Filter><FilterText>sort</FilterText>
            <Select>
            <Option disabled selected>colour</Option>
            <Option> new</Option>
            <Option>price high</Option>
            <Option>price low</Option>
            
            
            
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newslater/>
        <Footer/>
    </Container>
  )
}

export default ProductList
