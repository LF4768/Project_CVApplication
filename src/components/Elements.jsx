import { useState } from "react"

function SectionComponent({name, template:Tag}) {
    const [isActive, setIsActive] = useState(true)

    const handleIsActive = () => setIsActive((prev) => !prev)

    return (
        <div>
            <h1>{name}</h1>
            <hr/>
            <Tag isActive={isActive}/>
            <ButtonComponent condition={isActive} onClick={handleIsActive} />
        </div>
    )

}


function InputComponent({placeHolder, condition, value, onChange}) {
    function handleText(e) {
        onChange(e.target.value)
    }

    return(
        <>
            {condition == 1 ? <input type="text" value={value} onChange={handleText} placeholder={"Enter " + placeHolder} /> : value}
        </>
    )
}

function ButtonComponent({onClick, condition}) {
    return <button onClick={onClick}>{condition ? "Submit": "Edit"}</button>
}

function DetailsComponent({details, placeHolder, onChange, condition}) {

    function handleText(id,newVal) {
        const updated = details.map((item) => item.id === id ? {...item, val: newVal}: item)
        onChange(updated)
    }

    function handleAddItem() {
        const newItem= {id: crypto.randomUUID(), val: ""}
        onChange([...details, newItem])
    }

    function handleRemoveItem(id) {
        onChange(details.filter((item) => item.id != id))
    }

    return (
        <ul>
            {details.map((item) => {
                return (
                    <li key={item.id}>
                        {condition ? <textarea value={item.val} placeholder={"Describe " + placeHolder} onChange={(e) => handleText(item.id, e.target.value)}></textarea> : <p>{item.val}</p>}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove {placeHolder}</button>
                    
                    </li>
                )
            })}
            <button onClick={handleAddItem}>Add {placeHolder}</button>
        </ul>
    )

}


export {InputComponent, ButtonComponent, DetailsComponent, SectionComponent}