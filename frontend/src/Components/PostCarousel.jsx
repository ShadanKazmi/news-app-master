import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../assets/news-logo.png'
import Card from 'react-bootstrap/Card';
import { fetchTopHeadlines } from '../api/GetNews';
import { Icon } from 'semantic-ui-react';
import { NextArrow, PrevArrow } from './Arrows';
import { CircularProgress } from '@mui/material';
import { CountryContext } from '../api/CountryContext';


const PostCarousel = () => {
    const setCnt = useContext(CountryContext);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await fetchTopHeadlines(setCnt.country);
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const settings = {
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }


    return (
        <div style={{backgroundColor:"white"}}>
            <h1 className='top-headline'>NEWS OF THE MINUTE</h1>
            {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress/>
        </div>
      ) : (
            <Card >
                <Slider {...settings}>
                    {articles.map((article, index) => (
                        <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className='carousel-card'>
                            <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
                                <Card.Img
                                    src={article.urlToImage || logo}
                                    alt={article.title}
                                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                                />
                                <Card.Text
                                    style={{
                                        position: 'absolute',
                                        bottom: '1px',
                                        left: '10px',
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0,0.7)',
                                        padding: '5px 10px',
                                        fontFamily: "Application",
                                        fontSize: "15px",
                                        lineHeight: "1.6"
                                    }}>
                                    {article.title}
                                </Card.Text>
                            </div>
                        </a>
                    ))}
                </Slider>
            </Card>
      )}
        </div>
    )
}

export default PostCarousel