import { ADD_TASK, REMOVE_TASK, RESTOR_TASK,REMOVE_FOREVER } from "./actionTypes";
export const add_task = (task) =>
(
    {
        type: ADD_TASK,
        payload: task
    }
);
export const remove_task = (task) =>
(
    {
        type: REMOVE_TASK,
        payload: task
    }
);
export const restor_task = (task) => 
(
    {
        type:RESTOR_TASK,
        payload:task
    }
)
export const remove_forever=(task)=>
(
    {
      type:REMOVE_FOREVER,
      payload:task
    }
)

   
