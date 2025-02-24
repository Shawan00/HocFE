import { useDispatch, useSelector } from 'react-redux';
import { reset, up, down } from '../../actions/counter';

function Counter() {

    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={() => dispatch(up())}>UP</button>
            <button onClick={() => dispatch(down())}>DOWN</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    );
}

export default Counter