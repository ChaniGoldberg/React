import { ADD_TASK, REMOVE_TASK, RESTOR_TASK } from "../actions/actionTypes";

const initialState =
{
    tasks: [],
}
export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter((t) => action.payload !== t) };
        case RESTOR_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] }
        default:
            return state;
    }

}
//     return { ...state, tasks: state.tasks.filter((t, index) => { console.log(action.payload.id);
//action.payload.id !=index;
//}) };

// return { ...state, tasks: delete state.tasks[action.payload.id] };
//   return { ...state, tasks: state.tasks.tasks.splice(action.payload,1) };
