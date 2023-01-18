import background from "./assets/pattern.jpg";
import QuestionBox from "./components/QuestionBox";
import Button from "./components/Button";
import questions from "./utils/questions";
import { useState } from "react";
import useStore from "./store/store";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const points = useStore((state) => state.points);
  const setPoints = useStore((state) => state.setPoints);
  const totalPoints = useStore((state) => state.totalPoints);
  const incrementTotalPoints = useStore((state) => state.incrementTotalPoints);
  const handleClick = () => {
    incrementTotalPoints(points);
    setPoints(0);
    console.log("TOTAL POINTS: ", totalPoints);
    currentQuestion === questions.length - 1
      ? setCurrentQuestion(0)
      : setCurrentQuestion((prev) => prev + 1);
    // Add Game Over Screen when currentQuestion reaches 5
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover p-8 space-y-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="space-y-4">
        <h1 className="text-6xl font-bold tracking-widest">
          QUIZ {totalPoints}
        </h1>
        <h2 className="text-xl">
          Take our restaurant quiz to find out what you should have for dinner.
        </h2>
      </header>
      <main className="p-2">
        <QuestionBox questions={questions} currentQuestion={currentQuestion} />
        <Button onClick={handleClick} disabled={points < 1} />
        <p>{currentQuestion}</p>
      </main>
    </div>
  );
}

export default App;
