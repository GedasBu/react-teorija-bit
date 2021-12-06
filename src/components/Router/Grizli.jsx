import { useParams } from "react-router"


function Grizli(){
    const {count} = useParams();

    return (
        <h2>{count} grizli</h2>
    )
}

export default Grizli