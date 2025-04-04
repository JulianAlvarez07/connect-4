export const TurnIndicator = ({ turn }) => {
  return (
    <div className="flex flex-row gap-2 m-2">
      <div
        className={`w-12 h-12 border rounded-full border-gray-400 flex items-center justify-center font-bold ${
          turn === "🔴" ? "bg-red-500 text-white" : "bg-black text-white"
        }`}
      >
        
      </div>
      <div
        className={`w-12 h-12 border rounded-full border-gray-400 flex items-center justify-center font-bold ${
          turn === "🟡" ? "bg-yellow-400 text-white" : "bg-black text-white"
        }`}
      >
        
      </div>
    </div>
  );
};

export default TurnIndicator;