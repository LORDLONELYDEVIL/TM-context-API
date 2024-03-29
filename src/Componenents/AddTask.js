import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import { TasksContext } from '../context/TasksContext'

const AddTask = () => {
    const {dispatch}=useContext(TasksContext)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')


    const addTask=(e)=>{
        e.preventDefault()
        console.log({title,description});
        dispatch({type:"ADD_TASK",payload:{title,description}})
        setTitle('')
        setDescription('')

    }
   

  return (
    <section className='my-5'>
        <Form>
        <Form.Group class="mb-3" controlId='basicText'>
            <Form.Label>Task Title</Form.Label>
            <Form.Control type='text'placeholder='Enter Task title here'
             value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group class="mb-3" controlId='basicDesk'>
            <Form.Label>Task Description</Form.Label>
            <Form.Control type='text'placeholder='Enter Task Description' 
            value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <div className='text-end'>
         <Button variant='dark' type='submit'onClick={(e)=>addTask(e)}>
            Add Task
         </Button>

        </div>
        
       </Form>

    </section>
    
  )
}

export default AddTask