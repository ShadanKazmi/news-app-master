import React from 'react'
import {fetchScienceArticles } from '../api/GetNews'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'

const Science = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchScienceArticles} />
        <BottomBar/>
    </div>
  )
}

export default Science;