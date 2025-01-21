import { useState } from 'react';
import './todo.css';
import Create from './Create';

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <h2 className="Main-Todo">Your Todo List</h2>
      <Create setTodos={setTodos} />
      {
        todos.length === 0 
        ? (
          <div className="todo-list no-record">
            <h3>No Record</h3>
          </div>
        ) : (
          <div className="todo-list">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                {todo}
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}

export default Home;