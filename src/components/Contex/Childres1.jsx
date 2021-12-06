import Children2 from "./Children2"

const Children1 = (props)=>{

    return (
        <div className="children nr1">
            <Children2 say={props.say}/>

        </div>

    )

}

export default Children1