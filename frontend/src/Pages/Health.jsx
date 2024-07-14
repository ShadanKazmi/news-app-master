import React from 'react'
import {fetchHealthArticles } from '../api/GetNews'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'

const Health = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchHealthArticles} />
        <BottomBar/>
    </div>
  )
}

export default Health;