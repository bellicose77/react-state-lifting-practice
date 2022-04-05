import React, { useState } from 'react';

const AddTask = () => {
    const [taskk,setTaskk] = useState('')
    const handleTask = (e)=>{
        e.preventDefault();
       setTaskk(e.target.value)
    }
    console.log(taskk)
    return (
        <div>
            <input type="text"
             placeholder='Add task' 
             onChange={handleTask}
            >

            </input>

        </div>
    );
};

export default AddTask;