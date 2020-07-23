import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    outline: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  #__next {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
`
