import {useState} from "react"
import "./../styles/Summary.css"



export default function SummaryTemplate({isActive}) {
    const [text,setText] = useState("")


    function handleText(e) {
        setText(e.target.value)
    }

    return isActive == 1 ? <textarea onChange={handleText} value={text} className="summary-text" name="desc" id="desc"></textarea> : <p>{text}</p> 
}