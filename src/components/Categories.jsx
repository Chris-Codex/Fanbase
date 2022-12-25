import { useSelect } from '@material-tailwind/react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { categories } from '../assets/data'
import { filterCategories } from '../features/postSlice/postSlice'

const catButton = [
  "All", "Entertainment", "Business", "Sports"
]

const Categories = () => {
  const dispatch = useDispatch()
  const  post = useSelector((state) => state.post.postData)
 
  return (
    <div className='flex flex-row w-full bg-black h-[60px]'>
        <div className='flex flex-row text-gray-light gap-4 ml-[130px] items-center cursor-pointer'>
            {catButton.map((cat, index) => {
              return (
                <div key={index}>
                  <Link to={`/single-post/` + cat}>
                    <button className='bg-white text-black w-[140px] h-[50px]' onClick={() => dispatch(filterCategories(cat))}>{cat}</button>
                  </Link>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Categories