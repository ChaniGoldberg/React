import { useSelector, useDispatch } from 'react-redux';
import { add_task, remove_task } from '../redux/actions/actions';
import React, { useState } from 'react';
import './styles.css';
const ViewTasks = () => {
    const [name, setName] = useState("");
    const [prayority, setPrayority] = useState();
    const tasks = useSelector((state) => state.TaskReducer.tasks);
    const dispatch = useDispatch();
    return (
        <>
            <h1>hellow to your tasks list😂😍😊</h1>
            {tasks.map((task, index) => (
                <div>
                    <p>num task: {index}</p>
                    <p>task name: {task.name}</p>
                    <p >task prayority: {task.prayority}</p>
                    <button onClick={() => dispatch(remove_task(task))}>to remove task...</button>
                </div>
            ))}


            {
                <>
                    <form>
                        <label>name:</label>
                        <input id='name' onChange={(e) => setName(e.target.value)}></input>
                        <label>prayority:</label>
                        <input type='number' id='prayority' onChange={(e) => setPrayority(e.target.value)}></input>
                    </form>

                    <button onClick={() => dispatch(add_task({ name: name, prayority: prayority }))}>add task...</button>
                </>
            }
        </>
    );
}
export default ViewTasks;
