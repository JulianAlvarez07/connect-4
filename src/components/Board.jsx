import { Square } from "./Square"; 

export const Board = ({ board, updateBoard }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {board.map((fila, i) => (
        <div key={i} className="flex gap-2">
          {fila.map((celda, j) => (
            <Square key={j} updateBoard={updateBoard} index={[i, j]}>
              {board[i][j]}
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
};