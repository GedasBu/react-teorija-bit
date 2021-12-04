import { useEffect, useState } from "react";

const Sort = (props) => {
  const [sortC, setSortC] = useState("N");
  const [sortS, setSortS] = useState('N');

  const controlS = e =>{
    setSortS(e.target.value);
    props.serverSort(e.target.value)
  }

  const controlC = (e) => {
    setSortC(e.target.value);

    let platesCopy = [...props.plates];

    switch (e.target.value) {
      case "LA":
        platesCopy.sort((a, b) => {
          return a.left - b.left;
        });

        break;
      case "LD":
        platesCopy.sort((a, b) => {
          return b.left - a.left;
        });

        break;
      case "RA":
        platesCopy.sort((a, b) => {
          return a.right - b.right;
        });

        break;
      case "RD":
        platesCopy.sort((a, b) => {
          return b.right - a.right;
        });

        break;
      case "BA":
        platesCopy.sort((a, b) => {
          return a.left + a.right - b.left - b.right;
        });

        break;
      case "BD":
        platesCopy.sort((a, b) => {
          return b.left + b.right - a.left - a.right;
        });

        break;

      default:
    }

    props.clientSort(platesCopy);
  };

  //   useEffect(() => {
  //     console.log(props.plates);
  //   }, [sortC]);

  return (
    <div>
      <div className="domino__header__sort">
        <h2>Client sort</h2>
        <select value={sortC} onChange={controlC}>
          <option value="N">Sort plates</option>
          <option value="LA">Left side ASC</option>
          <option value="LD">Left side DSC</option>
          <option value="RA">Right side ASC</option>
          <option value="RD">Right side DSC</option>
          <option value="BA">Both side ASC</option>
          <option value="BD">Both side DSC</option>
        </select>
      </div>
      <div className="domino__header__sort">
        <h2>Server sort</h2>
        <select value={sortS} onChange={controlS}>
          <option value="N">Sort plates</option>
          <option value="LA">Left side ASC</option>
          <option value="LD">Left side DSC</option>
          <option value="RA">Right side ASC</option>
          <option value="RD">Right side DSC</option>
          <option value="BA">Both side ASC</option>
          <option value="BD">Both side DSC</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
