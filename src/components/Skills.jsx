import {useState} from "react"
import "./../styles/Skills.css"
import {InputComponent} from "./Elements.jsx"


export default function SkillsTemplate({isActive, onChange,value}) {
    const [skills, setSkills] = useState(value)
    const [count, setCount] = useState(0)

    function handleAddSkill() {
        const updated = [...skills, {
            id: count,
            name: "",
            desc: ""
        }]
        setSkills(updated)

        setCount((prev) => prev + 1)
        onChange(updated, "SKILLS")
    }


    function handleUpdateSkill(id,field,value) {
        const updated = skills.map((item) => item.id === id ? {...item, [field]: value}: item)
        setSkills(updated)
        onChange(updated, "SKILLS")
    }


    function handleRemoveSkill(index) {
        const updated = skills.filter(item => item.id != index)
        setSkills(updated)
        onChange(updated, "SKILLS")
    }
    return(
        <>
            <ul>
                {skills.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="skills-input">
                                <InputComponent  
                                    condition={isActive} 
                                    placeHolder="Skill Name" 
                                    value={item.name} 
                                    onChange={(val) => handleUpdateSkill(item.id,"name", val)}/> 
                                :   <InputComponent 
                                    condition={isActive} 
                                    placeHolder="Skill Description"
                                    value={item.desc}
                                    onChange={(val)=> handleUpdateSkill(item.id, "desc", val)}/> 
                            </div>
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


