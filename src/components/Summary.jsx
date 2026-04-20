import {useState} from "react"
import "./../styles/Summary.css"



export default function SummaryTemplate({isActive,onChange,value}) {

    function handleText(e) {
        onChange(e.target.value, "SUMMARY")
    }

    return isActive == 1 ? <textarea className="summary-area" onChange={handleText} value={value} name="desc" id="desc"></textarea> : <p>{value}</p> 
}