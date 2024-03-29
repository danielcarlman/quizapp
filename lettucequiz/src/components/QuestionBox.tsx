import Option from "./Option";

interface QuestionBoxProps {
  questions: any;
  currentQuestion: number;
}

function QuestionBox({ questions, currentQuestion }: QuestionBoxProps) {
  const entries = questions[currentQuestion].answers;
  return (
    <div className="border-4 border-cadetblue solid bg-white p-4 divide-y-4 divide-cadetblue space-y-4  w-full">
      <h3 className="text-xl font-semibold tracking-widest uppercase">
        {questions[currentQuestion].question}
      </h3>
      <div className="flex flex-col text-left p-8 pl-4 space-y-3 tracking-wide">
        {Object.entries(entries).map(([key, value]) => (
          <Option key={key} value={key} points={value as number} />
        ))}
      </div>
    </div>
  );
}

export default QuestionBox;
