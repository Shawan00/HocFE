import {useReducer} from 'react'

const reducer = (state, action) => {
    console.log(state, action);
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "RESET": 
            return 0;
        default:
            return state;
    }
}
function UseReducer() {
    const [counter, dispatchCounter] = useReducer(reducer, 0);

    return (
        <>
            <div>Kết quả: {counter}</div>
            <button onClick={() => dispatchCounter("UP")}>UP</button>
            <button onClick={() => dispatchCounter("DOWN")}>DOWN</button>
            <button onClick={() => dispatchCounter("RESET")}>RESET</button>
        </>
    );
}

export default UseReducer