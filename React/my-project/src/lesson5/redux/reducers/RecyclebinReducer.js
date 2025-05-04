import { REMOVE_FOREVER, RESTOR_TASK,REMOVE_TASK } from "../actions/actionTypes";
const initialState =
{
    deletedTasks: [],
}

export const RecyclebinReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TASK:
                return { ...state, deletedTasks: [...state.deletedTasks,action.payload] };
        case RESTOR_TASK:
            return{ ...state, deletedTasks: state.deletedTasks.filter((t) => action.payload !==t)};
        case REMOVE_FOREVER:
            return{...state, deletedTasks: state.deletedTasks.filter((t) => action.payload !==t)};
            default:
            return state;
    }

}