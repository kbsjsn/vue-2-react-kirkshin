import React from 'react';
import Link from 'next/link';

const Status = ({completedTasks, totalTasks}) => (
  completedTasks === totalTasks ?
    <div className="status">    
      That's it!&nbsp; 
      <Link href="/submit">
        <a>Here's how to submit your work.</a>
      </Link>
    </div>
  :
    <div className="status"> 
      Complete {completedTasks} / {totalTasks}
    </div>
  
);

export default Status;