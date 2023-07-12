import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Create = () => {

const [task, setTask] = useState("")
const [notes, setNotes] = useState("");
const history = useNavigate();
// const header = {'Access-Control-Allow-Origin': '*'};

const handleSubmit = (e) => {
  console.log("clicked");
     e.preventDefault();
    axios.post("https://64ab046b0c6d844abedf1755.mockapi.io/CRUD", {
    task: task,
    notes: notes,
    
  });
  history("/read");
};
     
  return (
    <>
    <form>
    <h1>create fx</h1>
  <div className="mb-3">
    <label className="form-label">TASK</label>
    <div  className="form-text">What do you want to do today?
    </div>
    <input 
       type="text" 
       className="form-control" 
       placeholder="Enter task"
       onChange = {(e) => setTask(e.target.value) } 
    />
    </div>
    
  
  <div className="mb-3">
    {/* <label  className="form-label">KEEP NOTES</label> */}
    <div  className="form-text">Keep notes like timing, quantity or location!</div>
    <input 
       type="text"
       className="form-control"
        placeholder="Enter notes"
       onChange = {(e) => setNotes(e.target.value) }  />
    
  </div>
   
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-primary" onClick= {handleSubmit}>Submit
  </button>
</form>
 </>
  )
}

export default Create;