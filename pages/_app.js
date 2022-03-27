import * as React from 'react'
import '../components/accordion.css'
import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'



const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
