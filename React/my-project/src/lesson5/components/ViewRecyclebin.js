import {useSelector,useDispatch} from 'react-redux';
import {restorTask,removeForever} from '../redux/actions/actions';
import './styles.css';

const ViewRecyclebin=()=>
{
    const deletedTasks=useSelector((state)=>state.RecyclebinReducer.deletedTasks);
    const dispatch=useDispatch();
    // const myTasksRecycllbin=()=>
    // {
    //     deletedTasks.map((task)=>(<div>
    //         <p>{task.name}</p>
    //         <p >{task.prayority}</p>
    //         <button onClick={()=>dispatch(remove_forever(task))}>to remove task forever...</button>
    //         <button onClick={()=>dispatch(restor_task(task))}></button>
    //         </div>))
    // }
    return(
        <>
        <h1>my deleteed tasks😊😍😂</h1>
        {/* <button onClick={()=>myTasksRecycllbin()}>my tasks recycllbin...</button> */}
        {    
        deletedTasks.map((task)=>(<div>
            <h5>task name: {task.name}</h5>
            <p >task prayority: {task.prayority}</p>
            <button onClick={()=>dispatch(removeForever(task))}>to remove task forever...</button>
            <button onClick={()=>dispatch(restorTask(task))}>to restor task...</button>
            </div>))}
        </>
    );
}
export default ViewRecyclebin;