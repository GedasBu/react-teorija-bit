import { useEffect, useState } from "react";

function App() {
    console.log('App');
    const [color, setColor] = useState("#777");
    const [size, setSize] = useState("10px");

    
    
    useEffect(() => {
        console.log('App effect color');        
    },[color]);

    useEffect(() => {
        console.log('App effect size');        
    },[size]);
    useEffect(() => {
        console.log('App effect size and color');        
    },[size,color]);

    useEffect(() => {
        console.log('App effect READY run');        
    },[]); //atitikmuo komponenDidmount
    
    
  const randomColor = () => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  
    const randomSize = () => {
        const [maximum, minimum] = [50, 20];
        setSize(Math.floor((Math.random() * (maximum - minimum + 1)) + minimum) + 'px');
    }
    
    
  
  return (
    <div className="App col">
      <h1
        style={{
          color: color,
          fontSize: size,
        }}
      >
        USE
      </h1>
      <button className="btn1" onClick={randomColor}>
        Random
      </button>
      <button className="btn1 red" onClick={randomSize}>
        Grey
      </button>
    </div>
  );
}

export default App;
