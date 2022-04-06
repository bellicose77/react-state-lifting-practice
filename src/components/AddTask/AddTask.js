const AddTask = ({handleTask}) => {
   
    
    return (
        <div>
            <form>
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