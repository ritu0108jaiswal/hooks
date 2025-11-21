import React, { useState } from "react";
import useDebounce from "../hook/useDebounce";

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSearch = useDebounce(searchQuery, 500);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSearch = list.filter((name) =>
    name.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      {/* Add Task */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search tasks..."
        className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h2 className="text-xl font-semibold mb-3">To Do List</h2>

      <ul className="list-disc pl-6 space-y-1">
        {filteredSearch.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
