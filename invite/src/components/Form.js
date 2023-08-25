import { useState } from 'react'
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
    margin-bottom: 20px;
    font-size: 18px;
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
    /* border: 1px solid blue; */
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
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      padding-top: 8px;
      width: 100%;
      max-width: 280px;
      height: 40px;
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
export const Form = ({response, toChangeDisplay}) => {
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

  class FormSubmit{
    constructor(settings){
      this.settings = settings
      this.form = document.querySelector(settings.form)
      this.formButton = document.querySelector(settings.button)
      if(this.form){
        this.url = this.form.getAttribute("action")
      }
    }

    displaySuccess(){
      this.form.innerHTML = this.settings.success
    }

    displayError(){
      this.form.innerHTML = this.settings.error
    }

    init(){
      if(this.form){
        this.formButton.addEventListener("click", () => this.displaySuccess())
        return this
      }
    }
  }

  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<p>Agradecemos o amor e o apoio que sempre recebemos. Estamos animados para celebrar nosso dia com vocês!</p>",
    error: "<h1>deu erro</h1>"
  })

  formSubmit.init()

  return(
    <Container response={JSON.parse(response)}>
      {JSON.parse(response) ? 
      <>
        <span>
          <p>Estarei com vocês! &nbsp;<img src={happy}/></p>
        </span>
        {/* https://formsubmit.co/ajax/laisrm00@gmail.com */}
        <form action='' method='POST' data-form>
          <span>
            <label htmlFor="ticket-1">SENHA 1</label>
            <input
              id='ticket-1'
              placeholder="Seu nome"
              required
              type="text"
              name="ticket-1"
              value={form.ticket1}
              onChange={onChangeForm}
              />
          </span>
          <span>
            <label for="ticket-2">SENHA 2</label>
            <input 
              id='ticket-2'
              placeholder="Acompanhante"
              required
              type="text"
              name="ticket-2"
              value={form.ticket2}
              onChange={onChangeForm}
            />
          </span>
          <button type="submit" className="btn confirm" data-button>Enviar</button>
        </form>
      </>
      :
      <>
        <p>Eu &nbsp;<strong>NÃO</strong>&nbsp; poderei comparecer. &nbsp;<img src={sad}/></p>
        <form onSubmit={handleClick}>
          <button className="btn confirm">Enviar</button>
        </form>
      </>
    }

    <button className="btn cancel" onClick={() => toChangeDisplay('visible', 'hidden', 'hidden')}>Cancelar</button>

    </Container>
  )
}