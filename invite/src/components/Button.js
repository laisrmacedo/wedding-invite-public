import styled from 'styled-components'

const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 30%;
  cursor: pointer;

  img{
    height: 32px;
    opacity: 0.2;
    /* border: 1px solid red; */
  }
  p{
    font-weight: 200;
    font-size: min(10vw, 10px);
    text-transform: uppercase;
  }
`

export const Button = (props) => {
  return(
    <Span onClick={props.onClick}>
      <img src={props.img}/>
      <p>{props.text}</p>
    </Span>
  )
}