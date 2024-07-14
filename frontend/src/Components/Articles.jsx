// import React, { useContext, useEffect, useState } from 'react';
// import { fetchGeneralArticles } from '../api/GetNews';
// import logo from '../assets/news-logo.png';
// import {
//     Grid,
//     Card,
//     CardContent,
//     CardMedia,
//     Typography,
//     Box,
//     CircularProgress,
//     Backdrop,
//     Fade,
//     Button,
//     TextField,
//     Container,
//     Paper,
//     Link,
// } from '@mui/material';
// import {
//     Image,
//     Header,
//     Form,
//     Modal,
//     Icon,
// } from 'semantic-ui-react';

// import { CountryContext } from '../api/CountryContext';

// const Articles = ({ fetchArticles }) => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedArticle, setSelectedArticle] = useState(null);
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const setCnt = useContext(CountryContext);

//     useEffect(() => {
//         const fetchArticlesData = async () => {
//             try {
//                 const fetchedArticles = await fetchArticles(setCnt.country);
//                 setArticles(fetchedArticles);
//             } catch (error) {
//                 console.error('Error fetching articles:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchArticlesData();
//     }, [fetchArticles, setCnt.country]);

//     const handleCardClick = (article) => {
//         setSelectedArticle(article);
//         setComments([]); // Reset comments for the new article
//     };

//     const handleClose = () => {
//         setSelectedArticle(null);
//     };

//     const handleAddComment = () => {
//         if (newComment.trim()) {
//             setComments([...comments, newComment]);
//             setNewComment('');
//         }
//     };

//     const renderArticleGroup = (group) => (
//         <Grid container spacing={7} key={group[0].title}>
//             {group.map((article, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                     {article && (
//                         <Card
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 height: '100%',
//                                 justifyContent: "space-evenly",
//                                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                                 outlineStyle: "outset",
//                                 outlineColor: "black",
//                                 background: '#fff',
//                                 padding: "20px",
//                                 borderRadius: '10px',
//                                 background: 'linear-gradient(135deg, white 0%, #0d2959 100%)',
//                                 transition: 'transform 0.2s',
//                                 '&:hover': {
//                                     transform: 'scale(1.05)',
//                                     cursor: "pointer",
//                                 },
//                             }}
//                             onClick={() => handleCardClick(article)}
//                         >
//                             <CardMedia
//                                 component="img"
//                                 height={index === 1 ? "350" : "250"}
//                                 image={article.urlToImage || logo}
//                                 alt={article.title}
//                                 style={{ borderRadius: '10px' }}
//                             />
//                             <CardContent>
//                                 <div>
//                                     <h1 style={{ fontFamily: 'Application', color: "black", fontSize: "1.5rem" }}>{article.title}</h1>
//                                     <h3 style={{ fontFamily: 'Application', color: "black", fontSize: "1rem", borderTop: "2px solid" }}>{article.description}</h3>
//                                     <h5>{article.name}</h5>
//                                     <Link href={article.url} target="_blank" rel="noopener" color="#000000" underline="always">
//                                         Click here to read the full article
//                                     </Link>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     )}
//                 </Grid>
//             ))}
//         </Grid>
//     );

//     const groupArticles = (articles) => {
//         const groups = [];
//         for (let i = 0; i < articles.length; i += 3) {
//             groups.push(articles.slice(i, i + 3));
//         }
//         return groups;
//     };

//     const articleGroups = groupArticles(articles);

//     return (
//         <div className='article-cols'>
//             <h1 className='article-head'>Around the Country</h1>
//             {loading ? (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <div className='article-cards'>
//                     {articleGroups.map((group, index) => (
//                         <div key={index}>
//                             {renderArticleGroup(group)}
//                         </div>
//                     ))}
//                 </div>
//             )}

//             <Modal
//                 open={Boolean(selectedArticle)}
//                 onClose={handleClose}
//                 size="medium"
//                 closeIcon
//                 style={{ height: '90vh', overflowY: 'auto', top: '5vh', marginTop: "0", backgroundColor: "transparent", outlineStyle: "none", borderRadius: "none" }}
//             >
//                 <Modal.Header style={{ color: 'black', textAlign: 'center', fontFamily: "Application", fontSize: "2.5rem", background:"linear-gradient(45deg, hsla(355, 74%, 62%, 1) 0%, hsla(0, 0%, 3%, 1) 100%)"}}>{selectedArticle?.title}</Modal.Header>
//                 <Modal.Content scrolling style={{ background: '#d8ded6' }}>
//                     <Image src={selectedArticle?.urlToImage || logo} centered fluid />
//                     <Modal.Description>
//                         <p style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem", marginTop: "10px ", borderTop: "1px solid" }}>{selectedArticle?.description}</p>
//                         <Header style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem" }} as="h3">Comments</Header>
//                         {comments.map((comment, index) => (
//                             <p key={index}>{comment} </p>
//                         ))}
//                         <Form reply>
//                             <Form.TextArea
//                                 label="Add a comment"
//                                 placeholder="Type your comment here..."
//                                 value={newComment}
//                                 onChange={(e) => setNewComment(e.target.value)}
//                                 style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem" }}
//                             />
//                             <Button type='submit' icon="edit" onClick={handleAddComment} style={{ fontSize: "10px", fontFamily: "Application", color: "red" }}>
//                                 Add Comment
//                             </Button>
//                         </Form>
//                     </Modal.Description>

