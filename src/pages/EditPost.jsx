import React from 'react'
import EditPostInputs from '../components/EditPostInputs'
import { BsPersonCircle, BsFillFileEarmarkPostFill } from "react-icons/bs"
import { MdPreview } from "react-icons/md"
import { RiProfileLine, RiLogoutCircleRLine } from "react-icons/ri"
import { Link } from 'react-router-dom'

const EditPost = () => {
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
            <div className='flex flex-row gap-2 cursor-pointer'>
              <BsFillFileEarmarkPostFill size={18} className='mt-1'/> 
              <Link to="/create-post"><p className='cursor-pointer'>Create Post</p></Link>
            </div>

            <div className='flex flex-row gap-2 mt-2'>
              <MdPreview size={18} className='mt-1' />
              <Link to={`/single-post/`}><p>View Post</p></Link> 
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
        <p className='text-3xl font-bold tracking-normal leading-none mt-8'>Update Post</p>
        <div className='w-[1138px] mt-2' style={{border: "1px solid #e7e3e3"}}></div>
        <EditPostInputs />
      </div>
    </div>
  </div>
  )
}

export default EditPost