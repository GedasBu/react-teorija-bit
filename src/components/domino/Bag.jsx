import Plate from "./Plate";

function Bag({plates, showModal}){

    return(
        <div className="domino__bag">
            {
                plates.map((p,i) => <Plate key={i} plate={p} showModal={showModal}></Plate>)
            }
        </div>

    )
}

export default Bag;