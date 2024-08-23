import styled from 'styled-components'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../App'
import axios from "axios";
import { LoadingAnimation } from '../components/LoadingAnimation'

const Main = styled.main`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  z-index: 1;
  font-family: 'Dosis', sans-serif;

  >span{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 92%;
    height: calc(100% - 80px);
    overflow-y: auto;
    padding: 0 20px;
    h1{
      font-size: 28px;
      margin-bottom: 10px;
    }
    p{
      font-size: 16px;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    
    div{
      display: flex;
      gap: 8px;
      flex-wrap: nowrap;
      width: 100%;
    }
    
    span{
      /* border: 1px solid red; */
      width: 100%;
      height: 20px;
      margin-top: 10px;
      p{
        font-size: 14px;
        text-align: left;
      }
    }

    button{
      padding: 4px;
      width: 100px;
      height: 24px;
      box-shadow: none;
      margin: 14px 0 0 0;
      cursor: ${(props) => props.add? 'auto' : 'pointer'};
      color: #f2f2f2;
    }
    .add{
      background: ${(props) => props.add? '#B4ADA2' : '#56764C'};
    }
    .delete{
      background: ${(props) => props.delete? '#B4ADA2' : '#B93112'};
    }
  }

  label{
    font-size: 12px;
    padding: 0 4px;
    margin-bottom: 16px;
    width: 100%;
    text-align: left;
  }
  input, select{
    border: 1px solid #88593C;
    height: 28px;
    background: transparent;
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 10px;
    outline: none;
  }
  input{
    width: 90%;
  }
  ul{
    width: 100%;
    height: 45%;
    overflow-y: auto;
    margin-top: 20px;
    background: #DCD9D7;
  }
  .subtitle{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 20px; */
    p{
      font-size: 11px;
      font-weight: bold;
      color: #fff;
    }

  }
`
const Li = styled.li`
  font-size: 13px;
  text-align: left;
  border-bottom: 1px solid #A6988A;
  padding: 4px;
  color: ${(props) => props.response === null? '#ba8928' : props.response === 1? "#56764C" : "#B93112"};
  a{
    text-decoration: none;
  }
`


export const NewGuest = () => {
  const [disabledAddBtn, setDisabledAddBtn] = useState(true)
  const [disabledDeleteBtn, setDisabledDeleteBtn] = useState(true)
  const [error, setError] = useState(null)
  const [tickets, setTickets] = useState(0)
  const [ticketsYes, setTicketsYes] = useState(0)
  const [ticketsNo, setTicketsNo] = useState(0)
  const [loading, setLoading] = useState(true)
  const [allGuests, setAllGuests] = useState(true)
  const [form, setForm] = useState({
    guest: "",
    tickets: 0
  })

  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  
  useEffect(() => {
    form.guest.length >= 5 ? setDisabledAddBtn(false) : setDisabledAddBtn(true)
    setDisabledDeleteBtn(true)
    setError(null)
  }, [form])

  const handleClick = (e) => {
    e.preventDefault()
    insertGuest()
  }

  const body = {
    id: form.guest,
    tickets: parseInt(form.tickets)
  }

  const insertGuest = async () => {
    try {
      await axios.post(BASE_URL + `guests/new/`, body)
      setForm({
        guest: "",
        tickets: 0
      })
      getGuests()
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)

      if(error.response.data === error1){
        setDisabledDeleteBtn(false)
        setDisabledAddBtn(true)
      }
    }
  }

  const deleteGuest = async () => {
    try {
      await axios.delete(BASE_URL + `guests/${form.guest}/`)
      setForm({
        guest: "",
        tickets: 0
      })
      getGuests()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getGuests = async () => {
    try {
      const response = await axios.get(BASE_URL + `guests/`)
      const sum = response.data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.tickets
      }, 0)

      const sumYes = response.data.filter(item => item.response === 1).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.tickets
      }, 0)

      const sumNo = response.data.filter(item => item.response === 0).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.tickets
      }, 0)

      setTickets(sum)
      setTicketsYes(sumYes)
      setTicketsNo(sumNo)
      setLoading(false)
      setAllGuests(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getGuests()
  },[])

  const error1 = "ERROR: 'id' already exists."
  const error2 = "ERROR: 'tickets' field is mandatory."

  const url = "https://leonardoelaiane.vercel.app/"
  // const url = "http://localhost:3000/"

  return (
    <Container>
      <Main add={disabledAddBtn} delete={disabledDeleteBtn}>
        <Header showBtn={false}/>
        <span>
          <h1>Lista de Convidados</h1>
          {loading?
            <LoadingAnimation height={100} width={100}/>
            :
            <>
            <form action='' method='POST' onSubmit={handleClick}>
              <label htmlFor="guest">Digite o nome do convidado e escolha a quantidade de senhas que ele vai receber. Se o convidado já estiver na sua lista, você pode exclui-lo.</label>
              <div>
                <input
                  id='guest'
                  placeholder="Nome do convidado"
                  required
                  type="text"
                  name="guest"
                  value={form.guest}
                  onChange={onChangeForm}
                  />
                <select disabled={disabledAddBtn} name="tickets" id="tickets" value={form.tickets} onChange={onChangeForm}>
                  <option value="">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <span>
                <p>{error === error1? "Este convidado já está cadastrado." : error === error2? "Informe a quantidade de senhas." : `${tickets} senhas cadastradas`}</p>
              </span>
              <div>
                <button type="submit" disabled={disabledAddBtn} className="btn add">Adicionar</button>
                <button type="button" disabled={disabledDeleteBtn} className="btn delete" onClick={() => deleteGuest()}>Excluir</button>
              </div>
            </form>
            <ul>
              {allGuests.filter(item => item.response === 1).map((valor, index) => {
                return <Li response={valor.response} key={index}><a href={url+valor.id} target='_blank'>{valor.id}</a> &sdot; {valor.tickets} {valor.tickets === 1? 'senha': 'senhas'} &sdot; {valor.guest_names}</Li>
              })}
              {allGuests.filter(item => item.response === 0).map((valor, index) => {
                return <Li response={valor.response} key={index}><a href={url+valor.id} target='_blank'>{valor.id}</a> &sdot; {valor.tickets} {valor.tickets === 1? 'senha': 'senhas'}</Li>
              })}
              {allGuests.filter(item => item.response === null).map((valor, index) => {
                return <Li response={valor.response} key={index}><a href={url+valor.id} target='_blank'>{valor.id}</a> &sdot; {valor.tickets} {valor.tickets === 1? 'senha': 'senhas'}</Li>
              }).reverse()}
            </ul>
            <div className='subtitle'>
              <p style={{background: '#56764C'}}>CONFIRMADO:&nbsp; {ticketsYes}</p>
              <p style={{background: '#B93112'}}>NEGADO: &nbsp; {ticketsNo}</p>
              <p style={{background: '#ba8928'}}>SEM RESPOSTA</p>
            </div>
            </>
          }
        </span>
      </Main>
    </Container>
  )
}