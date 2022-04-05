import React from 'react';

const AddTask = ({setTask}) => {
    const handleTask = (e)=>{
       const taskk = e.target.value;
       setTask(taskk);
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