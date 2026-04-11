import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import Header from './components/Header.jsx'
import Summary from './components/Summary.jsx'
import Skills from "./components/Skills.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Summary/>
    <Skills/>
  </StrictMode>
)
