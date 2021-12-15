import React from "react";

const Overview = ({arr}) => {
  return(
    <div>
      {/* Task list should be generated here */}
      <ul>
      {arr.map((task) => {
        return <li key={task.id}>{task.text}</li>
      })}
      </ul>
    </div>
  );
}

export default Overview;