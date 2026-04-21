import {useState} from "react"
import "./../styles/Header.css"
import { InputComponent } from "./Elements.jsx"

function HeaderTemplate({isActive, onChange,value}) 

    {
    const [data,setData] = useState({
            name: "",
            mobileNumber: "",
            email: "",
            gitHub: "" ,
            linkedIn: ""
        })

    function handleUpdateData(field,val) {
        const updated = {...data, [field]: val}
        setData(updated)
        onChange(updated, "HEADER")
    }

    return (
        <div className="outer-container">
            <InputComponent placeHolder="Name" value={value.name} condition={isActive} onChange={(e) => handleUpdateData("name" , e)}/>
            <ul className="details">
                <InputComponent placeHolder="Mobile Number" value={value.mobileNumber} condition={isActive} onChange={(e) => handleUpdateData("mobileNumber" , e)}/>
                <InputComponent placeHolder="Email ID" value={value.email} condition={isActive} onChange={(e) => handleUpdateData("email" , e)}/>
                <InputComponent placeHolder="GitHub" value={value.gitHub} condition={isActive} onChange={(e) => handleUpdateData("gitHub" , e)}/>
                <InputComponent placeHolder="LinkedIn" condition={isActive} value={value.linkedIn} onChange={(e) => handleUpdateData("linkedIn" , e)}/>
            </ul>
            <hr/>
        </div>
    )
}




export default HeaderTemplate