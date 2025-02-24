import { useDispatch, useSelector } from "react-redux";
import { createTodo } from '../../actions/todo';
import { useRef } from "react";

function ToDo() {
    const todoItem = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = e.target.elements.newTodo.value;
        if (result !== "") {
            console.log(result);
            dispatch(createTodo(result));
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    return (
        <>
            <h3>Todo list</h3>
            <div className="todo">
                <form className="todo__input" onSubmit={handleSubmit}>
                    <input type="text" name="newTodo" ref={inputRef}></input>
                    <button type="submit">Create</button>
                </form>
                <div className="todo__list">
                    {todoItem.map((item) => (
                        <div key={item.id}>
                            <span>{item.content}</span>                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ToDo