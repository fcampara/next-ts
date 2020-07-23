import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  #__next {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
`
