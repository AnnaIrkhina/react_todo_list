import React, {useState} from 'react';
import './App.css';

function Form(props) {
    const [task, setTask] = useState('')
    const addTask = () => {
        console.log(task);
        props.onTaskCeate(task);
        setTask('');
    }
    const onFilterClicked = (idFilter)=>{
        props.onFilterClicked(idFilter);
    }

    return (

        <div class="container">

            <div className="input-group mb-3">

                <input class="form-control" type="text" onChange={e => setTask(e.target.value)} on value={task}/>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-outline-secondary" onClick={addTask} disabled={task.trim() === ''}>➕
                    </button>
                </div>
                {/*<div className="btn-group" role="group" aria-label="Basic example">*/}
                {/*    <button className="btn btn-outline-secondary"  >💚❤️*/}
                {/*    </button>*/}
                {/*    <button className="btn btn-outline-secondary">❤️*/}
                {/*    </button>*/}
                {/*    <button className="btn btn-outline-secondary"  >💚*/}
                {/*    </button>*/}

                {/*</div>*/}
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-outline-secondary active">
                        <input type="radio" name="options" id="option1" checked onClick = {()=>onFilterClicked(0) }/>💚❤️
                    </label>
                    <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option2"  onClick = {()=>onFilterClicked(1)}/>❤️
                    </label>
                    <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option3"  onClick = {()=>onFilterClicked(2)}/>💚
                    </label>
                </div>

            </div>

        </div>
    );
}


export default Form;
