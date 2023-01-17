interface Option {
  id: number;
  value: string;
}

function Option({ id, value }: Option) {
  return (
    <span className="flex space-x-2">
      <input
        className="w-6 h-6"
        type="radio"
        value={`option ${id}`}
        name="option"
      />
      <p>{value}</p>
    </span>
  );
}

export default Option;
