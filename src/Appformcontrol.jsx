import TextInput from "./components/control/Textinput";
import Select from "./components/control/Select";
import TextArea from "./components/control/TextArea";
import Checkbox from "./components/control/Checkbox";
import RadioButton from "./components/control/RadioButton";
import ShowText from "./components/control/ShowText";
import { useState } from "react";




function App() {

const [showText, setShowText] = useState('....');
const newText =(text)=>{
    setShowText(text);
} 

    return (
        <div className="App col">
            <ShowText text={showText}/>
            <TextInput newText={newText}/>
            <Select/>
            <TextArea></TextArea>
            <Checkbox/>
            <RadioButton/>

        </div>
    )
}

export default App;