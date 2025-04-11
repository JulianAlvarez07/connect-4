import { Square } from "./Square"; 

export const Board = ({ board, updateBoard, winnerCombo }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {board.map((fila, i) => (
        <div key={i} className="flex gap-2">
          {fila.map((celda, j) => {
            const isWinning = winnerCombo?.some(([r, c]) => r === i && c === j);
            const delay = winnerCombo?.findIndex(([r, c]) => r === i && c === j);
            return (
              <Square
                key={j}
                updateBoard={updateBoard}
                index={[i, j]}
                isWinning={isWinning}
                delay={delay}
              >
                {celda}
              </Square>
            );
          })}
        </div>
      ))}
    </div>
  );
};