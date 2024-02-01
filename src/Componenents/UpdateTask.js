import React, { useContext, useEffect } from 'react'
import Button  from 'react-bootstrap/Button'
import Modal  from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { TasksContext } from './../context/TasksContext'

const UpdateTask = (props) => {
    const {state,dispatch}=useContext(TasksContext)
    const {selectedTasks}=state
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [id,setId]=useState(0)
    useEffect(()=>{
      if(Object.keys(selectedTasks).length!==0){
        setTitle(selectedTasks.title)
       setDescription(selectedTasks.description)
       setId(selectedTasks.id)

      }
      
      

    },[selectedTasks])

   
     const updateTask=()=>{
        props.onHide()
        dispatch({type:"UPDATE_TASK",payload:{title,description,id}})


    }
  return (
    <Modal
    {...props}
    aria-labelledby="Modal-center"
    centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="modal-center">
                Update Task

            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
         <Form.Group class="mb-3" controlId='basicText'>
            <Form.Label>Task Title</Form.Label>
            <Form.Control type='text'placeholder='Enter Task title here' value={title} onChange={(e)=>setTitle(e.target.value)}></Form.Control>
         </Form.Group>
         <Form.Group class="mb-3" controlId='basicDesk'>
            <Form.Label>Task Description</Form.Label>
            <Form.Control type='text'placeholder='Enter Task Description'value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
         </Form.Group>
        
        
       </Form>
            
        </Modal.Body>
        <Modal.Footer>
         
          <div className='text-end'>
             <Button variant='dark' type='submit'onClick={(e)=>updateTask(e)}>
               Update Task
             </Button>
           </div>
        </Modal.Footer>
    </Modal>

    
  )
}

export default UpdateTask