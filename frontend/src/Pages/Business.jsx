import React from 'react'
import TopBar from '../Components/TopBar'
import PostCarousel from '../Components/PostCarousel'
import Articles from '../Components/Articles'
import BottomBar from '../Components/BottomBar'
import { fetchBusinessArticles } from '../api/GetNews'

const Business = () => {
  return (
    <div>
        <TopBar/>
        <PostCarousel/>
        <Articles fetchArticles = {fetchBusinessArticles} />
        <BottomBar/>
    </div>
  )
}

export default Business