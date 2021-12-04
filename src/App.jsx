import axios from "axios";
import { useEffect, useState } from "react";
import Create from "./components/domino/Create";
import Header from "./components/domino/Header";
import Bag from "./components/domino/Bag";
import Edit from "./components/domino/Edit";

function App() {
  const [plates, setPlates] = useState([]);
  const[updated, setUpdated] = useState(Date.now())
  const [showEdit,setShowEdit] = useState({})

  /////////Modal///////
const hideModal =()=>{
  setShowEdit({});
}
const showModal = plate =>{
  setShowEdit(plate);
}


  //////////////CRUD//////////
  const createPlate = (plate) => {
    axios.post("http://localhost:3003/dominos/add", plate).then((res) => {
      setUpdated(Date.now());
   
    });
  }

  const editPlate = (plate)=>{
    axios.put("http://localhost:3003/dominos/update/"+plate.id, plate).then((res) => {
      setUpdated(Date.now());
   
    });
    hideModal();
  }

  useEffect(() => {
    axios.get("http://localhost:3003/dominos/").then((res) => {
      setPlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
    });
  }, [updated]);

  const removePlate = plate=>{
    axios.delete("http://localhost:3003/dominos/delete/"+plate.id).then((res) => {
      setUpdated(Date.now());
   
    })
    hideModal();

  }

  

  return (
    <div className="App col top domino">
      <div className="domino__wrap">
        <Header />
        <Create createPlate={createPlate} />
        <Bag plates={plates} showModal={showModal}></Bag>
        <Edit removePlate={removePlate} showEdit={showEdit} hideEdit={hideModal} editPlate={editPlate}/>
      </div>
    </div>
  );
}

export default App;
