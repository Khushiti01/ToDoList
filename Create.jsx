import React, { useState } from "react";
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
    setTask(''); // Clear the input field after submitting
  };

  return (
    <div className="create_form">
      <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;