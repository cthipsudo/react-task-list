import React from "react";

const Overview = ({arr}) => {
  return(
    <div>
      {/* Task list should be generated here */}
      <ul>
      {arr.map((task, index) => {
        return <li key={index}>{task}</li>
      })}
      </ul>
    </div>
  );
}

export default Overview;