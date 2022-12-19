import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-row w-full bg-black h-[60px]'>
        <div className='flex flex-row text-gray-light gap-4 ml-[350px] items-center cursor-pointer'>
            <h3>All</h3>
            <h3>Entertainment</h3>
            <h3>Business</h3>
            <h3>Sports</h3>
        </div>
    </div>
  )
}

export default Categories