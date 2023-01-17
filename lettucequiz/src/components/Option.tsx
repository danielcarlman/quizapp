interface Option {
  value: string;
  points: any;
}

function Option({ value, points }: Option) {
  return (
    <span className="flex space-x-2">
      <input className="w-6 h-6" type="radio" name="option" />
      <p>{value}</p>
      <p>{points}</p>
    </span>
  );
}

export default Option;