//                 </Modal.Content>
//             </Modal>

//         </div>
//     );
// };

// export default Articles;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchGeneralArticles } from '../api/GetNews';
import logo from '../assets/logo.png';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    CircularProgress,
    Backdrop,
    Fade,
    Button,
    TextField,
    Container,
    Paper,
    Link,
} from '@mui/material';
import {
    Image,
    Header,
    Form,
    Modal,
    Icon,
} from 'semantic-ui-react';

import { CountryContext } from '../api/CountryContext';

const Articles = ({ fetchArticles }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const setCnt = useContext(CountryContext);

    useEffect(() => {
        const fetchArticlesData = async () => {
            try {
                const fetchedArticles = await fetchArticles(setCnt.country);
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticlesData();
    }, [fetchArticles, setCnt.country]);

    const fetchComments = async (articleId) => {
        try {
            const response = await axios.get("https://news-app-server-fjpt.onrender.com/comments", { params: { articleId } } );
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleCardClick = (article) => {
        const articleurl = article.url;
        console.log("HELLOOOOOOOOOO",article.url);
        setSelectedArticle(article);    
        fetchComments(articleurl);
    };

    const handleClose = () => {
        setSelectedArticle(null);
        setComments([]); // Clear comments when the modal is closed
    };

    const handleAddComment = async () => {
        const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage
        const articleId = selectedArticle.url;

        if (newComment.trim() && userId && articleId) {
            try {
                const response = await axios.post('https://news-app-server-fjpt.onrender.com/comments', {
                    content: newComment,
                    articleId,
                    userId,
                });
                setComments([...comments, response.data]);
                setNewComment('');
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        }
    };

    const renderArticleGroup = (group) => (
        <Grid container spacing={7} key={group[0].title}>
            {group.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    {article && (
                        <Card
                            sx={{
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
                                    cursor: "pointer",
                                },
                            }}
                            onClick={() => handleCardClick(article)}
                        >
                            <CardMedia
                                component="img"
                                height={index === 1 ? "350" : "250"}
                                image={article.urlToImage || logo}
                                alt={article.title}
                                style={{ borderRadius: '10px' }}
                            />
                            <CardContent>
                                <div>
                                    <h1 style={{ fontFamily: 'Application', color: "black", fontSize: "1.5rem" }}>{article.title}</h1>
                                    <h3 style={{ fontFamily: 'Application', color: "black", fontSize: "1rem", borderTop: "2px solid" }}>{article.description}</h3>
                                    <h5>{article.name}</h5>
                                    <Link href={article.url} target="_blank" rel="noopener" color="#000000" underline="always">
                                        Click here to read the full article
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
            ))}
        </Grid>
    );

    const groupArticles = (articles) => {
        const groups = [];
        for (let i = 0; i < articles.length; i += 3) {
            groups.push(articles.slice(i, i + 3));
        }
        return groups;
    };

    const articleGroups = groupArticles(articles);

    return (
        <div className='article-cols'>
            <h1 className='article-head'>Around the Country</h1>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div className='article-cards'>
                    {articleGroups.map((group, index) => (
                        <div key={index}>
                            {renderArticleGroup(group)}
                        </div>
                    ))}
                </div>
            )}

            <Modal
                open={Boolean(selectedArticle)}
                onClose={handleClose}
                size="medium"
                closeIcon
                style={{ height: '90vh', overflowY: 'auto', top: '5vh', marginTop: "0", backgroundColor: "transparent", outlineStyle: "none", borderRadius: "none" }}
            >
                <Modal.Header style={{ color: 'black', textAlign: 'center', fontFamily: "Application", fontSize: "2.5rem", background:"linear-gradient(45deg, hsla(355, 74%, 62%, 1) 0%, hsla(0, 0%, 3%, 1) 100%)"}}>{selectedArticle?.title}</Modal.Header>
                <Modal.Content scrolling style={{ background: '#d8ded6' }}>
                    <Image src={selectedArticle?.urlToImage || logo} centered fluid />
                    <Modal.Description>
                        <p style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem", marginTop: "10px ", borderTop: "1px solid" }}>{selectedArticle?.description}</p>
                        <Header style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem" }} as="h3">Comments</Header>
                        {comments.map((comment, index) => (
                            <p key={index}>{comment.createdBy.firstName} {comment.createdBy.lastName} {comment.content} </p>
                        ))}
                        <Form reply>
                            <Form.TextArea
                                label="Add a comment"
                                placeholder="Type your comment here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                style={{ color: 'black', fontFamily: "Application", fontSize: "1.5rem" }}
                            />
                            <Button type='submit' icon="edit" onClick={handleAddComment} style={{ fontSize: "10px", fontFamily: "Application", color: "red" }}>
                                Add Comment
                            </Button>
                        </Form>
                    </Modal.Description>

                </Modal.Content>
            </Modal>

        </div>
    );
};

export default Articles;
