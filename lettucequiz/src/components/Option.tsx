import { useState } from "react";
import useStore from "../store/store";

interface OptionProps {
  value: string;
  points: any;
}

function Option({ value, points }: OptionProps) {
  const [checkedValue, setCheckedValue] = useState("");
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
    setPoints(points);
  };

  return (
    <label className="flex space-x-2">
      <input
        className="w-6 h-6"
        type="radio"
        value={value}
        checked={checkedValue === value}
        name="option"
        onChange={handleOnChange}
      />
      <span>{value.toLowerCase()}</span>
      <span>{points}</span>
    </label>
  );
}

export default Option;
