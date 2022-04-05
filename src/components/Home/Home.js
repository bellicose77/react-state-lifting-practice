import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import ShowList from '../ShowList/ShowList';
import Totaltask from '../Totaltask/Totaltask';

const Home = () => {
    const [task,setTask] = useState('')
    console.log(task);
    return (
        <div>
            <Totaltask></Totaltask>
            <ShowList></ShowList>
            <AddTask setTask={setTask}></AddTask>

        </div>
    );
};

export default Home;