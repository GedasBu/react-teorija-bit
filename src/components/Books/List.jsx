import { useContext } from "react"
import Books from "../../Contexts/Books"

const List=()=>{
    const books = useContext(Books);

    if(books.showBooks.length === 0){
        return (
          <div className="books__list__loading">
            <span className="btn-shine">Loading Books List...</span>
        </div>   
        )
       

    } 
    return(
        <div className="books__list">


        </div>
    )
}

export default List