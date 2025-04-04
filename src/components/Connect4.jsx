import React, { Children, useState } from 'react'
import { Square } from './Square'
import { TurnIndicator } from './TurnIndicador'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const Connect4 = () => {
  // const [turn, setTurn] = useState(TURN.RED)
  const filas = 6;
  const columnas = 7;

  // Estado inicial con null en cada celda
  const [board, setBoard] = useState(
    Array.from({ length: filas }, (_, i) =>
      Array.from({ length: columnas }, (_, j) => `${i},${j}`)
    )
  );

  const [turn, setTurn] = useState(TURNS.RED)

  
  const updateBoard = ([row, col]) => {
    const newBoard = [...board];
    const updatedRow = [...newBoard[row]]; // Copiamos la fila
    updatedRow[col] = turn; // turn tiene que ser 🔴 o 🟡
    newBoard[row] = updatedRow; // Reemplazamos la fila modificada
    setBoard(newBoard);

    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED
    setTurn(newTurn)
    return
  }


  return (
    <main className='flex flex-col items-center m-5'>

      <div className="flex flex-col gap-2 p-4">

        {board.map((fila, i) => (
          <div key={i} className="flex gap-2">
            {fila.map((celda, j) => (
              <Square key={j} updateBoard={updateBoard} index={[i,j]}>
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
