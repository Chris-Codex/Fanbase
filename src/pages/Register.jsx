import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice/authSlice';
import uuid from 'react-uuid'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { toggleLoading } from '../features/loadingSlice/loadingSlice';

const uid = uuid()
const gen_id = uid.slice(0, 8)


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.loading)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!fullname || !email || !password){
            toast.error("All ffields are required")
        }else{
            try{
                dispatch(toggleLoading())
                setTimeout(() => {
                    dispatch(registerUser({id: new Date().getTime().toString(), fullname: fullname, email: email, password: password}))
                    toast.success("Registration was Successful")
                    dispatch(toggleLoading())
                    navigate("/")
                }, 500)
            }catch(error){
                toast.error("All fields are required")
            }
        }

    }

  return (
    <div className='container'>
        <div className='grid place-items-center h-screen'>
            {loading ? <Loading /> : (
                <div className='bg-gray-light w-[600px] h-[500px]'>
                <div className='border-y-10'>
                    <h3 className='text-center mt-10 text-3xl font-bold tracking-normal leading-none'>REGISTRATION PAGE</h3>
                </div>
                
                <div style={{marginTop: "-30px"}}>
                    <Form className='grid place-items-center py-[80px]'>
                        <Form.Group className="mb-3">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control className='w-[400px]' autoComplete='off' type="text" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='w-[400px]' autoComplete='off' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" autoComplete='false'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='w-[400px]'  autoComplete='off' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </Form.Group> 
                        <Button className='bg-black w-[100px] h-[62px]' onClick={handleSubmit}>Register</Button>
                    </Form>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Register