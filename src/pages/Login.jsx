import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from '@material-tailwind/react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../features/authSlice/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toggleLoading } from '../features/loadingSlice/loadingSlice';
import Loading from '../components/Loading';



const Login = () => {
    const users = useSelector((state) => state.auth.users)
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log("users", users)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (email && password !==""){
            users.map((user)=>{

                if (user.email === email & user.password === password) {
                    try {
                        dispatch(toggleLoading())
                        setTimeout(() => {
                            dispatch(loginUser({id: user.id, email, username: user.fullname, password}))
                            toast.success("Login was successful")
                            navigate("/Home")
                            dispatch(toggleLoading())
                        }, 500)
                    } catch(error) {
                        dispatch(toggleLoading())
                        throw new Error(error.message)
                    }
                } else if(user.email !== email && user.password !== password) {
                     toast.error("Email or Password doesn't exist")
                } else {
                    toast.error("All fields are required")
                }   
            })
        }

    }

  return (
    <div className='container'>
        <div className='grid place-items-center h-screen'>
            <div className='bg-gray-light w-[600px] h-[400px]'>
                <div className='border-y-10'>
                    <h3 className='text-center mt-10 text-3xl font-bold tracking-normal leading-none'>LOGIN PAGE</h3>
                </div>
                
                {loading ? <Loading /> : (
                    <div style={{marginTop: "-30px"}}>
                    <Form className='grid place-items-center py-[80px]'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='w-[400px]' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='w-[400px]' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </Form.Group> 
                        <Button className='bg-black w-[100px] h-[62px]' onClick={handleSubmit}>Login</Button>
                    </Form>
                    <p style={{marginTop: -70}} className="ml-[95px]">Are you a user? <Link to="/register"><span>Register</span></Link></p>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Login