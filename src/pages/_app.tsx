import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Main from 'layout/Main'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import GlobalStyle from 'theme/globalStyle'
import '@fortawesome/fontawesome-free/css/all.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    )
  }
}
