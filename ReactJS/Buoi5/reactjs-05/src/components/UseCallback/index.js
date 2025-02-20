import { useCallback, useState } from "react";
import Box from "../Box";

function UseCallback() {
    const [count, setCount] = useState(0);

    const handleCounter = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []); 
    return (
        <>
            <h3>UseCallback</h3>
            <p>Kết quả: {count}</p>
            <Box onCounter={handleCounter} onReset={handleReset}/>
        </>
    );
}

export default UseCallback