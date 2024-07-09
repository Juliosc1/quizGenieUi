import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const generateQuizFromText = async (text) => {
  try {
    const response = await api.post('/text', { text });
    return response.data;
  } catch (error) {
    console.error('Error generating quiz from text:', error.response?.data || error.message);
    throw error;
  }
};

const generateQuizFromUrl = async (url) => {
  try {
    const response = await api.post('/url', { url });
    return response.data;
  } catch (error) {
    console.error('Error generating quiz from URL:', error.response?.data || error.message);
    throw error;
  }
};

export default {
  generateQuizFromText,
  generateQuizFromUrl,
};
