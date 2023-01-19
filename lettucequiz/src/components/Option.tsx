import useStore from "../store/store";

interface OptionProps {
  value: string;
  points: number;
}

function Option({ value, points }: OptionProps) {
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = () => {
    setPoints(points);
  };

  console.log(points, typeof points);

  return (
    <label className="flex space-x-2 field-option">
      <input
        className="w-6 h-6 sr-only"
        type="radio"
        value={value}
        name="option"
        onChange={handleOnChange}
      />
      <span className="field-circle" />
      <span className="lowercase">{value}</span>
    </label>
  );
}

export default Option;
