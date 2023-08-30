import { useEffect, useState } from 'react'
import styled from 'styled-components'
import sad from '../assets/sad.png'
import happy from '../assets/happy.png'
import axios from 'axios'
import { BASE_URL } from '../App'
import { useParams } from 'react-router-dom'


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
  .form{
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
export const Form = ({response, setResponse, guest}) => {
  const {name} = useParams()
  const [form, setForm] = useState({
    ticket0: "",
    ticket1: "",
    ticket2: "",
    ticket3: "",
    ticket4: "",
    ticket5: ""
  })
  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  let guestNames = `${form.ticket0}, ${form.ticket1}, ${form.ticket2}, ${form.ticket3}, ${form.ticket4}, ${form.ticket5}`

  const editGuest = async (boolean) => {
    try {
      await axios.put(BASE_URL + `guests/${name}`, {response: boolean, guestNames: boolean? guestNames : undefined})
      setResponse(undefined)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  return(
    <Container response={response}>
      {response ? 
      <>
        <span>
          <p>Estarei com vocês! &nbsp;<img src={happy}/></p>
        </span>
        <div className='form'>
          <div>
            {new Array(guest?.tickets).fill().map((_, index) => {
              return (
                <span key={index}>
                  <label htmlFor={"ticket-"+index}>SENHA {`${index + 1}`}</label>
                  <input
                    id={"ticket-"+index}
                    placeholder={index === 0? "Seu nome" : "Acompanhante"}
                    required
                    type="text"
                    name={"ticket"+index}
                    value={form[`ticket${index}`]}
                    onChange={onChangeForm}
                  />
                </span>
              )
            })}
          </div>
          <span>
            <button type="button" className="btn cancel" onClick={() => setResponse(null)}>Cancelar</button>
            <button type="button" className="btn confirm" onClick={() => editGuest(true)}>Enviar</button>
          </span>
        </div>
      </>
      :
      <>
        <p>Eu &nbsp;<strong>NÃO</strong>&nbsp; poderei comparecer. &nbsp;<img src={sad}/></p>
        <div className='form'>
          <span>
            <button type="button" className="btn cancel" onClick={() => setResponse(null)}>Cancelar</button>
            <button type="button" className="btn confirm" onClick={() => editGuest(false)}>Enviar</button>
          </span>
        </div>
      </>
    }
    </Container>
  )
}