import React from 'react'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'
import { fetchGeneralArticles } from '../api/GetNews'

const Home = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchGeneralArticles} />
        <BottomBar/>
    </div>
  )
}

export default Home