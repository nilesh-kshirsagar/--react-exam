import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {taskid}=useParams()
    const {handleSubmit,register,setValue}=useForm()


    const navigate=useNavigate()
const fetData=async()=>{
    const resposne=await axios.get(`http://localhost:8080/tasks/${taskid}`)
setValue("name",resposne.data.name)
}
useEffect(()=>{
    fetData()
},[])


  const addData=(data)=>{
     const response=axios.put(`http://localhost:8080/tasks/${taskid}`,data)
alert("data updated")
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
    <button type="submit" class="btn btn-primary">Update</button>
  </div>
</form>
    </>
  )
}

export default Edit