import { useEffect, useState } from 'react'
import styled from 'styled-components'
import sad from '../assets/sad.png'
import happy from '../assets/happy.png'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    margin-bottom: 12px;
    font-size: 16px;
  }
  img{
    width: 18px;
    height: 18px;
    filter: brightness(.9);
  }
  >span{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-family: 'Dosis', sans-serif;
    width: 100%;
    button{
      height: 24px;
    }
    div{
      /* border: 1px solid blue; */
      max-height: 170px;
      width: 100%;
      max-width: 280px;
      overflow-y: auto;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding-top: 8px;
        width: 100%;
        height: 40px;
      }
    }
    >span{
      display: flex;
      gap: 12px;
    }
  }
  label{
    position: absolute;
    top: 3px;
    left: 10px;
    font-size: 10px;
    background: #D3D2D2;
    padding: 0 4px;
  }
  input{
    border: 1px solid #88593C;
    height: 28px;
    width: 100%;
    background: transparent;
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 10px;
    outline: none;
  }
  button{
    padding: 4px;
    width: 100px;
    height: 24px;
    box-shadow: none;
    margin: 14px 0 0 0;
  }
  .cancel{
    background: #f2f2f2;
  }
  .confirm{
    color: #f2f2f2;
    background: ${(props) => props.response? '#56764C' : '#B93112'};
  }
`
export const Form = ({response, guest, toChangeDisplay}) => {
  const [form, setForm] = useState({
    ticket1: "",
    ticket2: ""
  })
  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault()
  }
  
  return(
    <Container response={JSON.parse(response)}>
      {JSON.parse(response) ? 
      <>
        <span>
          <p>Estarei com vocês! &nbsp;<img src={happy}/></p>
        </span>
        <form>
          <div>
            {new Array(guest?.tickets).fill().map((_, index) => {
              return (
                <span key={index}>
                    <label htmlFor={"ticket-"+index}>SENHA {`${index + 1}`}</label>
                    <input
                      id='ticket-1'
                      placeholder={index === 0? "Seu nome" : "Acompanhante"}
                      required
                      type="text"ƒ
                      name="ticket-1"
                      value={form.ticket1}
                      onChange={onChangeForm}
                    />
                  </span>
              )
            })}
          </div>
          <span>
            <button type="button" className="btn cancel" onClick={() => toChangeDisplay('visible', 'hidden', 'hidden')}>Cancelar</button>
            <button type="submit" className="btn confirm" data-button>Enviar</button>
          </span>
        </form>
      </>
      :
      <>
        <p>Eu &nbsp;<strong>NÃO</strong>&nbsp; poderei comparecer. &nbsp;<img src={sad}/></p>
        <form onSubmit={handleClick}>
          <span>
            <button type="button" className="btn cancel" onClick={() => toChangeDisplay('visible', 'hidden', 'hidden')}>Cancelar</button>
            <button className="btn confirm">Enviar</button>
          </span>
        </form>
      </>
    }
    </Container>
  )
}