
import styled from "styled-components"
import { Catogories } from '../data';
import CatogoryItem from './CatogoryItem';
import { mobile } from "../responsive";


const Container = styled.div`
padding : 20px ;
display : flex;
justify-content : space-between;
${mobile({padding:"0px",flexDirection :"column"})}

`;


const Categories = () => {
  return (
    <Container>
      {Catogories.map(item=>(
           <CatogoryItem item={item} key={item.id}/>

      ))}
    </Container>
  )
}

export default Categories
