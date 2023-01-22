const Taskinput =({newTask,setNewTask})=>{
    return(
        <input
        type="text"
        placeholder="Enter TO-DO"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
    )
}
export default Taskinput