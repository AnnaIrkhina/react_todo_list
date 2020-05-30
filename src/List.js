import React, {useState} from 'react';
import "./App.css"


function List(props) {

    const deleteTask = (id) => {

        console.log('Delete ' + id);
        props.onTaskDelete(id)

    }
    const onTaskDone = (id) => {
        console.log('Done ' + id);
        props.onTaskDone(id);

    }
    const [taskEdit, setTaskEdit] = useState({})
    const editMode = (task) => {

        setTaskEdit(task);
        console.log(task);
    }
    const onEditTaskChange = (e) => {
        console.log('OnChange ' + e.target.value);
        setTaskEdit({...taskEdit, name: e.target.value});
    }
    const taskSave = () => {
        props.onTaskSave(taskEdit);
        setTaskEdit({});
    }

    return (
        <div class="container">
            <ul  class="list-group">
                {
                    props.toDos.map((el) =>
                        props.filter===0 || (props.filter === 1 && el.isDone === false) || (props.filter ===2 && el.isDone === true)
                        ?
                        <li key={el.id} class="list-group-item">

                        <div className="input-group">
                            {
                                taskEdit.id === el.id && el.isDone === false
                                    ? <>
                                        <input class="form-control" type="text" value={taskEdit.name}
                                               onChange={onEditTaskChange}/>

                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button class="btn btn-outline-secondary " onClick={taskSave}
                                                    disabled={!taskEdit.name.trim()}>💾
                                            </button>
                                        </div>
                                    </>
                                    : <span class= {el.isDone === false ? "form-control": "form-control c"}  onClick={() => editMode(el)}>{el.name}</span>


                            }
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button class="btn btn-outline-secondary"
                                        onClick={() => onTaskDone(el.id)}>{el.isDone ? '💚' : '❤️'}</button>

                                <button class="btn btn-outline-secondary"
                                        onClick={() => deleteTask(el.id)}>❌
                                </button>
                            </div>
                        </div>

                        {/*</div>*/}
                        {/*// <button onClick = {()=> onTaskDone(el.id)}>{el.isDone? '✔️' :  '❗️' }</button>*/}

                    </li>
                    :"")
                }
            </ul>
        </div>
    );
}

export default List;
