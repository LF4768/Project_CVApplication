import {useState} from "react"
import "./../styles/Skills.css"
import {InputComponent, ButtonComponent} from "./Elements.jsx"



export default function Skills() {
    const [isActive,setIsActive] = useState(true)

    function handleIsActive() {
        setIsActive((prev) => !prev)
    }

    return (
        <div className="skills-container">
            <h1>TECHNICAL SKILLS</h1>
            <hr/>
            <SkillTemplate isActive={isActive}/>
            <ButtonComponent onClick={handleIsActive} condition={isActive}></ButtonComponent>
        </div>
    )
}



function SkillTemplate({isActive}) {
    const [skills, setSkills] = useState([])
    const [count, setCount] = useState(0)

    function handleAddSkill() {
        setSkills([...skills,{
            id: count,
            name: "",
            desc: ""
        }])

        setCount((prev) => prev + 1)
    }


    function handleUpdateSkill(id,field,value) {
        setSkills((prevSkills) => prevSkills.map((item) => item.id === id ? {...item, [field]: value}: item))
    }


    function handleRemoveSkill(index) {
        setSkills(skills.filter((item) => item.id != index))
    }
    
    return(
        <>
            <ul>
                {skills.map((item) => {
                    return (
                        <li key={item.id}>
                            <InputComponent  
                                condition={isActive} 
                                placeHolder="Skill Name" 
                                value={item.name} 
                                onChange={(val) => handleUpdateSkill(item.id,"name", val)}/> 
                            : <InputComponent 
                                condition={isActive} 
                                placeHolder="Skill Description"
                                value={item.desc}
                                onChange={(val)=> handleUpdateSkill(item.id, "desc", val)}/> 
                            <br/> 
                            <button key={item.id} onClick={() => handleRemoveSkill(item.id)}>Remove Skill</button>
                        </li>
                    )
                })}
            </ul>
            {isActive == 1 && <button onClick={handleAddSkill}>Add Skill</button>}
        </>
    ) 


}


