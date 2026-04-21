import { useState } from "react";
import { InputComponent} from "./Elements";
import "./../styles/Education.css"


export default function EducationTemplate({isActive, onChange,value}) {
    const [education,setEducation] = useState(value)

    function handleAddEducation() {
        const updated = [...education, {
            id: crypto.randomUUID(),
            institutionName: "",
            location: "",
            timeline:"",
            desc: "",
            marks: ""
        }]
        setEducation(updated)
        onChange(updated, "EDUCATION")
    }
    
    function handleUpdateEducation(id, val, field) {
        const updated = education.map((item) => item.id === id ? {...item, [field]: val} : item)
        setEducation((prev) => prev.map((item) => item.id === id ? {...item, [field]: val} : item))
        onChange(updated,"EDUCATION")
        
    }
    
    function handleRemoveEducation(id) {
        const updated = education.filter((item) => item.id != id)
        setEducation(updated)
        onChange(updated, "EDUCATION")
    }


    return (
        <>
            {education.map((item) =>  {
                return (
                    <div className="education-section" key={item.id}> 
                        <div className="education-input">
                            <div>
                                <InputComponent placeHolder="Institution Name" condition={isActive} value={item.institutionName} onChange={(e) => handleUpdateEducation(item.id, e, "institutionName")} />
                                |<InputComponent placeHolder="location" condition={isActive} value={item.location} onChange={(e) => handleUpdateEducation(item.id, e, "location")} />
                            </div>
                            <InputComponent placeHolder="start year - end year" condition={isActive} value={item.timeline} onChange={(e) => handleUpdateEducation(item.id, e, "timeline")} />
                        </div>
                        <div className="education-desc">
                            <InputComponent placeHolder="Description" condition={isActive} value={item.desc} onChange={(e) => handleUpdateEducation(item.id, e, "desc")} />
                        </div>
                        <div className="education-marks">
                            Percentage/CGPA : <InputComponent placeHolder="Marks(7.5/10)" condition={isActive} value={item.marks} onChange={(e) => handleUpdateEducation(item.id,e,"marks")} />
                        </div>
                        <button className="remove-education-button" onClick={() => handleRemoveEducation(item.id)}>Remove Education</button>
                    </div>
                )
                
            })}
            <button onClick={handleAddEducation}>Add Education </button>
        </>
    )

}