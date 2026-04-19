import {useState} from "react"
import "./../styles/Header.css"

function Header() {
    const [isActive,setIsActive] = useState(true)

    function handleIsActive() {
        setIsActive((prevValue) => !prevValue)
    }

    const contacts = [
        {
            id:0,
            type: "tel",
            holderText: "Mobile Number"
        },
        {
            id:1,
            type: "email",
            holderText: "Email ID"
        },
        {
            id:2,
            type: "text",
            holderText: "GitHub"
        },
        {
            id:3,
            type: "text",
            holderText: "LinkedIn"
        }
    ]
    return (
        <div className="outer-container">
            <Name isActive={isActive}/>
            <ul className="details">
                {contacts.map((item)=> <ContactDetails key={item.id} isActive={isActive} type={item.type} holderText={item.holderText}/>)}
            </ul>
            <button onClick={handleIsActive}>{isActive ? "Submit" : "Edit"}</button>
            <hr/>
        </div>
    )
}

function Name({isActive}) {

    const [text, setText] = useState("")

    function handleText(event) {
        setText(event.target.value)
    }



    if(isActive) {
        return (
            <div className="name-input">
                <input type="text" onChange={handleText} value={text} name="name" id="name" placeholder="Enter Your Name Here"/>
            </div>
        )
    } else {
        return (
            <div className="name-input">
                <h1 className="name">{text}</h1>
            </div>
        )
    }
}

function ContactDetails({type, holderText,isActive}) {

    const [text,setText] = useState("")

    function handleText(e) {
        setText(e.target.value)
    }


    return isActive == 0 ?  <li><span>{text}</span></li> :  <input type={type} value={text} onChange={handleText} placeholder={'Enter ' + holderText}></input>


}



export default Header