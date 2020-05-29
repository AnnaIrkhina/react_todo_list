import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";

const toDosInit = [{id: Math.random(), name: "To Do Home Work", isDone: false},
    {id: Math.random(), name: "To Do Exercise", isDone: true},
    {id: Math.random(), name: "To call mom", isDone: false},


]


const objToday = new Date();

const    weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const    dayOfWeek = weekday[objToday.getDay()];
const    dayOfMonth =  ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate();
const    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const    curMonth = months[objToday.getMonth()];
const    curYear = objToday.getFullYear();

const today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;



function App() {
    const [toDos, setToDOS] = useState(toDosInit);
    const onTaskCeate = (task) => {
        console.log(task);
        const updatedTodos = [...toDos];
        updatedTodos.push({id: Math.random(), name: task, isDone: false})
        setToDOS(updatedTodos);
    }
    const onTaskDelete = (id) => {
        const updatedTodos = toDos.filter(el => el.id !== id);
        setToDOS(updatedTodos);
    }
    const onTaskDone = (id) => {
        const updatedTodos = toDos.map(el => {
            if (el.id === id) return {...el, isDone: !el.isDone}
            else return el;
        })
        setToDOS(updatedTodos);
    }
    const onTaskSave = (task) => {
        const updatedTodos = toDos.map(el => {
            if (el.id === task.id) return {...el.name = task.name};
            else return el;
        })
    }

    return (
        <div class="container">
            <h1 class="c">Todo List for {today}</h1>

            <Form onTaskCeate={onTaskCeate}/>
            <List toDos={toDos} onTaskDelete={onTaskDelete} onTaskDone={onTaskDone} onTaskSave={onTaskSave}/>


        </div>
    );
}


export default App;
