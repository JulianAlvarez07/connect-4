import React, { Children, useState } from 'react'
import { Square } from './Square'
import { TurnIndicator } from './TurnIndicador'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const Connect4 = () => {
  const filas = 6;
  const columnas = 7;

  const [board, setBoard] = useState(Array.from({ length: filas }, () => Array(columnas).fill(null)));

  const [turn, setTurn] = useState(TURNS.RED)


  const findEmptyRow = (board, col) => {
    for (let row = board.length - 1; row >= 0; row--) {
      if (board[row][col] === null) return row;
    }
    return null;
  };

  
  const updateBoard = ([, col]) => {
    const row = findEmptyRow(board, col);
    if (row === null) return; // Columna llena
  
    const newBoard = [...board];
    const updatedRow = [...newBoard[row]];
    updatedRow[col] = turn;
    newBoard[row] = updatedRow;
    setBoard(newBoard);
  
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);
  };


  return (
    <main className='flex flex-col items-center m-5'>

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

      <TurnIndicator turn={turn} />
    </main>

  )
}

export default Connect4
