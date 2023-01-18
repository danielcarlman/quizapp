import { SetStateAction, useState } from "react";
import useStore from "../store/store";

interface Option {
  value: string;
  points: any;
}

function Option({ value, points }: Option) {
  const [checkedValue, setcheckedValue] = useState("");
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setcheckedValue(event.target.value);
    setPoints(points);
  };

  return (
    <span className="flex space-x-2">
      <input
        className="w-6 h-6"
        type="radio"
        value={value}
        checked={checkedValue === value}
        name="option"
        onChange={handleOnChange}
      />
      <p>{value}</p>
      <p>{points}</p>
    </span>
  );
}

export default Option;
