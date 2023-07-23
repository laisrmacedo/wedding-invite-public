import styled from 'styled-components'
import { Container } from '../GlobalStyle'
import { Animation } from "../components/Animation";
import location from "../assets/pin.png";
import check from "../assets/check.png";
import gift from "../assets/gift.png";
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { goToGift, goToLocation } from '../router/coordinator';

const Main = styled.main`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`


export const Home = () => {
  const navigate = useNavigate()

  return(
    <Container>
      <Main>
        <Animation width={300} height={300}/>
        <div className="title">
          <h1>Leonardo &nbsp; & &nbsp; Laiane</h1>
          <p>com amor, convidam para seu casamento</p>
        </div>
        <h2>
          <span>10</span>
          <span>|</span>
          <span>JANEIRO</span>
          <span>|</span>
          <span>2023</span>
          <span>|</span>
          <span>15H</span>
        </h2>
        <div className="icons">
          <Button onClick={() => goToLocation(navigate)} img={location} text={"Localização"}/>
          <Button onClick={() => goToGift(navigate)} img={gift} text={"Presente"}/>
          <Button img={check} text={"Confirmação de presença"}/>
        </div>
      </Main>
    </Container>
  )
}