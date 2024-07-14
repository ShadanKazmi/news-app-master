import React from 'react'
import { fetchSportsArticles } from '../api/GetNews'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'

const Sports = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchSportsArticles} />
        <BottomBar/>
    </div>
  )
}

export default Sports;