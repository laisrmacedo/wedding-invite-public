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

  >span{
    min-height: 200px;
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
  }
  
  #check{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
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
  const [response, setResponse] = useState(null)
  const [guest, setGuest] = useState(null)

  const getGuests = async () => {
    try {
      const response = await axios.get(BASE_URL + `guests/`)
      const [foundGuest] = response.data.filter((guest) => guest.id === name)
      setGuest(foundGuest)
      if(foundGuest.response !== null){
        setResponse(undefined)
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
        <Header/>
        <h1>Confirme sua Presença</h1>
        <div className="subtitle">
          <p>Sua presença é essencial para tornar nosso casamento ainda mais <i>especial</i> e <i>memorável</i>.</p>
          <p>Por favor, confirme sua presença até <strong>31/08/2023</strong> para que possamos organizar todos os preparativos com carinho e atenção aos detalhes. </p> 
        </div>
        <span id="check" className={response === null? "visible" : "hidden"}>
          <h3>Reservamos &nbsp;<strong>{`${guest?.tickets}`} senhas</strong>&nbsp; para você.</h3>
          <p>Você poderá comparecer?</p>
          <span>
            <button className="btn checkBtn" onClick={() => setResponse(true)}>&#10003; &nbsp;SIM</button>
            <button className="btn checkBtn" onClick={() => setResponse(false)}>&#10007; &nbsp;NÃO</button>
          </span>
        </span>
        <span className={response === null || response === undefined? "hidden" : "visible"}>
          <Form response={response} setResponse={setResponse} guest={guest}/>
        </span>
        <span className={response === undefined? "visible" : "hidden"}>
          <p>Agradecemos sua resposta!</p>
        </span>
        <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
      </Main>
    </Container>
  )
}