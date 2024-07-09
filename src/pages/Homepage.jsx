import React, { useState } from 'react';
import ApiService from '../services/ApiService';

function Homepage() {
  const [input, setInput] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await ApiService.generateQuizFromText(input);
      setQuiz(result.quiz);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error('Failed to generate quiz from text:', err);
    }
  };

  const handleUrlSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await ApiService.generateQuizFromUrl(input);
      setQuiz(result.quiz);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error('Failed to generate quiz from URL:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Generator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or URL"
        className="border p-2 mb-4 w-full"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleTextSubmit}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          Generate Quiz from Text
        </button>
        <button
          onClick={handleUrlSubmit}
          className="bg-green-500 text-white p-2 rounded"
          disabled={loading}
        >
          Generate Quiz from URL
        </button>
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {quiz && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
          <ul className="list-disc pl-5">
            {quiz.questions.map((q, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{q.question}</p>
                <p className="text-gray-700">{q.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Homepage;
