import styled from 'styled-components'
import { Container } from '../components/Container'
import { Animation } from "../components/Animation";
import location from "../assets/pin.png";
import check from "../assets/check.png";
import gift from "../assets/gift.png";
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { goToCheck, goToGift, goToLocation } from '../router/coordinator';

const Main = styled.main`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;
    h1{
      width: 80%;
      font-size: min(10vw, 40px);
    }
    h2{
      display: flex;
      justify-content: center;
      font-size: min(5.8vw, 26px);
    }
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
          06 &nbsp;| &nbsp;JANEIRO&nbsp; | &nbsp;2024&nbsp; |&nbsp; 16H
        </h2>
        <div className="icons">
          <Button onClick={() => goToLocation(navigate)} img={location} text={"Local"}/>
          <Button onClick={() => goToGift(navigate)} img={gift} text={"Presentes"}/>
          <Button onClick={() => goToCheck(navigate)} img={check} text={"Confirmação de presença"}/>
        </div>
      </Main>
    </Container>
  )
}