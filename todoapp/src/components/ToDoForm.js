import React from "react";

export const ToDoForm = () => {
  return (
    <form className="ToDoForm">
        <input type="text" className="todo-input" placeholder="Next task"/>
        <button type="submit" className="todo-btn">Add task</button>
    </form>
  )
}