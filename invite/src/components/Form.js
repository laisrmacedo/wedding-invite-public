import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-family: 'Dosis', sans-serif;
    border: none;
    text-transform: uppercase;
    text-decoration: none;
    label{
      font-size: 8px;
    }
    input{
      width: 60%;
      min-width: 210px;
      background: transparent;
      font-size: 12px;
      border-radius: 8px;
      border: 1px solid #492203;
      padding: 4px 10px;
      outline: none;
    }
    span{
      width: 60%;
      min-width: 210px;
      height: 40px;
      display: flex;
      justify-content: end;
      align-items: end;
      gap: 16px;
    }
    button{
      padding: 4px 20px;
      box-shadow: none;
      margin: 0;
    }
    .cancel{
      background: #f2f2f2;
    }
    .confirm{
      color: #f2f2f2;
      background: #56764C;
    }
`
export const Form = (props) => {
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
    <Container>
          <label>SENHA 1</label>
          <input 
            placeholder="Seu nome"
            required
            type="text"
            name="ticket1"
            value={form.ticket1}
            onChange={onChangeForm}
            />
          <label>SENHA 2</label>
          <input 
            placeholder="Acompanhante"
            required
            type="text"
            name="ticket2"
            value={form.ticket2}
            onChange={onChangeForm}
          />
          <button onSubmit={handleClick} className="btn confirm">Enviar</button>
    </Container>
  )
}