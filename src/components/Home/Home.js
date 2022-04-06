import React, { useState } from 'react';
import Totaltask from '../Totaltask/Totaltask'
import Showlist from '../ShowList/ShowList'
import AddTask from '../AddTask/AddTask';
const Home = () => {
    const [task,setTask]=useState('');
    const handleTask = (e)=>{
        const valuee = e.target.value;
        setTask(valuee)
    }
    console.log(task)
    return (
        <div>
          <Totaltask></Totaltask>
          <Showlist></Showlist>
          <AddTask handleTask={handleTask}></AddTask>
        </div>
    );
};

export default Home;