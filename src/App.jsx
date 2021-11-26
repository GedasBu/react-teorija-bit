import React from "react";
import SmallSquare from "./components/start2/CSmallSquare";
import digitSquares from "./data/digitSquares";

class App extends React.Component {
   
   constructor(props){
       super(props);
       this.state = {border: 'yellow'}
   }
    handleClick =()=>{
        console.log('Opapa')
        this.setState({
            border: '#'+Math.floor(Math.random()*16777215).toString(16)
        });
    }

    render() {
        return (

            <div className="App">
                <div className="big-blue" style={{borderColor:this.state.border}}>
                    <div className="big-blue_button" >
                        <button className="btn1"onClick={this.handleClick}>Spausk</button>
                    </div>
                    <SmallSquare color={`crimson`} number={5}> </SmallSquare>
                    <SmallSquare color={`orange`} number={7}></SmallSquare>
                    <SmallSquare color={`red`} number={8}></SmallSquare>
                    <SmallSquare color={`brown`} number={19}></SmallSquare>
                </div>

                <div className="big-blue">
                    {
                        digitSquares.map((s, i) => <SmallSquare key={i} color={s.color} number={s.number}></SmallSquare>)
                    }
                </div>

            </div>

        )
    }

}

export default App;