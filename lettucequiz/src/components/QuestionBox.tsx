import Option from "./Option";

function QuestionBox() {
  return (
    <div className="border-4 border-slate-400 solid bg-white p-4 divide-y-4 divide-slate-400 space-y-4">
      <>
        <h3 className="text-xl font-semibold">
          PICK A CITY YOU WOULD LIKE TO JET OFF TO
        </h3>
      </>
      <div className="flex flex-col text-left p-8 space-y-2">
        <Option id={1} value="tokyo" />
        <Option id={2} value="paris" />
        <Option id={3} value="los angeles" />
        <Option id={4} value="nashville" />
      </div>
    </div>
  );
}

export default QuestionBox;
