import background from "./assets/pattern.jpg";

function App() {
  return (
    <header
      className="flex flex-col justify-center items-center h-screen bg-cover p-4 space-y-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-6xl font-bold tracking-widest">QUIZ</h1>
      <h1 className="text-xl text-center">
        Take our quiz to find out what restaurant you should try for dinner.
      </h1>
    </header>
  );
}

export default App;
