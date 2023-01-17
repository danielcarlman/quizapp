import background from "./assets/pattern.jpg";
import QuestionBox from "./components/QuestionBox";
import Button from "./components/Button";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover p-8 space-y-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="space-y-4">
        <h1 className="text-6xl font-bold tracking-widest">QUIZ</h1>
        <h2 className="text-xl">
          Take our restaurant quiz to find out what you should have for dinner.
        </h2>
      </header>
      <main className="p-2">
        <QuestionBox />
        <Button />
      </main>
    </div>
  );
}

export default App;
