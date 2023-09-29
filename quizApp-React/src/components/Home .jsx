import React, { useState } from "react";
import quizData from "../constant";

const Home = () => {
  const [currentQ, setcurrentQ] = useState(0);
  const currentQuestion = quizData[currentQ];
  const qNum = currentQ + 1;
  const totalQuestions = quizData.length;

  const handleSubmit = () => {
    if (currentQ < totalQuestions - 1) {
      setcurrentQ(currentQ + 1);
    }
  };

  return (
    <div>
      <section className="bg-blue-300 min-h-screen flex justify-center items-center">
        <div className="p-4 bg-white rounded-lg shadow-lg h-[30%] w-[40%]">
          <div className="text-lg md:text-xl">
            <h3 className="my-2">
              {qNum}. {currentQuestion.question}
            </h3>
          </div>
          <div>
            {Object.keys(currentQuestion).map((key) => {
              if (key === "question" || key === "correct") return null;

              return (
                <label
                  key={key}
                  htmlFor={key}
                  className="box flex items-center cursor-pointer"
                >
                  <input
                    name="option"
                    type="radio"
                    id={key}
                    value={key}
                    required
                    className="mr-2"
                  />
                  {currentQuestion[key]}
                </label>
              );
            })}
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            {currentQ === totalQuestions - 1 ? "Finish" : "Next Question"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
