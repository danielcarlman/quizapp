import background from "./assets/pattern.jpg";

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-4xl font-bold">Lettuce Feed Quiz</h1>
    </div>
  );
}

export default App;
