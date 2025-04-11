import React, { useState, useEffect } from 'react';
import { TurnIndicator } from './TurnIndicador';
import { ganadores } from '../utils/constant';
import Winner from './Winner';
import ButtonReset from './ui/ButtonReset';
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
  const [winnerInfo, setWinnerInfo] = useState(null); // guarda ganador + combo
  const [showModal, setShowModal] = useState(false);  // controla si el modal se ve

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

  useEffect(() => {
    if (winnerInfo) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [winnerInfo]);

  const reiniciarJuego = () => {
    setBoard(Array.from({ length: 6 }, () => Array(7).fill(null)));
    setTurn(TURNS.RED);
    setWinner(null);
    setWinnerInfo(null);
    setShowModal(false);
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
    const result = checkWinner(newBoard, ganadores); 
    if (result) {
      setTimeout(() => {
        setWinner(result.ganador);
        setWinnerInfo(result);
      }, 300);
      return;
    }
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);
  };

  return (
    <main className='flex flex-col items-center m-5'>
      <div className='bg-blue-800 border rounded-2xl border-black cursor-pointer'>
      <Board board={board} updateBoard={updateBoard} winnerCombo={winnerInfo?.combo} />
      </div>
      {showModal && <Winner winner={winnerInfo?.ganador} onClick={reiniciarJuego} />}
      <TurnIndicator turn={turn} />
      <ButtonReset onClick={reiniciarJuego}> Reiniciar Juego</ButtonReset>
    </main>

  )
}
export default Connect4
