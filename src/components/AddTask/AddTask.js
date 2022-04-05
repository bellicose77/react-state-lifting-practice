const AddTask = ({setTask,task}) => {
    const handleTask = (e)=>{
        e.preventDefault()
       const valuee = e.target.value;
       setTask(valuee);
       
    }
    console.log(task)
   
    
    return (
        <div>
            <form>
            <input 
             type="text"
             value={task}
             onChange={(e)=>{handleTask(e)}}
             />
            </form>
            
             </div>
    );
};

export default AddTask;