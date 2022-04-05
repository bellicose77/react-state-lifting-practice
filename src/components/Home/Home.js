import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';

const Home = () => {
    const [task,setTask] = useState('')
    return (
        <div>
            <AddTask setTask={setTask}></AddTask>
        </div>
    );
};

export default Home;