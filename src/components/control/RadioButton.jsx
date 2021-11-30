import { useState } from "react"


function RadioButton(){
     const [radio,setRadio] = useState([false,false,false,false]      
     ) 

     const setChangeHandler = i=>{
        
        const newArray = radio.map(el=>false)
        newArray[i]=!radio[i];
        setRadio(newArray);
     }

    return(
        <div className="m-3">
            <input type="radio" name ="ok" checked={radio[0]} onChange={()=>setChangeHandler(0)} />
            <input type="radio" name ="ok" checked={radio[1]}onChange={()=>setChangeHandler(1)}/>
            <input type="radio" name ="ok" checked={radio[2]}onChange={()=>setChangeHandler(2)}/>
            <input type="radio" name ="ok" checked={radio[3]}onChange={()=>setChangeHandler(3)}/>

        </div>
    )
}

export default RadioButton