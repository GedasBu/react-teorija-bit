import axios from "axios";
import { useEffect, useState} from "react";
import Create from "./components/domino/Create";
import Header from "./components/domino/Header";
import Bag from "./components/domino/Bag";
import Edit from "./components/domino/Edit";

function App() {
  const [plates, setPlates] = useState([]);
  const[updated, setUpdated] = useState(Date.now())
  const [showEdit,setShowEdit] = useState({});
  const [platesMaster, setPlatesMaster] = useState([]);
  

/////////SORTS AND FILTERS////////////////
 const clientSort =plates=>{
   
   setPlates(plates)
 }
 const clientFilter =plates=>{
   
  setPlates(plates)
}

 const serverSort = sort=>{
  axios.get("http://localhost:3003/dominos/sort/"+sort).then((res) => {
    savePlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
  });
  
}

const serverFilter = filter =>{
  axios.get("http://localhost:3003/dominos/filter/"+filter).then((res) => {
    setPlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
  });

}




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
      savePlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
    });
  
  }, [updated]);

  const removePlate = plate=>{
    axios.delete("http://localhost:3003/dominos/delete/"+plate.id).then((res) => {
      setUpdated(Date.now());
   
    })
    hideModal();

  }

  const savePlates = plates =>{
    setPlates(plates);
    setPlatesMaster(plates);
  }

 

  return (
    <div className="App col top domino">
      <div className="domino__wrap">
        <Header serverSort={serverSort} plates={platesMaster} clientSort={clientSort} clientFilter={clientFilter} serverFilter={serverFilter}/>
        <Create createPlate={createPlate} />
        <Bag plates={plates} showModal={showModal}></Bag>
        <Edit removePlate={removePlate} showEdit={showEdit} hideEdit={hideModal} editPlate={editPlate}/>
      </div>
    </div>
  );
}

export default App;
