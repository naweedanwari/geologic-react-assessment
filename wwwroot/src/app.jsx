import React from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './components/app-container'
import 'bootstrap/dist/css/bootstrap.css'


document.onreadystatechange = () => {
  if (document.readyState !== 'loading') {
    initApplication()
  }
}

const initApplication = () => {
  const rootContainer = document.querySelector('.container')
  const root = createRoot(rootContainer)
  root.render(<AppContainer/>)
}
