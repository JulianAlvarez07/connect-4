import React from 'react';
import Modal from './ui/Modal';

const Winner = ({ winner, onClick }) => {
  if (!winner) return null;

  let mensaje;
  if (winner === "🔴") {
    mensaje = "¡Ganador: Rojo 🔴!";
  } else if (winner === "🟡") {
    mensaje = "¡Ganador: Amarillo 🟡!";
  } else {
    mensaje = "¡Empate!";
  }

  return (
    <Modal onClick={onClick}>
      {mensaje}
    </Modal>
  );
};

export default Winner;