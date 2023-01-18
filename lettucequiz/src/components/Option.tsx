import useStore from "../store/store";
import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import { useState } from "react";

interface OptionProps {
  value: string;
  points: number;
}

function Option({ value, points }: OptionProps) {
  // const [isChecked, setIsChecked] = useState(false);
  const setPoints = useStore((state) => state.setPoints);
  const handleOnChange = () => {
    // setIsChecked(!isChecked);
    setPoints(points);
  };

  return (
    <label className="flex space-x-2">
      {/* {isChecked ? (
        <img src={checked} className="w-6 h-6" alt="checked" />
      ) : (
        <img src={unchecked} className="w-6 h-6" alt="unchecked" />
      )} */}
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
