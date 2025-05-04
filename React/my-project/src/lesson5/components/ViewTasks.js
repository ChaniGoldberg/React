import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../redux/actions/actions';
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
                <div id='task'>
                    <p id="numTask">num task: {index+1}</p>
                    <p>task name: {task.name}</p>
                    <p >task prayority: {task.prayority}</p>
                    <button onClick={() => dispatch(removeTask(task))}>to remove task...</button>
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

                    <button onClick={() => {dispatch(addTask({ name: name, prayority: prayority }))}}>add task...</button>
                </>
            }
        </>
    );
}
export default ViewTasks;
