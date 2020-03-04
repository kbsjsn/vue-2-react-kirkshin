import React from 'react';

const TaskItem = ({ task, completedTasks, setCompletedTasks, children }) => (
  <>
    <li className={'task ' + (task.complete && 'complete')} 
      onClick={() => {
        task.complete = !task.complete;
        if (task.complete) {
          setCompletedTasks(completedTasks + 1);
        }
        else {
          setCompletedTasks(completedTasks - 1);
        }
      }} 
    >
      {children}
    </li>
  </>
);

export default TaskItem;