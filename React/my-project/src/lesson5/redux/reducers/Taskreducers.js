import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";

const initialState =
{
    tasks: [],
}

export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter((t, index) => { console.log(action.payload.id);
                action.payload.id !=t.id;
            }) };
        default:
            return state;
    }

}
