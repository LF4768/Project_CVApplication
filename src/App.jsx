import { useState } from 'react'
import './App.css'
import { SectionComponent } from './components/Elements'
import Header from './components/Header.jsx'
import SummaryTemplate from './components/Summary.jsx'
import SkillsTemplate from "./components/Skills.jsx"
import ProjectsTemplate from "./components/Projects.jsx"
import ExperienceTemplate from "./components/Experience.jsx"
import EducationTemplate from './components/Education.jsx'

function App() {
  const [value, setValue] = useState('SUMMARY')
  const [parts,setParts] = useState([])


  const obj = [
    {
      name:"SUMMARY",
      tag: SummaryTemplate,
    },

    {
      name:"SKILLS",
      tag: SkillsTemplate,
    },

    {
      name:"PROJECTS",
      tag: ProjectsTemplate,
    },

    {
      name:"EXPERIENCE",
      tag: ExperienceTemplate,
    },

    {
      name:"EDUCATION",
      tag: EducationTemplate,
    },
  ]


  function handleAddPart(val) {
    setParts([...parts, {
      name: val,
      used: 1,
    }])
    console.log(parts)
  }

  return (
    <>
      <Header/>

      {/* <SectionComponent name="SUMMARY" template={SummaryTemplate} />
      <SectionComponent name="EXPERIENCE" template={ExperienceTemplate}/>
      <SectionComponent name="TECHNICAL SKILLS" template={SkillsTemplate}/>
      <SectionComponent name="PROJECTS" template={ProjectsTemplate}/>
      <SectionComponent name="EDUCATION" template={EducationTemplate}/> */}


      {parts.map((part) => {
        const template = obj.filter((item) => item.name == part.name)
        return (
          <SectionComponent key={part.name} name={template[0].name} template={template[0].tag}/>
        )
      })}
      <select  onChange={(e) => setValue(e.target.value)}>
        <option disabled>Select New Section</option>
       <option value="SUMMARY">Summary</option>
        <option value="SKILLS">Skills</option>
        <option value="PROJECTS">Projects</option>
        <option value="EDUCATION">Education</option>
        <option value="EXPERIENCE">Experience</option>
      </select>
      <button onClick={() => handleAddPart(value,)}>Confirm</button>
    </>
  )
}

export default App