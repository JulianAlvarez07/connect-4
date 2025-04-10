const ButtonReset = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='text-[17px] px-8 py-2 border border-transparent shadow-[2px_2px_4px_rgba(0,0,0,0.4)] bg-[#ea1717] text-white rounded-lg hover:bg-gradient-to-r hover:from-[#b81007] hover:to-[#e8f059] active:translate-y-2 transition-all mt-8'
    >
      {children}
    </button>
  );
};
export default ButtonReset