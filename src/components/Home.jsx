import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/MySlice';

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();     

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))

    }
  return (
    <div className='container'>
        <h2 className='text-center mt-4'>Crud App</h2>
        <Link to="/create" className='btn btn-success mb-4'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.job}</td>
                        <td>{user.salary}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    </div>
  )
}

export default Home;