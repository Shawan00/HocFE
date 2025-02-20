import { memo, useRef, useState } from "react";

function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const countRef = useRef(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        countRef.current = countRef.current + 1;
    }
    console.log(countRef);
    console.log(inputValue);

    return (
        <>
            <input value={inputValue} onChange={handleChange}></input>
        </>
    );
}

export default memo(UseRef);