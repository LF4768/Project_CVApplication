import {useState} from "react"
import "./../styles/Summary.css"



export default function SummaryTemplate({isActive,onChange,value}) {

    function handleText(e) {
        onChange(e.target.value, "SUMMARY")
    }

    return isActive == 1 ? <textarea onChange={handleText} value={value} className="summary-text" name="desc" id="desc"></textarea> : <p>{value}</p> 
}