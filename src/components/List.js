import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const List = () => {

    const [add, setAdd] = useState([])


    const fetData=async()=>{

        const resposne=await axios.get("http://localhost:8080/tasks")
        const result=await resposne.data
        setAdd(result)
    }
    useEffect(()=>{
        fetData()
    },[])
  return (
    <>

    <input type="search" />
    <table className='table'>
       <thead> 
        <tr>

        <th>Id</th>
        <th>Task</th>
        </tr>
       </thead>

       <tbody>
{
    add.map((elem)=>{
        return <>
        <tr>
            <td>{elem.id}</td>
            <td>{elem.name}</td>
            <td>
                <NavLink to={`/task/update/${elem.id}`}>
                    <button className='btn btn-warning'>Edit</button>
                </NavLink>
                <NavLink to={`/task/delete/${elem.id}`}>
                    <button className='btn btn-danger'>Delete</button>
                </NavLink>
                
             </td>
        </tr>
        </>
    })
}
       </tbody>
    </table>
    </>
  )
}

export default List