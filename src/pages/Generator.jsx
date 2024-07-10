import React, { useState } from "react";
import ApiService from "../services/ApiService";
import styles from "../styles";
import Button from "../components/ui/Button";
import { RiRobot2Line } from "react-icons/ri";

const Generator = () => {
  const [input, setInput] = useState("");
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
      console.error("Failed to generate quiz from text:", err);
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
      console.error("Failed to generate quiz from URL:", err);
    }
  };

  return (
    <div className="flex h-full w-full p-0 md:p-6 gap-6">
      {/* left */}
      <div className={`hidden lg:flex justify-start items-start flex-col h-full w-[360px] p-6 rounded-md bg-white border border-gray-200 gap-6`}>
        <p className={`${styles.label}`}>My Courses</p>
      </div>
      <div className={`${styles.flexStart} flex-col h-full w-full p-6 rounded-md bg-white border border-gray-200 gap-6`}>
        {/* right */}
        <div className={`${styles.flexBetween} flex-col h-full w-full overflow-auto`}>
          <div className="flex flex-col h-full w-full">
            <div>
              <h2 className="font-semibold text-primary_color">
                Deploy faster
              </h2>
              <h1 className="text-2xl font-bold mb-4">Quiz Generator</h1>
            </div>
            <div className="flex h-full w-full">
              {quiz ? (
                <div className="flex flex-col  h-full mt-4">
                  <h2 className="text-2xl font-medium mb-2">{quiz.title}</h2>
                  <ul className="list-disc pl-5">
                    {quiz.questions.map((q, index) => (
                      <li key={index} className="mb-2">
                        <p className="font-semibold">{q.question}</p>
                        <p className="text-gray-700">{q.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
              <div className={`${styles.flexCenter} w-full`}>
                <RiRobot2Line className={`${styles.iconMedium} text-primary_color animate-pulse`} />
              </div>)}
            </div>
            <div className="flex h-60 w-full">
              <textarea
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text or URL"
                className="border p-4 mb-4 w-full h-full rounded-md"
              />
            </div>
          </div>

          <div className="flex items-end space-x-4 h-20 w-full">
            <Button
              onClick={handleTextSubmit}
              color="primary"
              disabled={loading}
            >
              Generate Quiz from Text
            </Button>
            <Button
              onClick={handleUrlSubmit}
              color="basic"
              disabled={loading}
            >
              Generate Quiz from URL
            </Button>
          </div>
        </div>
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Generator;
