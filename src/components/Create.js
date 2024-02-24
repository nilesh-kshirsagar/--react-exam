import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const {handleSubmit,register,reset}=useForm()
  const navigate=useNavigate()

  const addData=(data)=>{
     const response=axios.post("http://localhost:8080/tasks",data)
alert("data added")
reset()
navigate("/list")
  }
  return (
    <>
     <form onSubmit={handleSubmit(addData)} class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Add Task</label>
    <input type="text" class="form-control" id="inputEmail4" {...register("name")}/>
  </div>
 
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
 
    </>
  )
}

export default Create