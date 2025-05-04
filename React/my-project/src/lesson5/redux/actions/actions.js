import { ADD_TASK, REMOVE_TASK, RESTOR_TASK,REMOVE_FOREVER } from "./actionTypes";
export const addTask = (task) =>
(
    {
        type: ADD_TASK,
        payload: task
    }
);
export const removeTask = (task) =>
(
    {
        type: REMOVE_TASK,
        payload: task
    }
);
export const restorTask = (task) => 
(
    {
        type:RESTOR_TASK,
        payload:task
    }
)
export const removeForever=(task)=>
(
    {
      type:REMOVE_FOREVER,
      payload:task
    }
)

   
