import './App.css';
import AddTask from './components/AddTask/AddTask';
import ShowList from './components/ShowList/ShowList';
import Totaltask from './components/Totaltask/Totaltask';

function App() {
  return (
    <div className="App">
     <Totaltask></Totaltask>
     <ShowList></ShowList>
     <AddTask></AddTask>
    </div>
  );
}

export default App;
