import React, { useState } from "react";
import "./App.css";
import { ToDoWrapper } from "./components/ToDoWrapper";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter new task!");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setItems((list) => [...list, item]);
      setNewItem("");
    }
  }

  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>ToDo List App</h1>

      <input
        type="text"
        placeholder="Add task..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
