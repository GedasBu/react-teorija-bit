import { useState } from "react";
import Plate from "./Plate";

function Create({ createPlate }) {
  const [create, setCreate] = useState({ left: 0, right: 0 });

  

  const control = (e, side) => {
    if ("L" === side) {
      setCreate({ ...create, left: parseInt(e.target.value) });
    } else if ("R" === side) {
      setCreate({ ...create, right: parseInt(e.target.value) });
    }
  };

  const wrapCreatePlate = () => {
      createPlate({...create});
      setCreate({left: 0, right: 0});
  }
  return (
    <div className="domino__create">
      <h2>Create new plate</h2>
      <div className="domino__create__domino">
        <Plate plate ={create} ></Plate>
      </div>

      <div className="domino__create__selects">
        <select value={create.right.lef} onChange={(e) => control(e, "L")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select value={create.right.right} onChange={(e) => control(e, "R")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <button className="btn1" onClick={wrapCreatePlate}>
        ADD
      </button>
    </div>
  );
}

export default Create;
