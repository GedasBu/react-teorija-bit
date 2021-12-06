import { useContext } from "react"
import All from "../../Contexts/All"

const Children3 = (props)=>{
    const say2 = useContext(All);

    return (
        <div className="children nr3">
                <span>{props.say}</span>
                <span>{say2}</span>
                
        </div>

    )

}

export default Children3