import React from 'react'
import { Button } from 'react-bootstrap'
import { FaConfluence } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className='flex justify-around bg-black w-full h-[60px]'>
            <div className='flex flex-row justify-center items-center'>
                <h4 className='flex gap-2 text-gray-light justify-center font-serif font-bold text-3xl'>
                    <FaConfluence /> FANBASE
                </h4>
            </div>
            <div className='flex flex-row justify-around font-extralight text-gray-light list-none cursor-pointer items-center w-[500px]'>
                    <Link to="/"><li>Home</li></Link>
                    <li>About</li>
                    <Link to="/create-post"><li>Create Post</li></Link>
                    <p>Welcome: Christian Iheacho</p>
                    <Button variant='primary'>
                        Logout
                    </Button>
            </div>
        </div>
    </>
  )
}

export default Navbar