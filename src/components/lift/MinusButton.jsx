import { useState } from "react";

function MinusButon({minusButtonCount, minus}) {
  

  return (
    <button className="btn1 red" onClick={minus}>
      -{minusButtonCount}
    </button>
  );
}

export default MinusButon;
