import Layout from '../layouts/Default';
import TasksStatus from '../components/TasksStatus';
import axios from 'axios';
import './index.scss';

const Index = ({ checklist }) => {
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
      <TasksStatus checklist={checklist} />
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