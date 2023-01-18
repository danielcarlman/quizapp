import useStore from "../store/store";

interface OptionProps {
  value: string;
  points: any;
}

function Option({ value, points }: OptionProps) {
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = () => {
    console.log(value);
    setPoints(points);
  };

  return (
    <label className="flex space-x-2">
      <input
        className="w-6 h-6"
        type="radio"
        value={value}
        name="option"
        onChange={handleOnChange}
      />
      <span>{value.toLowerCase()}</span>
      <span>{points}</span>
    </label>
  );
}

export default Option;
