import Plate from "./Plate";

function Bag({plates}){

    return(
        <div className="domino__bag">
            {
                plates.map((p,i) => <Plate key={i} plate={p}></Plate>)
            }
        </div>

    )
}

export default Bag;