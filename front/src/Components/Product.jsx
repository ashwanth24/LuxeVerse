
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'

const Info = styled.div`
  opacity :0;
  width :100%;
  height : 100% ;
  position :absolute;
  top :0;
  left :0;
  background-color: rgba(0,0,0,0.3);
  z-index:2;
  display:flex;
  align-items: center;
  justify-content : center;
  cursor:pointer;

  `;


const Container = styled.div`

flex :1;
margin : 5px;
min-width:280px;
height:350px;
display:flex;
align-items: center;
justify-content : center;
background-color: lightgrey;
position :relative;
&:hover ${Info}{
  opacity:1;
 
  `;
  
  const Circle = styled.div`
  
  
  `;
  const Image = styled.img`
height:85% ;


`;
const  Icon = styled.div`
height :40px;
width :40px;
border-radius:50%;
background-color:white;
display:flex;
align-items: center;
justify-content : center;
margin:10px;
transition:all 0.5s ease;
&:hover{
  background-color:lightblue;
  transform:scale(1.4)

}
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
      </Info>
    </Container>
  )
}

export default Product
