import React from "react";

class DigitSquare extends React.Component {

    constructor(props){
        super(props);
        this.state={number: this.props.number}
    }

    increaseNumber = ()=>{
        // this.setState({
        //     number: this.state.number+1
        // })
        this.setState(state => ({
            number: this.state.number+1
        }));
    }
    render() {
        return (
            <div className='big-blue_small_digit' onClick = {this.increaseNumber}>
                {this.state.number}
            </div>
        )

    }

}

export default DigitSquare;