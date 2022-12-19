import React from 'react'
import { screen } from '@testing-library/react';

const Loading = () => {
  return (
    <div className='grid place-items-center mt-[30px]'>
        <div className="m-auto spinner-border text-success w-[100px] h-[100px]" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Loading