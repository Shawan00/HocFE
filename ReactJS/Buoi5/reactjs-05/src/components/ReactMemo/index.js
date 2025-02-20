import { useState } from "react";
import UseRef from "../UseRef";

function ReactMemo() {
    const [counter, setCounter] = useState(0);
    
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h3>React memo</h3>
            <h4>components useRef:</h4>
            <UseRef/>
            <h4>Nội dung của React_memo:</h4>
            <button onClick={handleClick}>Click</button>
            <div>Kết quả: {counter}</div>
        </>
    );
}
export default ReactMemo