import styled from 'styled-components'
import { Animation } from './Animation'
import { goToHome } from '../router/coordinator';
import { useNavigate, useParams } from 'react-router-dom';

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
  const {name, n} = useParams()
  return(
    <Content>
      <div>
        <Animation width={40} height={40}/>
        <h1>Laiane & Leonardo</h1>
      </div>
      {props.showBtn? 
        <button className="btn checkBtn" onClick={() => goToHome(navigate, name, n)}>&#5130; &nbsp;Voltar</button>
      :
      <></>
      }
    </Content>
  )
}