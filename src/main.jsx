import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { SectionComponent } from './components/Elements.jsx'


import Header from './components/Header.jsx'
import SummaryTemplate from './components/Summary.jsx'
import SkillsTemplate from "./components/Skills.jsx"
import ProjectsTemplate from "./components/Projects.jsx"
import ExperienceTemplate from "./components/Experience.jsx"
import EducationTemplate from './components/Education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
