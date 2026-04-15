import {useState} from "react"
import {InputComponent, ButtonComponent, DetailsComponent} from "./Elements.jsx"


export default function Projects() {
    const [isActive, setIsActive] = useState(true)

    function handleIsActive() {
        setIsActive((prev) => !prev)
    }

    return (
        <div>
            <h1>PROJECTS</h1>
            <hr/>
            <ProjectTemplate isActive={isActive}/>
            <ButtonComponent onClick={handleIsActive} condition={isActive}/>
        </div>
    )
}   

function ProjectTemplate({isActive}) {
    const [projects,setProjects] = useState([])

    function handleAddProject() {
        setProjects([...projects, {
            id: crypto.randomUUID(),
            details: []
        }])
    }

    function handleUpdateProject(id,val,field) {
        setProjects((prevProjects) => prevProjects.map((item) => item.id === id ? {...item, [field]: val} : item))
    }

    function handleUpdateDetails(index, newDetails) {
        setProjects((prevProjects) => prevProjects.map((item) => item.id === index ? {...item, details: newDetails} : item))
    }


    function handleRemoveProject(index) {
        setProjects(projects.filter((item) => item.id != index))
    }
    console.log(projects)
    return (
        <>  
            {projects.map((item) => {
                return (
                    <div key={item.id}>
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

