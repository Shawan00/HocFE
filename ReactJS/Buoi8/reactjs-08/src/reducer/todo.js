const init = [
    {
        id: 1,
        content: "Công việc 1",
        complete: true
    },
    {
        id: 2,
        content: "Công việc 2",
        complete: false
    }
];

export const todoReducer = (state = init, action) => {
    let newState = state;
    switch (action.type) {
        case "CREATE":
            newState = [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    complete: false
                }
            ]
            return newState;
        default:
            return state;
    }
}