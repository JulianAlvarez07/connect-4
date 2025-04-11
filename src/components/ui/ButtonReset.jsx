const ButtonReset = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-[17px] px-8 py-2 border border-white shadow-[2px_2px_4px_rgba(0,0,0,0.4)] bg-[#ea1717] text-white rounded-full hover:bg-[#f43f5e] active:translate-y-2 transition-all mt-8"
    >
      {children}
    </button>
  );
};
export default ButtonReset