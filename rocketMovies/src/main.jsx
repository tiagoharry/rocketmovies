import React from 'react'
import ReactDOM from 'react-dom/client'
//import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Routes } from './pages/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <GlobalStyles />
      <Routes />
   
  </React.StrictMode>,
)
