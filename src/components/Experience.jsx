import { useState } from "react";
import { InputComponent, DetailsComponent } from "./Elements";
import "./../styles/Experience.css"


export default function ExperienceTemplate({isActive, onChange,value}) {
    const [experiences, setExperiences] = useState(value)

    function handleAddExperience() {
        const updated = [...experiences, {
            id: crypto.randomUUID(),
            companyName: "",
            location: '',
            timeline: '',
            role: '',
            details: []
        }]
        setExperiences(updated)
        onChange(updated, "EXPERIENCE")
    }

    function handleUpdateExperience(val, id,field) {
        const updated = experiences.map((item) => item.id === id ? {...item, [field]: val} : item)
        setExperiences(updated)
        onChange(updated, "EXPERIENCE")
    }
    
    function handleUpdateDetails(id, newDetails) {
        const updated = experiences.map((item) => item.id === id ?  {...item, details: newDetails} : item)
        setExperiences(updated)
        onChange(updated, "EXPERIENCE")
    }

    function handleRemoveExperience(id) {
        const updated = experiences.filter((item) => item.id !== id)
        setExperiences(updated)
        onChange(updated, "EXPERIENCE")
    }

    return (
        <div>
            {experiences.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="experiences-input">
                            <div>
                                <InputComponent placeHolder="Company Name" condition={isActive} value={item.companyName} onChange={(e) => handleUpdateExperience(e, item.id, 'companyName')} />
                                |<InputComponent placeHolder="Location" condition={isActive} value={item.location} onChange={(e) => handleUpdateExperience(e, item.id, 'location')} />
                            </div>
                            <InputComponent placeHolder="Timeline" condition={isActive} value={item.timeline} onChange={(e) => handleUpdateExperience(e, item.id, 'timeline')} />
                        </div>
                        <InputComponent placeHolder="Role" condition={isActive} value={item.role} onChange={(e) => handleUpdateExperience(e, item.id, 'role')} />
                        <DetailsComponent placeHolder="Work" details={item.details} onChange={(newDetails) => handleUpdateDetails(item.id, newDetails)} condition={isActive}/>
                        <button className="remove-experience-button" onClick={() => handleRemoveExperience(item.id)}>Remove Experience</button>
                    </div>
                )
            })}   


            {isActive && <button onClick={handleAddExperience}>Add Experience</button>}
        </div>
    )



}