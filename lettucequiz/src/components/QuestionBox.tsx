function QuestionBox() {
  return (
    <div className="border-4 border-slate-400 solid bg-white p-4 divide-y-4 divide-slate-400 space-y-4">
      <div>
        <h3 className="text-xl font-semibold">
          PICK A CITY YOU WOULD LIKE TO JET OFF TO
        </h3>
      </div>
      <div className="flex flex-col text-left p-8 space-y-2">
        <span className="flex space-x-2">
          <input
            className="w-6 h-6"
            type="radio"
            value="option 1"
            name="option"
          />
          <p>tokyo</p>
        </span>
        <span className="flex space-x-2">
          <input
            className="w-6 h-6"
            type="radio"
            value="option 1"
            name="option"
          />
          <p>paris</p>
        </span>
        <span className="flex space-x-2">
          <input
            className="w-6 h-6"
            type="radio"
            value="option 1"
            name="option"
          />
          <p>los angeles</p>
        </span>
        <span className="flex space-x-2">
          <input
            className="w-6 h-6"
            type="radio"
            value="option 1"
            name="option"
          />
          <p>nashville</p>
        </span>
      </div>
    </div>
  );
}

export default QuestionBox;
