import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({ checklist, completedTasks, setCompletedTasks }) => (
  <div className="tasks">
    <ul>
      {
        checklist.map((task) => 
          <TaskItem key={task.id} 
            task={task}
            setCompletedTasks={setCompletedTasks}
            completedTasks={completedTasks}
          >
            {task.message}
          </TaskItem>
        )
      }
    </ul>
  </div>
);

export default Tasks;