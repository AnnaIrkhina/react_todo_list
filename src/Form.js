import React, {useState} from 'react';
import './App.css';

function Form(props) {
    const [task, setTask] = useState('')
    const addTask = () => {
        console.log(task);
        props.onTaskCeate(task);
        setTask('');
    }


    return (
        <div class="container">

            <div className="input-group mb-3">

                <input class="form-control" type="text" onChange={e => setTask(e.target.value)} on value={task}/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" onClick={addTask} disabled={task.trim() === ''}>➕
                    </button>
                </div>

            </div>

        </div>
    );
}


export default Form;
