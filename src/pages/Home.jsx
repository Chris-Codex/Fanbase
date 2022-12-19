import React from 'react'
import DisplayPost from '../components/DisplayPost';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from './../components/Categories';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Categories />
        <DisplayPost />
    </div>
  )
}

export default Home