import Option from "./Option";

interface QuestionBox {
  questions: any;
  currentQuestion: number;
}

function QuestionBox({ questions, currentQuestion }: QuestionBox) {
  const keys = Object.keys(questions[currentQuestion].answers);
  const values = Object.values(questions[currentQuestion].answers);
  return (
    <div className="border-4 border-cadetblue solid bg-white p-4 divide-y-4 divide-cadetblue space-y-4">
      <>
        <h3 className="text-xl font-semibold">
          {questions[currentQuestion].question}
        </h3>
      </>
      <div className="flex flex-col text-left p-8 space-y-2">
        <Option id={1} value={keys[0]} points={values[0]} />
        <Option id={2} value={keys[1]} points={values[1]} />
        <Option id={3} value={keys[2]} points={values[2]} />
        <Option id={4} value={keys[3]} points={values[3]} />
      </div>
    </div>
  );
}

export default QuestionBox;
