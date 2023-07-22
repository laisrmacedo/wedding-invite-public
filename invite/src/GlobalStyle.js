import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    color: #7B5E5A;
    text-align: center;
    overflow: hidden;

    ::-webkit-scrollbar-track {
      background: transparent; 
    };
    ::-webkit-scrollbar{
      width: 8px;
    };
    ::-webkit-scrollbar-thumb {
      background: rgba(124,161,191,0.1);
      border-radius: 4px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(124,161,191,0.2); 
    }
    ::-webkit-scrollbar-thumb:active {
      background: rgba(124,161,191,0.3); 
    }
  }

  main{
    /* margin: 0 auto; */
    display: flex;
    border: 1px solid #7B5E5A;
    width: 100%;
    max-width: 420px;
    height: 100%;
    max-height: 800px;
  }

h1{
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  gap: 8px;
  width: 80%;
  font-weight: 200;
  font-size: min(10vw, 36px);
}

h2{
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 70%;
}

p{
  width: 80%;
  font-weight: 200;
  font-size: min(10vw, 18px);
}

.title{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

#animation-container{
  width: 200px;
}

  .icons{
  display: flex;
  width: 80%;
  justify-content: space-between;
}
`

export const Container = styled.div`
  background-color: #fffaeb8a;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;
  /* border: 1px solid red; */
`
