const AddTask = ({setTask,task}) => {
    const handleTask = (e)=>{
       const valuee = e.target.value;
       setTask(valuee);
       
    }
    console.log(task)
   
    
    return (
        <div>
            <input 
             type="text"
             value={task}
             onChange={handleTask}
             />
             </div>
    );
};

export default AddTask;