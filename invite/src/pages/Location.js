import styled from 'styled-components'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import whatsapp from '../assets/whatsapp.png'
import pin from '../assets/pin.png'

const Main = styled.main`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    >span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 20px;
      h1{
        font-size: 28px;
      }
      p{
        font-size: 16px;
      }
    }
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .mapsBtn{
      width: 30%;
    }
    a{
      text-decoration: none;
    }
`

export const Location = () => {
  return(
    <Container>
      {/* link : https://goo.gl/maps/q5gau8ej3HoRxxwW9 */}
      <Main>
        <Header/>
        <span>
          <h1>Sobre o Local</h1>
          <p>Cerimônia e Recepção</p>
        </span>
        <div>
          <a href='https://goo.gl/maps/HKb98gfvR3UpysMQ6' className='mapsBtn' target='_blank'><Button img={pin} text={'Veja no google maps'}></Button></a>
          <a className="btn wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d28460.76774691224!2d-38.2555417992961!3d-7.987047200187408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m5!1s0x7a717949cbe7603%3A0xd3b0202319a5be8!2sPol%C3%ADcia%20Rodovi%C3%A1ria%20Federal%2C%20Serra%20Talhada%20-%20PE%2C%20Brasil!3m2!1d-7.988726499999999!2d-38.2555982!4m4!2s-7.992770259681427%2C%20-38.22264376276425!3m2!1d-7.992770299999999!2d-38.2226438!5e0!3m2!1spt-BR!2sde!4v1690204046785!5m2!1spt-BR!2sde" style={{ border: 'none', width:'100%', height:'50%', filter: 'saturate(0.4)' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Main>
    </Container>
  )
}