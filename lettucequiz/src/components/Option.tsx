import useStore from "../store/store";

interface Option {
  value: string;
  points: any;
  id: number;
}

function Option({ value, points, id }: Option) {
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = () => {
    // console.log("ID :", id);
    // console.log("Points :", points);
    setPoints(points);
  };

  return (
    <span className="flex space-x-2">
      <input
        className="w-6 h-6"
        type="radio"
        name="option"
        onChange={handleOnChange}
      />
      <p>{value}</p>
      <p>{points}</p>
    </span>
  );
}

export default Option;
