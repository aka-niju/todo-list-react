import React from "react";

function Tasks({title, description, deleteTask, id}) {
  return (
    <div className="tasks">
      <div>
        <h4>{title}</h4>
        <span>
          {description}
        </span>
      </div>
      <button className="btn delete-btn" onClick={()=> deleteTask(id)}>Delete</button>
    </div>
  );
}

export default Tasks;
