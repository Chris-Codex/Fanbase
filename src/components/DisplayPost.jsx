import React from 'react'
import { Button, Card } from 'react-bootstrap'
import img1 from "../assets/img1.png"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplayPost = () => {
    const usersPost = useSelector((state) => state.post.postData)
    
  return (
    <div className='grid place-items-center'>
        <div className='w-[1200px] grid grid-cols-4 mt-10 py-8'>
            {usersPost.map((posts) => {
                const {id, title, email, image, description} = posts

                return (
                    <Card style={{ width: '18rem' }} key={id}>
                        <Card.Img variant="top" src={image} className="h-[180px]" />
                        <Card.Body>
                            <div className='flex flex-row justify-between mb-2'>
                                <p className='text-sm'>Author: {email}</p>
                                <p className='text-gray-light text-sm'>16/12/2022</p>
                            </div>
                            <div>
                                <p>{title}</p>
                            </div>
                            <Card.Text className='text-sm font-sans'>
                                {description}
                            </Card.Text>
                            <div className='flex flex-row gap-3 mt-3'>
                                <Link to={`/edit-post/${id}`}><button className='bg-green w-[70px] h-[35px] text-white'>Edit</button></Link>
                                <button className='bg-black w-[70px] h-[35px] text-white'>Delete</button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}

            
        </div>
    </div>
  )
}

export default DisplayPost