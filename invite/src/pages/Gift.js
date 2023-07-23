import styled from 'styled-components'
import { Container } from '../GlobalStyle'
import { Header } from '../components/Header'
import whatsapp from '../assets/whatsapp.png'

const Main = styled.main`
    flex-direction: column;
    gap: 40px;
    align-items: center;
    padding-bottom: 40px; 
    p{
      font-size: 16px;
    }
    >div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      /* gap: 8px; */
      h1{
        font-size: 20px;
      }
      h3{
        font-size: 20px;
      }
      span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 20px;
      gap: 8px;
      h1{
        font-size: 20px;
      }
    }
    }
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 160px;
      border: 1px solid #7B5E5A;
      border-radius: 8px;
      height: 30px;
      padding: 8px 20px;
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;

      img{
        height: 100%;
        filter: brightness(0.5);
      }
    }
`

export const Gift = () => {
  return(
    <Container>
      {/* link : https://goo.gl/maps/q5gau8ej3HoRxxwW9 */}
      <Main>
        <Header/>
        <div>
          <h1>Sobre presentes</h1>
          <p>Pensando na praticidade e conveniência, gostaríamos de sugerir que o envio de presentes seja em forma de <strong>transferência via Pix</strong>. Essa opção facilitará o processo para todos e nos permitirá utilizar seu presente de maneira significativa em nossa nova vida juntos, já que estamos nos mudando para Guarulhos-SP.</p>
          <p>Queremos enfatizar que valorizamos sua presença e apoio acima de qualquer presente material.</p>
          <span>
            <h1>Chave do pix:</h1>
            <h3>lairmacedo@outlook.com</h3>
            <p>Laiane Rodrigues Macedo </p>
          </span>
          <p style={{fontStyle: 'italic'}}>Com amor, Leonardo e Laiane.</p>
          <a href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
        </div>
      </Main>
    </Container>
  )
}