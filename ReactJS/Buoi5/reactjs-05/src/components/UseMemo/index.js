import { useMemo, useState } from "react";
import { pow } from "../../helper/pow";

function UseMemo() {

    const [counter, setCounter] = useState(0);
        
    const handleClick = () => {
        setCounter(counter + 1);
    }

    // lưu kết quả của hàm pow vào bộ nhớ để khi re-render thì không cần gọi lại hàm pow()
    const resultsPow = useMemo(() => {
        return pow();
    }, []);


    return (
        <>
            <h3>UseMemo</h3>
            <div>Kết quả hàm pow: {resultsPow}</div>
            <div>Kết quả: {counter}</div>
            <button onClick={handleClick}>Click</button>

        </>
    );
}

export default UseMemo