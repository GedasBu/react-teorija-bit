import { useState } from "react";

function Checkbox() {
  const [checkbox, setCheckbox] = useState({
    nr1: false,
    nr2: false,
    nr3: false,
    nr4: false,
  });

  const changeBox = (nr) => {
    // const neObj = {...checkbox,
    // [nr]:!checkbox[nr] };
    // console.log(nr)
    //  console.log(neObj);
    setCheckbox({ ...checkbox, [nr]: !checkbox[nr] });
  };

  return (
    <div className="m-3">
      <div className="nice-border" onClick={() => changeBox("nr1")}>
        <span>Opcija 1</span>
        <input
          type="checkbox"
          checked={checkbox.nr1}
          onChange={() => changeBox("nr1")}
        ></input>
      </div>

      <div className="nice-border">
        <span>Opcija 2</span>
        <input
          type="checkbox"
          checked={checkbox.nr2}
          onChange={() => changeBox("nr2")}
        ></input>
      </div>
      <div className="nice-border">
        <span>Opcija 3</span>
        <input
          type="checkbox"
          checked={checkbox.nr3}
          onChange={() => changeBox("nr3")}
        ></input>
      </div>
      <div className="nice-border">
        <span>Opcija 4</span>
        <input
          type="checkbox"
          checked={checkbox.nr4}
          onChange={() => changeBox("nr4")}
        ></input>
      </div>
    </div>
  );
}

export default Checkbox;
