import { Container } from "../components/Container"
import styled from 'styled-components'
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"
import whatsapp from '../assets/whatsapp.png'
import happy from '../assets/happy.png'
import sad from '../assets/sad.png'
import { useState } from "react"
import { Form } from "../components/Form"

const Main = styled.main`
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 40px; 
  position: relative;
  z-index: 1;
  .subtitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 40px;
  }
  >div{
    height: 50%;
    overflow-y: auto;
    width: 100%;
  }

  #check{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    span{
      display: flex;
      justify-content: center;
      width: 100%;
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
  const {name, n} = useParams()
  const refactorName = name.replace('-', ' ')

  const checkArea = document.querySelector('#check') 
  const formYes = document.querySelector('#response-yes') 
  const formNo = document.querySelector('#response-no')

  const toCheck = (response) => {
    checkArea.setAttribute('class', 'hidden')
    if(response === 'yes'){
      formYes.setAttribute('class', 'visible')
    }else{
      formNo.setAttribute('class', 'visible')
    }
  }
  
  const toCancel = () => {
    formYes.setAttribute('class', 'hidden')
    formNo.setAttribute('class', 'hidden')
    checkArea.setAttribute('class', 'visible')
  }

  return(
    <Container>
      <Main>
        <Header/>
        <h1>Confirme sua Presença</h1>
        <span className="subtitle">
          <p>Sua presença é essencial para tornar nosso casamento ainda mais <i>especial</i> e <i>memorável</i>.</p>
        </span>

        <div>
          <span id="check" className="visible">
            <p>Você poderá comparecer?</p>
            <span>
              <button className="btn checkBtn" onClick={() => toCheck('yes')}><img src={happy}/>SIM</button>
              <button className="btn checkBtn" onClick={() => toCheck('no')}><img src={sad}/>NÃO</button>
            </span>
          </span>
          <span id="response-yes" className="hidden">
            <Form response={'yes'}/>
          </span>
          <span id="response-no" className="hidden">
            <Form response={'no'}/>
          </span>
          {/* <button onClick={() => toCancel} className="btn cancel">Cancelar</button> */}
        </div>
        {/* <p>Gostaríamos de contar com a sua presença no dia <strong>06 de janeiro de 2024</strong> para celebrarmos juntos essa nova fase de nossas vidas.</p> */}
        {/* <p>Por favor, confirme sua presença até [data] para que possamos organizar todos os preparativos com carinho e atenção aos detalhes. </p> */}


        {/* <p>Agradecemos desde já o amor e apoio que sempre nos deram. Mal podemos esperar para celebrar com vocês!</p> */}

        <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
      </Main>
    </Container>
  )
}