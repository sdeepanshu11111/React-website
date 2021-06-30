import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
}

button {
  padding:1rem 2rem;
  font-size:1.1rem;
  cursor: pointer;
  font-weight: bold;
  border: 3px solid #23d997;
  background: transparent;
  transition: all 0.5s ease;

  &:hover {
    background-color: #23d997;
    color: white;


  }
}

h2 {
  font-weight: lighter;
  font-size: 3rem;

}


h3 {
  color: white; 

}

p {
  color: white;
  padding: 1.5rem 0rem;
  color: #cccccc;
  font-size: 1.2rem;
  line-height: 150%;
}


h4 {
  font-weight: bold;
  color: white;
}

a {
  font-size: 1.1rem;
}

span {
  color: #23d997;
  font-weight: bold;
}

`;

export default GlobalStyle;
