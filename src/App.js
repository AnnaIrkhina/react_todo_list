import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

const toDosInit = [{id: Math.random(), name: "To Do Home Work", isDone: false},
    {id: Math.random(), name: "To Do Exercise", isDone: true},
    {id: Math.random(), name: "To call mom", isDone: false},


]


const objToday = new Date();

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekday[objToday.getDay()];
const dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = months[objToday.getMonth()];
const curYear = objToday.getFullYear();

const today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;




function App() {
    const [toDos, setToDOS] = useState(toDosInit);

    const [allTask,setAllTask] = useState(3);
    const [todoTask,setTodoTask] = useState(2);
    const [doneTask,setDoneTask] = useState(1);
    const [filter, setFilter] = useState(0);

    const updateNumberOfTask = (todoArray)=>{
        setAllTask(todoArray.length);
        let counterToDo = 0;
        let counterDone = 0;
        todoArray.map(el => {el.isDone === false ? counterToDo++:counterDone++});
        setTodoTask(counterToDo);
        setDoneTask(counterDone)
        console.log(toDos);
        console.log(allTask, todoTask, counterToDo, doneTask, counterDone);
    }

    const onTaskCeate = (task) => {
        console.log(task);
        const updatedTodos = [...toDos];
        updatedTodos.push({id: Math.random(), name: task, isDone: false})
        setToDOS(updatedTodos);
        console.log(toDos);
        updateNumberOfTask(updatedTodos);
    }
    const onTaskDelete = (id) => {
        const updatedTodos = toDos.filter(el => el.id !== id);
        setToDOS(updatedTodos);
        updateNumberOfTask(updatedTodos);
        console.log(toDos);
    }
    const onTaskDone = (id) => {
        const updatedTodos = toDos.map(el => {
            if (el.id === id) return {...el, isDone: !el.isDone}
            else return el;
        })
        setToDOS(updatedTodos);
        updateNumberOfTask(updatedTodos);
        console.log(toDos);
    }
    const onTaskSave = (task) => {
        const updatedTodos = toDos.map(el => {
            if (el.id === task.id) return {...el.name = task.name};
            else return el;
        })
    }
    const onFilterClicked = (idFilter)=>{
        setFilter(idFilter);
    }

    return (
        <div class="container">
            <h1 class="c">Todo List for {today}</h1>

            <Form onTaskCeate={onTaskCeate} onFilterClicked = {onFilterClicked}/>
            <List toDos={toDos} onTaskDelete={onTaskDelete} onTaskDone={onTaskDone} onTaskSave={onTaskSave} filter = {filter}/>
            <Footer allTask={allTask} todoTask={todoTask} doneTask={doneTask}/>


        </div>
    );
}


export default App;
