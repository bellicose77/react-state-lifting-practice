import React, { useState } from 'react';

const AddTask = () => {
    const [taskk,setTaskk] = useState('')
    const handleTask = (e)=>{
       setTaskk(e.target.value)
    }
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