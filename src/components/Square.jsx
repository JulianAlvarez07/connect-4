export const Square = ({ children, updateBoard, index }) => {
  let bgColor = "bg-black";

  if (children === "🔴") bgColor = "bg-red-500";
  if (children === "🟡") bgColor = "bg-yellow-400";

  const className = `w-12 h-12 border rounded-full border-gray-400 flex items-center justify-center text-sm font-bold cursor-pointer ${bgColor}`;

  const handleClick = () => {
    console.log("Índice clickeado:", index);
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {/* Solo mostramos el emoji si existe */}
      {["🔴", "🟡"].includes(children) ? children : ""}
    </div>
  );
};