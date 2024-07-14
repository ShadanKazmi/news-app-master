import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Link, Box } from '@mui/material';
import logo from '../assets/news-logo.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

const SearchResult = () => {
    const location = useLocation();
    const { articles, query } = location.state || { articles: [], query: '' };

    const renderArticleGroup = (group) => (
        <Grid container spacing={2} key={group[0].title}>
            {group.map((article, index) => (
                <Grid item xs={12} sm={6} md={9} key={index}>
                    {article && (
                        <Link href={article.url} target="_blank" rel="noopener noreferrer" underline="none">
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: "space-evenly",
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                outlineStyle: "outset",
                                outlineColor: "black",
                                background: '#fff',
                                padding: "20px",
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, white 0%, #0d2959 100%)',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}>
                                <CardMedia
                                    component="img"
                                    height={index === 1 ? "450" : "350"}
                                    image={article.urlToImage || logo}
                                    alt={article.title}
                                    style={{ borderRadius: '10px' }}
                                />
                                <CardContent>
                                    <div style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly",}}>
                                        <h1 style={{ fontFamily: 'Application', color: "black", fontSize: "1.5rem",padding:"20px" }}>{article.title}</h1>
                                        <h3 style={{ fontFamily: 'Application', color: "black", fontSize: "1rem", padding:"20px",borderTop: "2px solid" }}>{article.description}</h3>
                                        <h5>{article.name}</h5>
                                    </div>
                            </CardContent>
                        </Card>
                        </Link>
            )}
        </Grid>
    ))
}
        </Grid >
    );

const groupArticles = (articles) => {
    const groups = [];
    for (let i = 0; i < articles.length; i += 3) {
        groups.push(articles.slice(i, i + 3));
    }
    return groups;
};

const searchGroups = groupArticles(articles);

return (
    <div className='search-results' style={{ backgroundColor: 'lightsteelblue', }}>
        <TopBar />
        <h1 className='article-head'>Search Results for '{query}'</h1>
        <div className='article-cards'>
            {searchGroups.length > 0 ? (
                searchGroups.map((group, index) => (
                    <div key={index}>
                        {renderArticleGroup(group)}
                    </div>
                ))
            ) : (
                <Box sx={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                    <h1 style={{fontFamily:"Application"}}>No Results for '{query}'</h1>
                    <h5 style={{fontFamily:"Application"}}>Did you check the spelling ?</h5>
                </Box>
            )}
        </div>
        <BottomBar/>
    </div>
);
};

export default SearchResult;
