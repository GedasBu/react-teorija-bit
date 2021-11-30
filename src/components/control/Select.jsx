import {useState} from "react";

function Select(){
    const [select, setSelect] = useState(1);
    const changed =e=>{
        setSelect(e.target.value);
    }

    return (
    <div className="m-3">
        

        <select value={select} onChange={changed}>
            <option value="1">Vienas</option>
            <option value="2">Du</option>
            <option value="3">Trys</option>
            <option value="4">Keturi</option>

        </select>
    </div>
    )

}
export default Select