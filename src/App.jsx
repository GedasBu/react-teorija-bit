import axios from "axios";
import { useEffect, useState } from "react";
import Create from "./components/domino/Create";
import Header from "./components/domino/Header";
import Bag from "./components/domino/Bag";

function App() {
  const [plates, setPlates] = useState([]);
  const[updated, setUpdated] = useState(Date.now())

  //////////////CRUD//////////
  const createPlate = (plate) => {
    axios.post("http://localhost:3003/dominos/add", plate).then((res) => {
      setUpdated(Date.now());
   
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3003/dominos/").then((res) => {
      setPlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
    });
  }, [updated]);

  return (
    <div className="App col top domino">
      <div className="domino__wrap">
        <Header />
        <Create createPlate={createPlate} />
        <Bag plates={plates}></Bag>
      </div>
    </div>
  );
}

export default App;
