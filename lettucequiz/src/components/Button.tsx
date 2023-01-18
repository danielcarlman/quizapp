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
      className="relative bottom-6 inline-flex justify-center items-center px-12 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-gray-800 bg-cadetblue tracking-widest"
    >
      <p>NEXT QUESTION</p>
    </button>
  );
}

export default Button;
