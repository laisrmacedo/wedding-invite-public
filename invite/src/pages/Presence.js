import { Container } from "../components/Container"
import styled from 'styled-components'
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"
import whatsapp from '../assets/whatsapp.png'
import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import axios from "axios"
import { BASE_URL } from "../App"

const Main = styled.main`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px; 
  position: relative;
  z-index: 1;
  .subtitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 40px;
    p{
      font-size: 14px;
    }
  }

  >div{
    height: 40%;
    width: 100%;
    >span{
      width: 100%;
      height: 100%;
    }
  }
  
  #check{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    /* border: 1px solid blue; */
    button{
      height: 28px;
      font-size: 14px;
    }
    span{
      display: flex;
      justify-content: center;
      height: 40px;
    }
    h3{
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 100;
    }
  }
  p{
    font-size: 16px;
  }
  h3{
    text-transform: uppercase;
    font-size: 16px;
  }

  .visible{
    display: flex;
  }
  .hidden{
    display: none;
  }
`

export const Presence = () => {
  const {name} = useParams()
  const refactorName = name.replace('-', ' ')

  const [displayCheck, setDisplayCheck] = useState('visible')
  const [displayFormYes, setDisplayFormYes] = useState('hidden')
  const [displayFormNo, setDisplayFormNo] = useState('hidden')
  const [guest, setGuest] = useState(null)
  const [allGuests, setAllGuests] = useState(undefined)

  const toChangeDisplay = (check, yes, no) => {
    setDisplayCheck(check)
    setDisplayFormYes(yes)
    setDisplayFormNo(no)
  }

  const getGuests = async () => {
    try {
      const response = await axios.get(BASE_URL + `guests/`)
      setAllGuests(response.data)
      const [foundGuest] = response.data.filter((guest) => guest.id === name)
      setGuest(foundGuest)
      console.log(allGuests)
      // if(!foundGuest){
      //   goToError(navigate)
      // }
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
        <Header/>
        <h1>Confirme sua Presença</h1>
        <span className="subtitle">
          <p>Sua presença é essencial para tornar nosso casamento ainda mais <i>especial</i> e <i>memorável</i>.</p>
          <p>Por favor, confirme sua presença até <strong>31/08/2023</strong> para que possamos organizar todos os preparativos com carinho e atenção aos detalhes. </p> 
        </span>

        <div>
          <span id="check" className={displayCheck}>
            <h3>Reservamos &nbsp;<strong>{`${guest?.tickets}`} senhas</strong>&nbsp; para você.</h3>
            <p>Você poderá comparecer?</p>
            <span>
              <button className="btn checkBtn" onClick={() => toChangeDisplay('hidden', 'visible', 'hidden')}>&#10003; &nbsp;SIM</button>
              <button className="btn checkBtn" onClick={() => toChangeDisplay('hidden', 'hidden', 'visible')}>&#10007; &nbsp;NÃO</button>
            </span>
          </span>
          <span id="response-yes" className={displayFormYes}>
            <Form response={"true"} guest={guest} toChangeDisplay={toChangeDisplay}/>
          </span>
          <span id="response-no" className={displayFormNo}>
            <Form response={"false"} toChangeDisplay={toChangeDisplay}/>
          </span>
        </div>
        <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
      </Main>
    </Container>
  )
}