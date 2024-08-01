import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-Archivo: "Archivo", sans-serif;
    --font-Inter: "Inter", sans-serif;
    --font-Roboto: "Roboto", sans-serif;
    
    font-size: 62.5%;
    
    @media (max-width: 768px) {
          font-size: 52.5%;
    }
  }

  body {
    color: ${(props) => props.theme['Pale-Silver']};
    background: ${(props) => props.theme['Dark-Space-Blue']};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  body, input, button, a {
    font-family: var(--font-Inter);
    font-size: 1.6rem;
    font-weight: 400;
  }

  &:focus {
      outline: none;
      box-shadow: none;
    }

      /* Para navegadores Webkit (Chrome, Safari, Edge) */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para garantir compatibilidade com o estilo do Edge (baseado no Chromium) */
  input[type='number']::-ms-outer-spin-button,
  input[type='number']::-ms-inner-spin-button {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    
    @media (max-width: 768px) {
      width: 5px;
      height: 5px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['Chinese-White']};
    border-radius: 8px;
  }
`
