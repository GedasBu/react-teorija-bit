import { Children, useState } from "react"
import Children1 from "./components/Contex/Childres1";
import All from "./Contexts/All";

const App = ()=>{

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    return (
      <All.Provider value={input2}>
        <div className="App col">
          <h1>Hello,</h1>
          <input
            type="text"
            onChange={(e) => setInput1(e.target.value)}
            value={input1}
          ></input>
          <input
            type="text"
            onChange={(e) => setInput2(e.target.value)}
            value={input2}
          ></input>
          <Children1 say={input1}></Children1>
        </div>
      </All.Provider>
    );
}

export default App