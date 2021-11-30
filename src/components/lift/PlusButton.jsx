import {useState} from "react"
function PlusButton({plusButtonCount,plus}){
    

    return (
        <button className="btn1" onClick={plus}>+{plusButtonCount}</button>
    )
}

export default PlusButton