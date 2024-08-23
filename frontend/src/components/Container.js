import styled from 'styled-components'
import backgroundImage from "../assets/background.jpeg";
import { useEffect, useState } from 'react';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;
  position: relative;
  background-color: #D3D2D2;
  .transition{
    opacity: ${(props) => props.loaded? 1 : 0}; 
    transition: opacity 2s ease-in-out;
  }
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
      filter: saturate(0.5);
    }
  }
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

export const Container = (props) => {
  const [loaded, isLoaded] = useState(false)
  useEffect(() => isLoaded(true), [])

  return(
    <Content loaded={loaded}>
      <div className='background transition'>
        <img src={backgroundImage}/>
      </div>
      {props.children}
    </Content>
  )
}