import React, { useState } from 'react';
import Tasks from './Tasks';
import Status from './Status';

// stateful component to keep track of number of completed tasks
const TasksStatus = ({ checklist }) => {
  const completed = checklist.filter(task => task.complete);
  
  const [completedTasks, setCompletedTasks] = useState(completed.length);

  return (
    <>
      <Tasks 
        checklist={checklist}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks} 
      />
      <Status 
        completedTasks={completedTasks} 
        totalTasks={checklist.length} 
      />
    </>
  )
};

export default TasksStatus;