import styled from 'styled-components'

const Content = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  position: relative;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 20px;
  padding-bottom: 10px;
  p{
    font-size: 9px;
  }
  a{
    font-size: 14px;
    font-variant: all-small-caps;
    font-family: 'Dosis';
    text-decoration: none;
    :hover{
      opacity: 0.2;
    }
    :active{
      color: black;
    }
  }
  img{
    height: 100%;
    filter: sepia(1);
  }
`

export const Footer = () => {
  return(
    <Content>
      <a href='https://laisrmacedo.vercel.app/pt' target='_blank'>Criado por Laís Macedo</a>
      <p>© 2023 &nbsp; Todos os direitos reservados.</p>
    </Content>
  )
}