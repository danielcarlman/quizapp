import Option from "./Option";

interface QuestionBoxProps {
  questions: any;
  currentQuestion: number;
}

function QuestionBox({ questions, currentQuestion }: QuestionBoxProps) {
  const entries = questions[currentQuestion].answers;
  return (
    <div className="border-4 border-cadetblue solid bg-white p-4 divide-y-4 divide-cadetblue space-y-4">
      <h3 className="text-xl font-semibold">
        {questions[currentQuestion].question}
      </h3>
      <div className="flex flex-col text-left p-8 space-y-2">
        {Object.entries(entries).map(([key, value]) => (
          <Option key={key} value={key} points={value} />
        ))}
      </div>
    </div>
  );
}

export default QuestionBox;
