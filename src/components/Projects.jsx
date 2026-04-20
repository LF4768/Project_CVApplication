import {useState} from "react"
import {InputComponent, DetailsComponent} from "./Elements.jsx"
import "./../styles/Projects.css"


export default function ProjectTemplate({isActive, onChange,value}) {
    const [projects,setProjects] = useState(value)

    function handleAddProject() {
        const updated = [...projects, {
            id: crypto.randomUUID(),
            details: []
        }]
        setProjects(updated)
        onChange(updated, "PROJECTS")
    }

    function handleUpdateProject(id,val,field) {
        setProjects((prevProjects) => prevProjects.map((item) => item.id === id ? {...item, [field]: val} : item))
        onChange(projects, "PROJECTS")
    }

    function handleUpdateDetails(index, newDetails) {
        setProjects((prevProjects) => prevProjects.map((item) => item.id === index ? {...item, details: newDetails} : item))
        onChange(projects, "PROJECTS")
    }


    function handleRemoveProject(index) {
        const updated = projects.filter((item) => item.id != index)
        setProjects(updated)
        onChange(updated, "PROJECTS")
    }

    
    return (
        <>  
            {projects.map((item) => {
                return (
                    <div className="projects-section" key={item.id}>
                        <div className="projects-input">
                            <div>
                                <InputComponent 
                                    placeHolder="Project Name" 
                                    condition={isActive} 
                                    value={item.name} 
                                    onChange={(val) => handleUpdateProject(item.id, val, 'name')}  
                                />
                                <InputComponent 
                                    placeHolder="Languages Used" 
                                    condition={isActive}
                                    value={item.languages}
                                    onChange={(val) => handleUpdateProject(item.id, val, 'languages')}
                                />
                            </div>
                            <InputComponent 
                                placeHolder="Timeline"
                                condition={isActive}
                                value={item.year}
                                onChange={(val) => handleUpdateProject(item.id, val, 'year')} 
                            />
                        </div>
                        <DetailsComponent placeHolder="Point" details={item.details} onChange={(newDetails) => handleUpdateDetails(item.id, newDetails)} condition={isActive}/> 
                        
                        <button className="remove-project-button" onClick={() => handleRemoveProject(item.id)}>Remove Project</button>
                    </div>
                )
            })}
            {isActive && <button onClick={handleAddProject}>Add Project</button>}
        </>
    )
}

