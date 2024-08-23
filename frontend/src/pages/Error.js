import styled from 'styled-components'
import { Container } from "../components/Container"
import whatsapp from '../assets/whatsapp.png'

const Main = styled.main`
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export const Error = () => {
  return(
    <Container>
      <Main>
        <h3>OPS!</h3>
        <p>Algo está errado.</p>
        <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
      </Main>
    </Container>
  )
}


