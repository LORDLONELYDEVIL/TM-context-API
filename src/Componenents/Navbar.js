import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

const Navbar = () => {
  const {state}=useContext(TasksContext)
  return (
    <>
     <h1 className='text-center my-4 text-dark'> TASKS MANAGEMENT</h1>
     <p className='text-center lead'>{`Currently ${state.tasksList.length} task(s) 0 pending`}</p>
    </>
  )
}

export default Navbar
