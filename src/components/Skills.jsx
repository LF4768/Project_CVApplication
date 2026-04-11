import {useState} from "react"
import "./../styles/Skills.css"




export default function Skills() {
    const [isActive,setIsActive] = useState(true)

    function handleIsActive() {
        setIsActive((prev) => !prev)
    }

    return (
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <hr/>
            <SkillTemplate isActive={isActive}/>
            <button onClick={handleIsActive}>{isActive ? "Submit" : "Edit"}</button>
        </div>
    )
}


function SkillTemplate({isActive}) {
    const [skills, setSkills] = useState([])
    const [count, setCount] = useState(0)

    function skillsHandleAdd() {
        setSkills([...skills,{
            id: count,
        }])
        setCount((prev) => prev + 1)
    }

    function skillsHandleRemove(index) {
        setSkills(skills.filter((item) => item.id != index))
    }


    return(
        <>
            <ul>
                {skills.map((item) => {
                    return (
                        <li key={item.id}>
                            
                            <InputContainer isActive={isActive} placeHolder="Skill Name"/> : <InputContainer isActive={isActive} placeHolder="Skill Description"/> 
                            <br/> 
                            <button key={item.id} onClick={() => skillsHandleRemove(item.id)}>Remove Skill</button>
                        </li>
                    )
                })}
            </ul>
            {isActive == 1 && <button onClick={skillsHandleAdd}>Add Skill</button>}
        </>
    ) 


}


function InputContainer({placeHolder, isActive}) {
    const [text,setText] = useState("")

    function handleText(e) {
        setText(e.target.value)
    }

    return(
        <>
            {isActive == 1 ? <input type="text" value={text} onChange={handleText} placeholder={"Enter " + placeHolder} /> : text}
        </>
    )
}