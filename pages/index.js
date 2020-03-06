import { useState } from 'react';
import Layout from '../layouts/Default';
import Tasks from '../components/Tasks';
import Status from '../components/Status';
import axios from 'axios';
import './index.scss';

const Index = ({ checklist }) => {
  const [updatedChecklist, setUpdatedChecklist] = useState(checklist);
  const completed = updatedChecklist.reduce((acc, task) => {
    if (task.complete) {
      return acc + 1;
    } 
    return acc;
  }, 0);

  return (
    <Layout>
      <p>
        <strong>Your objective</strong>: Convert this Codesandbox to React.
      </p> 
      <p>
        The purpose of this test is to validate experience with 
        some of the tasks you'll be encountering in your first month with
        Bukwild.  Such as:
      </p>
      <Tasks 
        updatedChecklist={updatedChecklist}
        completed={completed}
        setUpdatedChecklist={setUpdatedChecklist} 
      />
      <Status completedTasks={completed} totalTasks={updatedChecklist.length} />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const { data } = await axios.get('http://localhost:3000/checklist.json');
  
  return {
    checklist: data.map((message, index) => ({
      id: index,
      message: message,
      complete: false
    }))
  }
}

export default Index;