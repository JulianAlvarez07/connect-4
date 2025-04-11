import { motion } from "framer-motion";

export const Square = ({ children, updateBoard, index, isWinning, delay }) => {
  let bgColor = "bg-black";

  if (children === "🔴") bgColor = "bg-red-800";
  if (children === "🟡") bgColor = "bg-yellow-300";

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className="w-12 h-12 border rounded-full border-gray-300 flex items-center justify-center cursor-pointer"
    >
      {children && (
        <motion.div
          key={children + index}
          initial={{ y: -150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            boxShadow: isWinning
              ? "0 0 15px 5px white"
              : "none",
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            stiffness: 120,
            damping: 14,
            delay: isWinning ? delay * 0.5 : 0, 
            duration: 2,
          }}
          className={`w-12 h-12 rounded-full ${bgColor}`}
        />
      )}
    </div>
  );
};