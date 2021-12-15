import React from "react";

const Overview = ({arr, deleteTask}) => {
  return(
    <div>
      {/* Task list should be generated here */}
      <ul>
      {arr.map((task, index) => {
        return <li className="task-item" key={task.id}>
          {`${index + 1}. ${task.text}`}
          <span onClick={() => deleteTask(index)}>Delete</span>
          </li>
      })}
      </ul>
    </div>
  );
}

export default Overview;