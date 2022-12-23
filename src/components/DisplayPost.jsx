import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import img1 from "../assets/img1.png"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../features/postSlice/postSlice';

const DisplayPost = () => {
    const dispatch = useDispatch()
    const usersPost = useSelector((state) => state.post.postData)
    const currentUserid = useSelector((state) => state.auth.loggedInUser.id)

  return (
    <div className='container'>
        <div className='grid place-items-center'>
        <div className='w-[1200px] grid grid-cols-3 mt-10 py-8'>
            {usersPost.map((posts) => {
                const {id, title, author, image, description, times} = posts

                return (
                    <>
                        {currentUserid && id ===  currentUserid ? (
                        <Card style={{ width: '20rem' }} key={id} className="mb-5 gap-5">
                            <Card.Img variant="top" src={image} className="h-[180px]" />
                            <Card.Body>
                                <div className='flex flex-row justify-between mb-2'>
                                    <p className='text-sm'>Author: {author}</p>
                                    <p className='text-gray-light text-sm'>{times}</p>
                                </div>
                                <div>
                                    <p className='font-bold tracking-none '>{title}</p>
                                </div>
                                <Card.Text className='text-sm font-sans'>
                                    {description}
                                </Card.Text>
                                <div className='flex flex-row gap-3 mt-3'>
                                    <Link to={`/edit-post/${id}`}><button className='bg-green w-[70px] h-[35px] text-white'>Edit</button></Link>
                                    <button className='bg-black w-[70px] h-[35px] text-white' onClick={() => dispatch(deletePost({id:id}))}>Delete</button>
                                </div>
                            </Card.Body>
                        </Card>
                        ) : null}
                    </>
                )
            })}
  
        </div>
    </div>
    </div>
  )
}

export default DisplayPost