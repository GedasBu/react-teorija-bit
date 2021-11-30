import { useState } from "react"


function TextInput(props){
    const [text,newText]= useState("labas");
    const handleInput=(event)=>{
        newText(event.target.value);
        console.log(event.target.value)       
    }

    return(
        <div className="m-3">
            <input type="text"  onChange={handleInput} value={text}/>
            <button className="btn1" onClick={()=>props.newText(text)}>GO</button>
        </div>
    )
}

export default TextInput