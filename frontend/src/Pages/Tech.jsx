import React from 'react'
import {fetchTechArticles } from '../api/GetNews'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'

const Tech = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchTechArticles} />
        <BottomBar/>
    </div>
  )
}

export default Tech;