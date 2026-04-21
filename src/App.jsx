import { useState } from 'react'
import './App.css'
import { SectionComponent } from './components/Elements'
import HeaderTemplate from './components/Header.jsx'
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
  const [parts,setParts] = useState([{
      name:"HEADER",
      tag: HeaderTemplate,
      content: [],
      used: 0
    },
  ])
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

  return (
    <>
    {isActive ? (
        <>
        <> 
        {parts.map((part) => {  
        return (
          <div key={part.name} className="part">
            {<SectionComponent  name={part.name == "HEADER" ? "" : part.name} template={part.tag} onChange={(e,name) => handleUpdateContent(e,name)} value={part.content}/>}
            {part.name != "HEADER" && <button className="remove-section-button" onClick={() => handleRemovePart(part.name)}>X</button>}
          </div>
        )
      })}
      </>
      <> 
      {addSectionButton ? (
        <div className='select-container'>
          <select  onClick={(e) => setValue(e.target.value)}>
              <option disabled>Select New Section</option>
              {sections.map((part) => {
                return part.used == 0 && <option key={part.name} value={part.name}>{part.name}</option>
              })}
          </select>

          <button className='confirm-button' onClick={() => handleAddPart(value)}>Confirm</button>
        </div>
      ) :  parts.length <= 5 && <button onClick={handleAddSectionButton}>+</button>}
      <button className='view-mode-button' onClick={handleIsActive}>View Mode</button> 
      </>
        </>

 
        ) :<> <ShowContent parts={parts}/> <button onClick={handleIsActive}>Edit Mode</button></>}

    </>
  )
}

function ShowContent({parts}) {
  return (
    <>
      {parts.map((item) =>{
        switch(item.name) {
          case "HEADER":
            return(
              <div key={item.content.name}  className='outer-container'>
                <h1>{item.content.name}</h1>
                <ul  className='details'>
                  {item.content.mobileNumber != "" && <li key={item.content.mobileNumber}>{item.content.mobileNumber}</li>}
                  {item.content.email != "" && <li key={item.content.email}>{item.content.email}</li>}
                  {item.content.gitHub != "" && <li key={item.content.gitHub}>{item.content.gitHub}</li>}
                  {item.content.linkedIn != "" && <li key={item.content.linkedIn}>{item.content.linkedIn}</li>}
                </ul>
              </div>
            ) 
          case "SUMMARY":
            return( 
              <div key={item.name}>
                <h1>{item.name}</h1>
                <hr/>
                <p className="summary-text">{item.content}</p>
              </div>
            )
          case "PROJECTS":
            return (
              <div key={item.name}>
                <h1>{item.name}</h1>
                <hr/>
                <div>
                  {item.content.map((part) => {
                    return (
                      <div key={part.name}>
                        <div className='projects-input'>
                          <div className='projects-info'>
                            <p className='projects-name'>{part.name}</p>  
                            {part.languages != "" && "|"} <p className='projects-languages'>{part.languages}</p> 
                          </div>
                          <p className='projects-timeline'>{part.year}</p>
                        </div>
                        {part.details.map((detail) => {
                          return (
                            <ul className='projects-details-list'>
                                {detail.val != "" && <li key={detail.val} className="projects-detail-list-item">{detail.val}</li>}
                            </ul>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
            case "EXPERIENCE":
            return (
              <div key={item.name}>
                <h1>{item.name}</h1>
                <hr/>
                <div>
                  {item.content.map((part) => {
                    return (
                      <div key={part.name}>
                        <div className='experiences-input'>
                          <div className='experiences-info'>
                            <p className='experiences-company-name'>{part.companyName}</p> {part.location != "" && "|"}
                            <p className='experiences-location'>{part.location}</p>
                          </div>
                            <p>{part.timeline}</p>
                          </div>
                          <p className='experiences-role'>{part.role}</p>
                          {part.details.map((detail) => {
                            return (
                              <ul className='experiences-details-list'>
                                  {detail.  val != "" && <li key={detail.val} className="experiences-detail-list-item">{detail.val}</li>}
                              </ul>
                            )
                          })}
                        </div>
                    )
                  })}
                </div>
              </div>
            )              
            case "SKILLS":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  <hr/>
                  <div>
                    {item.content.map((part) => {
                      return (
                        <div key={part.name} className="skills-display">
                          <p className="skills-name">{part.name}</p> {part.desc != "" && ": "}
                          <p className='skills-desc'>{part.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
              case "EDUCATION":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  <hr/>
                  <div>
                    {item.content.map((part) => {
                      return (
                        <div className="education-display">
                          <div className='education-input'>
                            <div className='education-institution-details'>
                              <p className='education-institution-name'>{part.institutionName}</p> 
                              {part.location != "" && "|"}
                              <p className='education-institution-location'>{part.location}</p>
                            </div>
                            <p>{part.timeline}</p>
                          </div>
                          <p className='education-desc'>{part.desc}</p>
                          <b><p>{part.marks != "" && "CGPA/Pecentage:"}{part.marks}</p></b>
                        </div>
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