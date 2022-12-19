import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import PostForm from './../components/PostForm';

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <PostForm />
    </div>
  )
}

export default CreatePost