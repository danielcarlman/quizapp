import useStore from "../store/store";
import rubric from "../utils/rubric";

function Results() {
  const totalPoints = useStore((state) => state.totalPoints);
  const result = rubric(totalPoints);

  return (
    <div className="border-4 border-cadetblue solid bg-white p-4 space-y-4 max-w-lg">
      <h3 className="text-xl font-semibold tracking-widest">
        {result.restaurant}
      </h3>

      <img
        src={result.image}
        alt="restaurant image"
        className="w-60 h-60 m-auto"
      />
      <div className="flex flex-col text-left text-sm pb-6 space-y-2 tracking-wide leading-6">
        {result.description}
      </div>
    </div>
  );
}

export default Results;
