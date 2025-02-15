import { useState } from "react";

function Light() {
    const [status, setState] = useState(false);
    const handleClick = () => {
        setState(!status);
    }
    
    return (
        <>
            <button onClick={handleClick}>Bật/Tắt UseState</button>
            <div>{status? "Đèn đang bật" : "Đèn đang tắt"}</div>
        </>
    );
}

export default Light