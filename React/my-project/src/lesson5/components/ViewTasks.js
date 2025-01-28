import {useSelector,useDispatch} from 'react-redux';
import { add_task,remove_task } from '../redux/actions/actions';

const ViewTasks=()=>
{
    const tasks=useSelector((state)=>state.tasks);
    const dispatch=useDispatch();
    return(
        <>
        {tasks.map((task,index)=>(
            <div>
            <p>{task.name}</p>
            <p>{task.prayority}</p>
            <p>{task.id}</p>
            <button onClick={()=>dispatch(remove_task(task.id))}>to remove task...</button>
            </div>
        ))}

        
        {
        <>
        <form>
        <label>id:</label>
          <input id='id'></input>
          <label>name:</label>
          <input id='name'></input>
          <label>prayority:</label>
          <input id='prayority'></input>
        </form>

        <button onClick={()=>dispatch(add_task({name:document.getElementById("name").value,prayority:document.getElementById("prayority").value,id:document.getElementById("id").value}))}>add task...</button>
        </>
        }
        </>
    );
}
export default ViewTasks;
