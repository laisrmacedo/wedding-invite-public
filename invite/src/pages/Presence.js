import { Container } from "../components/Container"
import styled from 'styled-components'
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"
import whatsapp from '../assets/whatsapp.png'
import fireworks from '../assets/fireworks.png'
import sad from '../assets/sad.png'

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
    }
    .check{
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
    p{
      font-size: 16px;
    }
    h3{
      text-transform: uppercase;
      font-size: 16px;
    }
`

export const Presence = () => {
  const {name, n} = useParams()

  const refactorName = name.replace('-', ' ')

  return(
    <Container>
      <Main>
        <Header/>
        <h1>Confirme sua Presença</h1>
        <span className="subtitle">
          <h3>{refactorName},</h3>
          <p>sua presença é essencial para tornar nosso casamento ainda mais <i>especial</i> e <i>memorável</i>.</p>
        </span>
          <p>Você poderá comparecer?</p>
        <span className="check">
          <button className="btn checkBtn"><img src={fireworks}/>SIM</button>
          <button className="btn checkBtn"><img src={sad}/>NÃO</button>
        </span>

        {/* <p>Gostaríamos de contar com a sua presença no dia <strong>06 de janeiro de 2024</strong> para celebrarmos juntos essa nova fase de nossas vidas.</p> */}
        <p>Por favor, confirme sua presença até [data] para que possamos organizar todos os preparativos com carinho e atenção aos detalhes. </p>

        {/* <input placeholder="Seu nome"></input>
        <input placeholder="Outra senha"></input> */}
        <p>Agradecemos desde já o amor e apoio que sempre nos deram. Mal podemos esperar para celebrar com vocês!</p>

        <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
      </Main>
    </Container>
  )
}