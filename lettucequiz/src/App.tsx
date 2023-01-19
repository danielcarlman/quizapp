import background from "./assets/pattern.jpg";
import QuestionBox from "./components/QuestionBox";
import Button from "./components/Button";
import questions from "./utils/questions";
import { useState } from "react";
import useStore from "./store/store";
import ResultBox from "./components/ResultBox";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const points = useStore((state) => state.points);
  const totalPoints = useStore((state) => state.totalPoints);
  const setPoints = useStore((state) => state.setPoints);
  const resetTotalPoints = useStore((state) => state.resetTotalPoints);
  const incrementTotalPoints = useStore((state) => state.incrementTotalPoints);
  const handleClick = () => {
    incrementTotalPoints(points);
    setPoints(0);
    currentQuestion === questions.length - 1
      ? setShowResults(true)
      : setCurrentQuestion((prev) => prev + 1);
  };

  const handleRestart = () => {
    resetTotalPoints();
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover p-8 space-y-8 text-raisinblack"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="space-y-4">
        <h1
          className={`font-bold tracking-widest ${
            showResults ? "text-4xl" : "text-6xl"
          }`}
        >
          {showResults ? "RESULT" : "QUIZ"}
        </h1>
        <h2 className={`text-medium ${showResults && "hidden"}`}>
          Take our restaurant quiz to
          <br />
          find out where you
          <br /> should go for dinner.
        </h2>
      </header>
      <main className="p-2">
        {showResults ? (
          <>
            <ResultBox />
            <Button title="RESTART QUIZ" onClick={handleRestart} />
          </>
        ) : (
          <>
            <QuestionBox
              questions={questions}
              currentQuestion={currentQuestion}
            />
            <Button
              title="NEXT QUESTION"
              onClick={handleClick}
              disabled={points < 1}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
