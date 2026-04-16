import { useState } from "react";
import { InputComponent, DetailsComponent } from "./Elements";


export default function ExperienceTemplate({isActive}) {
    const [experiences, setExperiences] = useState([])

    function handleAddExperience() {
        setExperiences([...experiences, {
            id: crypto.randomUUID(),
            details: []
        }])
    }

    function handleUpdateExperience(val, id,field) {
        setExperiences((prev) => prev.map((item) => item.id === id ? {...item, [field]: val} : item))
    }
    
    function handleUpdateDetails(id, newDetails) {
        setExperiences((prev) => prev.map((item) => item.id === id ?  {...item, details: newDetails} : item))
    }

    function handleRemoveExperience(id) {
        setExperiences((prev) => prev.filter((item) => item.id !== id))
    }


    return (
        <div>
            {experiences.map((item) => {
                return (
                    <div key={item.id}>
                        <InputComponent placeHolder="Company Name" condition={isActive} value={item.companyName} onChange={(e) => handleUpdateExperience(e, item.id, 'companyName')} />
                        <InputComponent placeHolder="Location" condition={isActive} value={item.location} onChange={(e) => handleUpdateExperience(e, item.id, 'location')} />
                        <InputComponent placeHolder="Timeline" condition={isActive} value={item.timeline} onChange={(e) => handleUpdateExperience(e, item.id, 'timeline')} />
                        <div>
                            <InputComponent placeHolder="Role" condition={isActive} value={item.role} onChange={(e) => handleUpdateExperience(e, item.id, 'role')} />
                        </div>
                        <DetailsComponent placeHolder="Work" details={item.details} onChange={(newDetails) => handleUpdateDetails(item.id, newDetails)} condition={isActive}/>
                        <button onClick={() => handleRemoveExperience(item.id)}>Remove Experience</button>
                    </div>
                )
            })}   


            {isActive && <button onClick={handleAddExperience}>Add Experience</button>}
        </div>
    )



}