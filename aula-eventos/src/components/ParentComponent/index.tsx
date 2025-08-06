import { useState } from "react";
import ChildComponent from "../ChildComponent";

export default function ParentComponent() {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [triple, setTriple] = useState(0);

    function handleNewValue(newValue : number) {
        setTriple(newValue * 3);
    }
    
    return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            {triple}
            <ChildComponent onNewValue={handleNewValue}/>

        </div>


    );
}