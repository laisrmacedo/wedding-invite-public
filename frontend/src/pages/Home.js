import styled from 'styled-components'
import { Container } from '../components/Container'
import { Animation } from "../components/Animation";
import location from "../assets/pin.png";
import check from "../assets/check.png";
import gift from "../assets/gift.png";
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { goToCheck, goToError, goToGift, goToLocation } from '../router/coordinator';
import { BASE_URL } from '../App';
import axios from 'axios';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';

const Main = styled.main`
    padding-top:40px;
    h1{
      width: 80%;
      font-size: min(10vw, 40px);
    }
    h2{
      display: flex;
      justify-content: center;
      font-size: min(5.8vw, 26px);
    }

    .title{
      p{
        text-transform: uppercase;
        font-size: 16px;
      }
    }
`


export const Home = () => {
  const navigate = useNavigate()
  const {name} = useParams()

  const getGuests = async () => {
    try {
      const response = await axios.get(BASE_URL + `guests/`)
      const [foundGuest] = response.data.filter((guest) => guest.id === name)
      if(!foundGuest){
        goToError(navigate)
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getGuests()
  }, [])

  return(
    <Container>
      <Main>
        <div className='container-main'>
        <Animation width={300} height={300}/>
        <div className="title">
          <h1>Laiane &nbsp; & &nbsp; Leonardo</h1>
          <p>com amor, convidam para seu casamento</p>
        </div>
        <h2>
          06 &nbsp;| &nbsp;JANEIRO&nbsp; | &nbsp;2024&nbsp; |&nbsp; 16H
        </h2>
        <div className="icons">
          <Button onClick={() => goToLocation(navigate, name)} img={location} text={"Local"}/>
          <Button onClick={() => goToGift(navigate, name)} img={gift} text={"Presentes"}/>
          <Button onClick={() => goToCheck(navigate, name)} img={check} text={"Confirmação de presença"}/>
        </div>
        </div>
      <Footer/>
      </Main>
    </Container>
  )
}