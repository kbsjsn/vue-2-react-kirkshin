import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({ updatedChecklist, setUpdatedChecklist }) => (
  <div className="tasks">
    <ul>
      {
        updatedChecklist.map((task) => 
          <TaskItem key={task.id} 
            task={task}
            updatedChecklist={updatedChecklist}
            setUpdatedChecklist={setUpdatedChecklist}
          >
            {task.message}
          </TaskItem>
        )
      }
    </ul>
  </div>
);

export default Tasks;