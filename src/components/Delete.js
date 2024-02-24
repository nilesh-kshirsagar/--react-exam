import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const {taskid}=useParams()
    const navigate=useNavigate()

    const deleteData=()=>{
        axios.delete(`http://localhost:8080/tasks/${taskid}`)
        alert("data deleted")
navigate("/list")
    }
  return (
    <>
    <form onSubmit={()=>deleteData()} action="">
        <button>yes</button>
    </form>
    </>
  )
}

export default Delete