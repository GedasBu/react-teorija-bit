import { useState } from "react"


function TextArea(){
    const [text, setText]= useState('Labas')

    const changedTxt = (e)=>{
        setText(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className="m-3">
            <textarea value={text} onChange={changedTxt}>
               
            </textarea>
        </div>
    )
}

export default TextArea