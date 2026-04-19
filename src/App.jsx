import { useState } from 'react'
import './App.css'
import { SectionComponent } from './components/Elements'
import Header from './components/Header.jsx'
import SummaryTemplate from './components/Summary.jsx'
import SkillsTemplate from "./components/Skills.jsx"
import ProjectsTemplate from "./components/Projects.jsx"
import ExperienceTemplate from "./components/Experience.jsx"
import EducationTemplate from './components/Education.jsx'


  const SECTION_DEFINATIONS = [
    {
      name:"SUMMARY",
      tag: SummaryTemplate,
      used: 0
    },

    {
      name:"SKILLS",
      tag: SkillsTemplate,
      used: 0
    },

    {
      name:"PROJECTS",
      tag: ProjectsTemplate,
      used: 0
    },

    {
      name:"EXPERIENCE",
      tag: ExperienceTemplate,
      used: 0
    },

    {
      name:"EDUCATION",
      tag: EducationTemplate,
      used: 0
    },
]


function App() {
  const [value, setValue] = useState('SUMMARY')
  const [addSectionButton, setAddSectionButton] = useState(0)
  const [parts,setParts] = useState([])
  const [sections, setSections] = useState(SECTION_DEFINATIONS)
  const [isActive,setIsActive] = useState(true)

  function handleIsActive() {
    setIsActive((prev) => !prev)
  }



  function handleAddPart(val) {
    let item = sections.filter((item) => item.name === val)[0]
    item = {...item, content: []}
    setParts([...parts, item])
    setSections((prev) => prev.map((item) => item.name === val ? {...item, used: 1} : item))
    handleAddSectionButton()
  }

  function handleUpdateContent(val,name) {
    setParts((prev) => prev.map((item) => item.name == name ? {...item, content: val}: item))
  }


  function handleRemovePart(val) {
    setParts((prev) => prev.filter((item) => item.name !== val))
    setSections((prev) => prev.map((item) => item.name === val ? {...item, used: 0} : item))
  }

  
  function handleAddSectionButton() {
    setValue(sections.filter((item) => item.used == 0)[0].name)
    setAddSectionButton((prev) => !prev)
  }
  console.log(parts)

  return (
    <>
    {isActive ? (
        <>
        <> 
        <Header/>
        {parts.map((part) => {  
        return (
          <div key={part.name}>
            <SectionComponent  name={part.name} template={part.tag} onChange={(e,name) => handleUpdateContent(e,name)} value={part.content}/>
            <button onClick={() => handleRemovePart(part.name)}>Remove Section</button>
          </div>
        )
      })}
      </>
      <> 
      {addSectionButton ? (
        <>
          <select  onClick={(e) => setValue(e.target.value)}>
              <option disabled>Select New Section</option>
              {sections.map((part) => {
                return part.used == 0 && <option key={part.name} value={part.name}>{part.name}</option>
              })}
          </select>

          <button onClick={() => handleAddPart(value)}>Confirm</button>
        </>
      ) : <button onClick={handleAddSectionButton}>+</button>}
      <button onClick={handleIsActive}>HEOLHGPWSE</button> 
      </>
        </>

 
        ) :<> <ShowContent parts={parts}/> <button onClick={handleIsActive}>HEOLHGPWSE</button></>}

    </>
  )
}

function ShowContent({parts}) {
  return (
    <>
      {parts.map((item) =>{
        switch(item.name) {
          case "SUMMARY":
            return( 
              <div>
                <h1>{item.name}</h1>
                <hr/>
                <p>{item.content}</p>
              </div>
            )
          case "PROJECTS":
            return (
              <div>
                <h1>{item.name}</h1>
                <hr/>
                <div>
                  {item.content.map((part) => {
                    return (
                      <>
                        <p>{part.name}</p>
                        <p>{part.languages}</p>
                        <p>{part.year}</p>
                        {part.details.map((detail) => {
                          return (
                            <ul>
                                <li>{detail.val}</li>
                            </ul>
                          )
                        })}
                      </>
                    )
                  })}
                </div>
              </div>
            )
            case "EXPERIENCE":
            return (
              <div>
                <h1>{item.name}</h1>
                <hr/>
                <div>
                  {item.content.map((part) => {
                    return (
                      <>
                        <p>{part.companyName}</p>
                        <p>{part.location}</p>
                        <p>{part.timeline}</p>
                        <p>{part.role}</p>
                        {part.details.map((detail) => {
                          return (
                            <ul>
                                <li>{detail.val}</li>
                            </ul>
                          )
                        })}
                      </>
                    )
                  })}
                </div>
              </div>
            )              
            case "SKILLS":
              return (
                <div>
                  <h1>{item.name}</h1>
                  <hr/>
                  <div>
                    {item.content.map((part) => {
                      return (
                        <>
                          <p>{part.name}</p>
                          <p>{part.desc}</p>
                        </>
                      )
                    })}
                  </div>
                </div>
              )
              case "EDUCATION":
              return (
                <div>
                  <h1>{item.name}</h1>
                  <hr/>
                  <div>
                    {item.content.map((part) => {
                      return (
                        <>
                          <p>{part.institutionName}</p>
                          <p>{part.location}</p>
                          <p>{part.timeline}</p>
                          <p>{part.desc}</p>
                          <p>{part.marks}</p>
                        </>
                      )
                    })}
                  </div>
                </div>
              )
        }
      })}
    </>
  )
}



export default App