import styled from 'styled-components'
import { Animation } from './Animation'
import { goToHome } from '../router/coordinator';
import { useNavigate } from 'react-router-dom';

const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  >div{
    display: flex;
    align-items: center;
    gap: 4px;
  }
  >span{
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Dosis', sans-serif;
    font-weight: 100;
    width: 25%;
    cursor: pointer;
  }
  /* border: 1px solid red; */
  
  h1{
    /* width: 40%; */
    font-size: 18px;
  }
  
  img{
    height: 28px;
    opacity: 1;

  }
`

export const Header = (props) => {
  const navigate = useNavigate()

  return(
    <Content>
      <div>
        <Animation width={40} height={40}/>
        <h1>Leonardo & Laiane</h1>
      </div>
      <span onClick={() => goToHome(navigate)}>&#5130; Voltar</span>
    </Content>
  )
}