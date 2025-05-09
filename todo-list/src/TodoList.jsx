import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') return; //prevents entering an empty task
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const removeTask = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const toggleCheckbox = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <div className='border-b-slate-300 border-b-2'>
        <h2 className='text-5xl font-bold text-center p-3'>Todo List</h2>
      </div>

      {/* Input for custom task */}
      <div className="flex justify-center pt-6">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          className="border p-3 rounded-md w-64 mr-4"
        />
        <button
          onClick={addTask}
          className="bg-green-200 p-3 rounded-xl border border-green-400 hover:bg-green-500"
        >
          Add Task
        </button>
        <button
          onClick={removeTask}
          className="bg-red-200 p-3 ml-4 rounded-xl border border-red-400 hover:bg-red-500"
        >
          Remove Task
        </button>
      </div>

      {/* Task list */}
      <div className="flex flex-col items-center pt-6">
        {tasks.map(task => (
          <label
            key={task.id}
            className="flex items-center space-x-3 mb-2"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCheckbox(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={task.completed ? "line-through text-gray-500" : "text-lg"}>
              {task.text}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}

export default Todo;
