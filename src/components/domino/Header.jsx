import Sort from "./Sort"
function Header(props) {

    return(
        <div className="domino__header">
            <h1>Domino</h1>
            <Sort serverSort={props.serverSort} plates={props.plates} clientSort={props.clientSort}/> 
        </div>
       

    )

}

export default Header
