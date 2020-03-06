import React from 'react';

const TaskItem = ({ task, updatedChecklist, setUpdatedChecklist, children }) => (
  <>
    <li className={'task ' + (task.complete && 'complete')} 
      onClick={() => {
        setUpdatedChecklist(updatedChecklist.map(currTask => {
          if (currTask.id === task.id) {
            currTask.complete = !currTask.complete;
          }
          return currTask;
        }))
      }} 
    >
      {children}
    </li>
  </>
);

export default TaskItem;