import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import TodoList from "./todos/TodoList";
// import 'bootstrap/dist/css/bootstrap.min.css';
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }
    const { todos } = useSelector((state) => state.todosReducer);
    return (<div>
        <h1>Assignment 4</h1>
        <ReduxExamples />
        <ul className="list-groip">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
        <TodoList />
        <Add a={1} b={2} />
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
    </div>);
};
export default Assignment4;