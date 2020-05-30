import React, {useState} from 'react';
import './App.css';

function Footer(props) {

    return (
        <div class="container c">
            <div class="row">
                <div class = "col">
                    We need to do: {props.todoTask}
                </div>
                <div className="col">
                    Done: {props.doneTask}
                </div>
                <div className="col">
                    Total: {props.allTask}
                </div>
            </div>


        </div>
    );
}


export default Footer;
