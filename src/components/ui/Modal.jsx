import React from 'react';
import ButtonReset from './ButtonReset';

const Modal = ({ onClick, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[300px] scale-100 animate-in fade-in-0 zoom-in-95 duration-300 flex flex-col p-6 bg-white border border-gray-700 shadow-lg rounded-2xl text-center">
        

        <h2 className="text-xl text-black font-bold mb-4">{children}</h2>
        <ButtonReset onClick={onClick}> Reiniciar Juego</ButtonReset>
      </div>
    </div>
  );
};

export default Modal;