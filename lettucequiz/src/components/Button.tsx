interface ButtonInterface {
  disabled: boolean;
  onClick: () => void;
}

function Button({ onClick, disabled }: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`relative bottom-6 inline-flex justify-center items-center px-12 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm tracking-widest ${
        disabled ? "bg-gray-200 text-gray-400" : "bg-cadetblue text-gray-800"
      }`}
    >
      <p>NEXT QUESTION</p>
    </button>
  );
}

export default Button;
