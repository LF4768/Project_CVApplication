import { useState } from "react";
import { InputComponent} from "./Elements";



export default function EducationTemplate({isActive, onChange,value}) {
    const [education,setEducation] = useState(value)

    function handleAddEducation() {
        const updated = [...education, {
            id: crypto.randomUUID(),
        }]
        setEducation(updated)
        onChange(updated, "EDUCATION")
    }
    
    function handleUpdateEducation(id, val, field) {
        setEducation((prev) => prev.map((item) => item.id === id ? {...item, [field]: val} : item))
        onChange(education,"EDUCATION")

    }

    function handleRemoveEducation(id) {
        const updated = education.filter((item) => item.id != id)
        setEducation(updated)
        onChange(updated, "EDUCATION")
    }


    return (
        <div>
            {education.map((item) =>  {
                return (
                    <div key={item.id}> 
                        <InputComponent placeHolder="Institution Name" condition={isActive} value={item.institutionName} onChange={(e) => handleUpdateEducation(item.id, e, "institutionName")} />
                        <InputComponent placeHolder="location" condition={isActive} value={item.location} onChange={(e) => handleUpdateEducation(item.id, e, "location")} />
                        <InputComponent placeHolder="passing year" condition={isActive} value={item.timeline} onChange={(e) => handleUpdateEducation(item.id, e, "timeline")} />
                        <div>
                            <InputComponent placeHolder="Description" condition={isActive} value={item.desc} onChange={(e) => handleUpdateEducation(item.id, e, "desc")} />
                        </div>
                        <div>
                            Percentage/CGPA : <InputComponent placeHolder="Marks(with format)" condition={isActive} value={item.marks} onChange={(e) => handleUpdateEducation(item.id,e,"marks")} />
                        </div>
                        <button onClick={() => handleRemoveEducation(item.id)}>Remove Education</button>
                    </div>
                )
                
            })}
            <button onClick={handleAddEducation}>Add Education </button>
        </div>
    )

}