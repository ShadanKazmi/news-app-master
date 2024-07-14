import axios from 'axios';

const BACKEND_URL = 'https://news-app-backend-jr6o.onrender.com';

export const fetchArticlesByCategory = async (category = '', country = 'us') => {
    try {
        const response = await axios.get(`${BACKEND_URL}/top-headlines`, {
            params: {
                country,
                category,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

export const fetchTopHeadlines = async (country = 'us') => {
    return fetchArticlesByCategory('', country);
};

export const fetchSportsArticles = async (country = 'us') => {
    return fetchArticlesByCategory('sports', country);
};

export const fetchBusinessArticles = async (country = 'us') => {
    return fetchArticlesByCategory('business', country);
};

export const fetchGeneralArticles = async (country = 'us') => {
    return fetchArticlesByCategory('general', country);
};

export const fetchHealthArticles = async (country = 'us') => {
    return fetchArticlesByCategory('health', country);
};

export const fetchScienceArticles = async (country = 'us') => {
    return fetchArticlesByCategory('science', country);
};

export const fetchEntertainmentArticles = async (country = 'us') => {
    return fetchArticlesByCategory('entertainment', country);
};

export const fetchTechArticles = async (country = 'us') => {
    return fetchArticlesByCategory('technology', country);
};

export const searchArticles = async (query) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/everything`, {
            params: {
                query,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching articles:', error);
        throw error;
    }
};


