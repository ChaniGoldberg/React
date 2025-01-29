import { ADD_TASK } from "../actions/actionTypes";
const validatorMiddleware=store=>next=>action=>
{
    if(action.type==ADD_TASK)
    {if(action.payload.name==""||action.payload.prayority==null)
    {
       return;
    }}
    next(action);
}
export default validatorMiddleware;