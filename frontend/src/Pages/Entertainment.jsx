import React from 'react'
import { fetchEntertainmentArticles } from '../api/GetNews'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'

const Entertainment = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchEntertainmentArticles} />
        <BottomBar/>
    </div>
  )
}

export default Entertainment;