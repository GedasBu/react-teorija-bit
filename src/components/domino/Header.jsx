import Filter from "./Filter"
import Sort from "./Sort"
function Header(props) {

    return(
        <div className="domino__header">
            <h1>Domino</h1>
            <Sort serverSort={props.serverSort} plates={props.plates} clientSort={props.clientSort}/> 
            <Filter plates= {props.plates} clientFilter={props.clientFilter} serverFilter={props.serverFilter}/>
        </div>
       

    )

}

export default Header
