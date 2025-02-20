import { memo } from "react";

function Box(props) {
    console.log("render box");
    const {onCounter, onReset} = props;

    const handleClick = () => {
        onCounter();
    }

    const handleReset = () => {
        onReset();
    }
    
    return (
        <>
            <button onClick={handleClick}>Count</button>
            <button onClick={handleReset}>Reset</button>
        </>
        
    );
}

export default memo(Box); // giúp components không bị render lại nếu không thay đổi