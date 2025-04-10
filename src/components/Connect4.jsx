import React, { Children, useState } from 'react';
import { Square } from './Square';
import { TurnIndicator } from './TurnIndicador';
import { ganadores } from '../constant';
import Winner from './Winner';
import ButtonReset from './ButtonReset';
import { Board } from './Board';

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const Connect4 = () => {
  const filas = 6;
  const columnas = 7;

  const [board, setBoard] = useState(Array.from({ length: filas }, () => Array(columnas).fill(null)));

  const [turn, setTurn] = useState(TURNS.RED)

  const [winner, setWinner] = useState(null) //null que no hay ganador, false es que es empate


  const findEmptyRow = (board, col) => {
    for (let row = board.length - 1; row >= 0; row--) {
      if (board[row][col] === null) return row;
    }
    return null;
  };

  const checkWinner = (board, ganadores) => {
    for (const combo of ganadores) {
      const [a, b, c, d] = combo;
      const val = board[a[0]][a[1]];
  
      if (
        val &&
        val === board[b[0]][b[1]] &&
        val === board[c[0]][c[1]] &&
        val === board[d[0]][d[1]]
      ) {
        return { ganador: val, combo }; // Ganador + las posiciones ganadoras
      }
    }
  
    return null; // Si no hay ganador
  };

  const reiniciarJuego = () => {
    setBoard(Array.from({ length: 6 }, () => Array(7).fill(null)));
    setTurn(TURNS.RED);
    setWinner(null);
  };
  
  const updateBoard = ([, col]) => {
    if (winner) return;
    const row = findEmptyRow(board, col);

    if (row === null) return; // Col llena
  
    const newBoard = [...board];
    const updatedRow = [...newBoard[row]];
    updatedRow[col] = turn;
    newBoard[row] = updatedRow;
    setBoard(newBoard);

    //ver si hay ganador
    const result = checkWinner(newBoard, ganadores); //revisamos con el nuevo tablero
    if (result) {
      setWinner(result.ganador);
      return;
    }
  
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);
  };


  return (
    <main className='flex flex-col items-center m-5'>

      <Board board={board} updateBoard={updateBoard} />

      <Winner winner={winner} />
      
      <TurnIndicator turn={turn} />

      <ButtonReset onClick={reiniciarJuego}> Reiniciar Juego</ButtonReset>
      

        
    </main>

  )
}

export default Connect4
