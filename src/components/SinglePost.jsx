import React from 'react'
import SinglePostDisplay from './SinglePostDisplay';
import { BsPersonCircle, BsFillFileEarmarkPostFill } from "react-icons/bs"
import { MdPreview } from "react-icons/md"
import { RiProfileLine, RiLogoutCircleRLine } from "react-icons/ri"

const SinglePost = () => {
  return (
    <div className='container bg-slate mt-10 h-screen'>
      <div className='row'>
        <div className='col-md-3 bg-black text-white mb-5 h-screen'>
          <div className='mt-3 ml-10'>
            <h3>DashBoard</h3>
            <div className='flex flex-row gap-2 mt-3'>
                <BsPersonCircle size={30} />
                <p>Christian</p>
            </div>
          </div>
          
          <div className='ml-10 mt-4'>
            <div className='flex flex-row gap-2'>
              <BsFillFileEarmarkPostFill size={18} className='mt-1'/> 
              <p>Create Post</p>
            </div>

            <div className='flex flex-row gap-2 mt-2'>
              <MdPreview size={18} className='mt-1' />
              <p>View Post</p> 
            </div>

            <div className='flex flex-row gap-2 mt-2'>
              <RiProfileLine size={18} className='mt-1' />
              <p>Profile</p> 
            </div>

            <div className='flex flex-row gap-2 mt-2'>
              <RiLogoutCircleRLine size={18} className='mt-1' />
              <p>Logout</p> 
            </div>

          </div>
        </div>
        
        <div className='col-md-8'>
          <p className='text-3xl font-bold tracking-normal leading-none mt-8'>Add Post</p>
          <div className='w-[1138px] mt-2' style={{border: "1px solid #e7e3e3"}}></div>
          <SinglePostDisplay />
        </div>
      </div>
    </div>
  )
}

export default SinglePost