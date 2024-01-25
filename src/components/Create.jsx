import React, { useState } from 'react'
import { addUser } from '../features/MySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [job, setjob] = useState("")
    const [salary, setsalary] = useState("")

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email, job, salary}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter name' autoComplete='off' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter email' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="job">Job:</label>
                    <input type="text" name='job' className='form-control' placeholder='Enter job' autoComplete='off' onChange={(e) => setjob(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" name='salary' className='form-control' placeholder='Enter salary' autoComplete='off' onChange={(e) => setsalary(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>

        </div>

    </div>
    
  )
}

export default Create;