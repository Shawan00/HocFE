import { useSelector } from "react-redux";

function Counter2() {
    const counter2 = useSelector(state => state.counterReducer);
    
    return (
        <>
            <div>Counter2: {counter2} </div>
        </>
    );
}

export default Counter2