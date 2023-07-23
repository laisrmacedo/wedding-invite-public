import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    display: flex;
    border: 1px solid #7B5E5A;
    width: 100%;
    max-width: 420px;
    height: 83vh;
  }

h1{
  /* text-transform: uppercase; */
  font-weight: 200;
  font-family: 'Rouge Script', cursive;
  /* font-family: 'Great Vibes', cursive; */
}

h2{
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 70%;
  font-family: 'Dosis', sans-serif;
}
h3{
  font-family: 'Dosis', sans-serif;
}

p{
  width: 80%;
  font-weight: 200;
  font-size: min(10vw, 18px);
  font-family: 'Dosis', sans-serif;
}

.wppBtn{
  font-family: 'Dosis', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 160px;
  border: 1px solid #7B5E5A;
  border-radius: 8px;
  height: 30px;
  padding: 8px 20px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  img{
    height: 100%;
    filter: brightness(0.5);
  }
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
