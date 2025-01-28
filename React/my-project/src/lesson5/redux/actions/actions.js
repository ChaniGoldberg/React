import { ADD_TASK,REMOVE_TASK } from "./actionTypes";
export const add_task=(taskName)=>
(
    {
        type:ADD_TASK,
        payload:taskName
    }
);
export const remove_task=(id)=>
(
    {
       type:REMOVE_TASK,
       payload:id
    }
);