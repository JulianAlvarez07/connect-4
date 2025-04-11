export const TurnIndicator = ({ turn }) => {
  const baseClass = "w-12 h-12 border rounded-full border-black flex items-center justify-center font-bold text-white";

  const redClass = turn === "🔴" ? "bg-red-800" : "bg-white";
  const yellowClass = turn === "🟡" ? "bg-yellow-300" : "bg-white";

  return (
    <div className="flex flex-row gap-2 m-2">
      <div className={`${baseClass} ${redClass}`} />
      <div className={`${baseClass} ${yellowClass}`} />
    </div>
  );
};

export default TurnIndicator;