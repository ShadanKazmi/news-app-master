const axios = require('axios');

const API_KEY = '0c7c06daeb6e4bf2be22dc34ab0aa057';
const BASE_URL = 'https://newsapi.org/v2';

module.exports = async (req, res) => {
  const { category = '', country = 'us' } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        category,
      },
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
