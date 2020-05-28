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
                    props.toDos.map((el) => <li key={el.id} class="list-group-item">
                        {/*{el.isDone */}
                        {/*    ? '✔️'*/}
                        {/*    : '❗️'}*/}
                        <div className="input-group">
                            {
                                taskEdit.id === el.id
                                    ? <>
                                        <input class="form-control" type="text" value={taskEdit.name}
                                               onChange={onEditTaskChange}/>

                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary float-left" onClick={taskSave}
                                                    disabled={!taskEdit.name.trim()}>💾
                                            </button>
                                        </div>
                                    </>
                                    : <span class="form-control" onClick={() => editMode(el)}>{el.name}</span>


                            }
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary float-right"
                                        onClick={() => onTaskDone(el.id)}>{el.isDone ? '💚' : '❤️'}</button>

                                <button className="btn btn-outline-secondary float-right"
                                        onClick={() => deleteTask(el.id)}>❌
                                </button>
                            </div>
                        </div>

                        {/*</div>*/}
                        {/*// <button onClick = {()=> onTaskDone(el.id)}>{el.isDone? '✔️' :  '❗️' }</button>*/}

                    </li>)
                }
            </ul>
        </div>
    );
}

export default List;
