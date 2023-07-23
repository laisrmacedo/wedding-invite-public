import styled from 'styled-components'
import background from "../assets/background.jpeg";


const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;
  /* border: 1px solid red; */
  position: relative;
  .background{
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

export const Container = (props) => {
  return(
    <Content>
      <div className='background'>
        <img src={background}/>
      </div>
      {props.children}
    </Content>
  )
}