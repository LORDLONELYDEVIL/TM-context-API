
import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UpdateTask from './UpdateTask'
import { TasksContext } from '../context/TasksContext'


const TaskList = () => {

  const {state,dispatch}=useContext(TasksContext);
  
  const {tasksList}=state;


  const updateTask=(task)=>{
    console.log("update task");
    setModalShow(true)
    dispatch({type:"SET_SELECTED_TASK",payload:task})
  }
  
  const deleteTask=(task)=>{
    console.log("delete task");
    dispatch({type:"REMOVE_TASK",payload:task})

  }

  const [modalShow,setModalShow]=useState(false)

  return (
    <>
          <Table striped bordered hover>
         <tr className='text-center'>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
         </tr>
         <tbody>
          {
           tasksList && tasksList.map((task,index)=>{
            return(
              <tr   className='text-center' key={task.id}>
             <td>{index+1}</td>
             <td>{task.title}</td>
             <td>{task.description}</td>
             <td> 
                <Button variant="dark" className="mx-3" onClick={()=>updateTask(task)}>Edit</Button>
                <Button variant="dark" className="new" onClick={()=>deleteTask(task)} >Delete</Button>
             </td>
            </tr>

            )
           }) 
          }
           
          
         </tbody>
        
       </Table>
       <UpdateTask 
       show={modalShow}
       onHide={()=>setModalShow(false)}
       />
    </>
   
  )
}

export default TaskList;