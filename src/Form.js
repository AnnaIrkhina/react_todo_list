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

    const onChangeTaks = (e) =>{
        setTask(e.target.value);
        console.log(e.target.value);
        console.log(e.target.keyCode);

        if(e.target.keyCode === 13){
            addTask();

        }
    }
    const onKeyPessed = (e) =>{
        if(e.key==="Enter"){
            console.log("enter clicked");
            addTask();
        }
    }

    return (

        <div class="container">

            <div className="input-group mb-3">

                {/*<input class="form-control" type="text" onChange={e => setTask(e.target.value)} on value={task}/>*/}
                <input className="form-control" type="text" onChange={ e=> onChangeTaks(e)}  onKeyPress={e=>onKeyPessed(e)} on value={task} id="create_task"/>
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
