interface ButtonInterface {
  disabled?: boolean;
  onClick: () => void;
  title: string;
}

function Button({ onClick, disabled, title }: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`relative bottom-6 inline-flex justify-center items-center px-10 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm tracking-widest ${
        disabled ? "bg-gray-200 text-gray-400" : "bg-cadetblue text-raisinblack"
      }`}
    >
      <p>{title}</p>
    </button>
  );
}

export default Button;
