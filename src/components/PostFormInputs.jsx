import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../assets/data'
import { toggleLoading } from '../features/loadingSlice/loadingSlice'
import { addPost } from '../features/postSlice/postSlice'
import Loading from './Loading'
import { toast } from 'react-toastify';
import uuid from 'react-uuid'
import { current } from '@reduxjs/toolkit'




const uid = uuid()
const gen_id = uid.slice(0, 8)

console.log("New", gen_id)

const PostFormInputs = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.loading)
    const currentUser = useSelector((state) => state.auth.loggedInUser)
    const currentUserID = currentUser.id
    const currentUsername = currentUser.email

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const myDate = new  Date()
    const newDate = myDate.toDateString()
   
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title && image &&  category && description){
            try {
                dispatch(toggleLoading())
                setTimeout(() => {  
                    dispatch(addPost({id: currentUserID, title, image, author: currentUsername, category, description, times: newDate}))
                    setTitle("")
                    setImage("")
                    setCategory("")
                    setDescription("")
                    dispatch(toggleLoading())
                }, 500)
            }catch(error){
                dispatch(toggleLoading())
                throw error(error.message)
            }
        }else{
            toast.info("All fields are required")
        }
    }

  return (
    <>
        <div className='bg-white grid justify-center mt-10 h-[600px]'>
            {isLoading ? <Loading /> : (
                <div className='w-[600px] py-10'>
                <Form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                            </Form.Group>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                            </Form.Group>
                        </div>

                        <div className='col-md-6'>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Categories</Form.Label>
                                <Form.Select aria-label="Default select example" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option>Select Categories</option>
                                    {categories.map((cat, index) => {
                                        return (
                                            <option name="categories" value={cat || ""} key={index}>{cat}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                    

                    <div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <button className='bg-black w-[100px] h-[40px] text-white'>Submit</button>
                    </div>
                </Form>
            </div>
            )}
            
        </div>
    </>
  )
}

export default PostFormInputs