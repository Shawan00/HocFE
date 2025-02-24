export const createTodo = (value) => {
    return {
        type: "CREATE",
        content: value
    };
}
export const completeTodo = () => {
    return {
        type: "COMPLETE"
    };
}
export const deleteTodo = () => {
    return {
        type: "DELETE"
    };
}
