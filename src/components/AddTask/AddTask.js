const AddTask = ({task,setTask}) => {
    const handleTask = (e)=>{
       
       const valuee = e.target.value;
       console.log(valuee)
       setTask(valuee)
      
       
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    //console.log(task)
   
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
             type="text"
             onChange={(e)=>{handleTask(e)}}
             />
             <button>Submit</button>
            </form>
            
             </div>
    );
};

export default AddTask;