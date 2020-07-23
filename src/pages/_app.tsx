import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Main from 'layout/Main'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import GlobalStyle from 'theme/globalStyle'
import '@fortawesome/fontawesome-free/css/all.css'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0XTOZPRmqjj4wI_HFhZ7EzlJtJ9ojrqI&libraries=places"
          ></script>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}
