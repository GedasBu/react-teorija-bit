import { useEffect, useState } from "react";

const Filter = (props) => {
  const [filterC, setFilterC] = useState("N");
  const [filterS, setFilterS] = useState("N");


  const controlS =(e)=>{ 
      setFilterS(e.target.value);
      props.serverFilter(e.target.value)
  }
  
  const controlC = (e) => {
      console.log('Filter',props.plate);
    setFilterC(e.target.value);

    let platesCopy = [...props.plates];
    switch (e.target.value) {
      case "SS":
        platesCopy = platesCopy.filter((p) => p.left === p.right);
        break;

      case "ES":
        platesCopy = platesCopy.filter((p) => !(p.left * p.right));
        break;
      default:
    }
    props.clientFilter(platesCopy);
  };

  return (
    <>
      <div className="domino__header__sort">
        <h2>Client filter</h2>
        <select value={filterC} onChange={controlC}>
          <option value="N">Filter plates</option>
          <option value="SS">Filter same side</option>
          <option value="ES">Filter emtpty</option>
        </select>
      </div>
      <div className="domino__header__sort">
        <h2>Server filter</h2>
        <select value={filterS} onChange={controlS}>
          <option value="N">Filter plates</option>
          <option value="SS">Filter same side</option>
          <option value="ES">Filter emtpty</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
