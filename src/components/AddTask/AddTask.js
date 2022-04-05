import React from 'react';

const AddTask = ({setTask}) => {
    const handleTask = (e)=>{
       const task = e.target.value;
       setTask(task);
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