import React, { useState } from "react";
import icon from "/src/assets/icon.svg";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [
                ...prevTasks,
                { text: newTask, completed: false },
            ]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }

    function openGithub(event) {
        event.preventDefault();
        window.open("https://github.com/AE-Hertz", "_blank");
    }

    return (
        <>
            <div>
                <header>
                    <figure>
                        <img onClick={openGithub} src={icon} />
                    </figure>
                    <nav>
                        <ul>
                            <p>I</p>
                            <p>Am</p>
                            <p>Hertz</p>
                            <p> | </p>
                            <p>Abhinandan</p>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="to-do-list">
                <h1>To-Do List</h1>

                <div>
                    <input
                        type="text"
                        placeholder="Enter a Task..."
                        value={newTask}
                        onChange={handleInputChange}
                    />

                    <button className="add-button" onClick={addTask}>
                        ADD
                    </button>
                </div>

                <div className="task-columns">
                    <div className="pending-tasks">
                        <h2>Pending</h2>
                        <ol>
                            {tasks
                                .filter((task) => !task.completed)
                                .map((task, index) => (
                                    <li key={index}>
                                        <span className="text">{task.text}</span>
                                        <button
                                            className="complete-button"
                                            onClick={() => toggleTaskCompletion(index)}
                                        >
                                            ✔️
                                        </button>
                                        <button
                                            className="delete-button"
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="move-button"
                                            onClick={() => moveTaskUp(index)}
                                        >
                                            👆
                                        </button>
                                        <button
                                            className="move-button"
                                            onClick={() => moveTaskDown(index)}
                                        >
                                            👇
                                        </button>
                                    </li>
                                ))}
                        </ol>
                    </div>

                    <div className="completed-tasks">
                        <h2>Completed</h2>
                        <ol>
                            {tasks
                                .filter((task) => task.completed)
                                .map((task, index) => (
                                    <li key={index}>
                                        <span className="text" style={{ textDecoration: "line-through" }}>
                                            {task.text}
                                        </span>
                                        <button
                                            className="complete-button"
                                            onClick={() => toggleTaskCompletion(index)}
                                        >
                                            ❌
                                        </button>
                                        <button
                                            className="delete-button"
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="move-button"
                                            onClick={() => moveTaskUp(index)}
                                        >
                                            👆
                                        </button>
                                        <button
                                            className="move-button"
                                            onClick={() => moveTaskDown(index)}
                                        >
                                            👇
                                        </button>
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDoList;
