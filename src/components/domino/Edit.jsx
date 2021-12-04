import Plate from "./Plate";
import { useEffect, useState } from "react";

const Edit = (props) => {
  const [edit, setEdit] = useState({ left: 0, right: 0, id: 0 });

  useEffect(() => {
    setEdit(props.showEdit);
  }, [props.showEdit]);

  const control = (e, side) => {
    if ("L" === side) {
      setEdit({ ...edit, left: parseInt(e.target.value) });
    } else if ("R" === side) {
      setEdit({ ...edit, right: parseInt(e.target.value) });
    }
  };


  if (props.showEdit.id) {
    return (
      <div className="domino__modal">
        <div className="domino__edit">
          <div className="domino__edit__close" onClick={props.hideEdit}>
            X
          </div>
          <h2>Edit plate</h2>
          <div className="domino__edit__domino">
            <Plate plate={edit} />
          </div>

          <div className="domino__edit__selects">
            <select value={edit.left} onChange={(e) => control(e, "L")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select value={edit.right} onChange={(e) => control(e, "R")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <button className="btn1" onClick={()=>props.editPlate(edit)} >ADD</button>
          <button className="btn1" onClick={()=>props.removePlate(edit)} >DEL</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Edit;
