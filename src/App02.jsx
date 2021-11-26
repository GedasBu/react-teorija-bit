import SmallSquare from "./components/start2/SmallSquare";
import digitSquares from "./data/digitSquares";

function App() {
    return (

        <div className="App">
            <div className="big-blue">
               <SmallSquare color={`crimson`} number={`5`}> </SmallSquare>                
               <SmallSquare color={`orange`}number={`7`}></SmallSquare>
               <SmallSquare color={`red`}number={`8`}></SmallSquare>
               <SmallSquare color={`brown`}number={`19`}></SmallSquare>


            </div>

            <div className="big-blue">
                {
                    digitSquares.map((s,i) => <SmallSquare key={i} color={s.color} number={s.number}></SmallSquare>)
                }



            </div>

        </div>


    )

}

export default App;