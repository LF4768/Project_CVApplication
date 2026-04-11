import {useState} from "react"
import "./../styles/Summary.css"

export default function Summary() {
    const [text,setText] = useState("")
    const [isActive, setIsActive] = useState(true)

    function handleText(e) {
        setText(e.target.value)
    }

    function handleIsActive() {
        setIsActive((prevValue) => !prevValue)
    }


    return (
        <div className="summary-container">
            <h1>Summary</h1>
            <hr/>
            {isActive == 1 ? (
                <>
                <textarea onChange={handleText} className="summary-text" name="desc" id="desc"></textarea>
                <button onClick={handleIsActive}>Submit</button>
                </>
            ) : (
                <>
                <p>{text}</p>
                <button onClick={handleIsActive}>Edit</button>
                </>
            )}
        </div>
    )

}