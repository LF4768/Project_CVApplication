import {useState} from "react"
import {InputComponent, DetailsComponent} from "./Elements.jsx"


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
                    <div key={item.id}>
                        <b><InputComponent 
                            placeHolder="Project Name" 
                            condition={isActive} 
                            value={item.name} 
                            onChange={(val) => handleUpdateProject(item.id, val, 'name')}  
                        /></b>
                        <InputComponent 
                            placeHolder="Languages Used" 
                            condition={isActive}
                            value={item.languages}
                            onChange={(val) => handleUpdateProject(item.id, val, 'languages')}
                        />
                        <InputComponent 
                            placeHolder="Timeline"
                            condition={isActive}
                            value={item.year}
                            onChange={(val) => handleUpdateProject(item.id, val, 'year')} 
                        />

                        <ul>
                        <DetailsComponent placeHolder="Point" details={item.details} onChange={(newDetails) => handleUpdateDetails(item.id, newDetails)} condition={isActive}/> 

                        </ul>
                        
                        <button onClick={() => handleRemoveProject(item.id)}>Remove Project</button>
                    </div>
                )
            })}
            {isActive && <button onClick={handleAddProject}>Add Project</button>}
        </>
    )
}

