import React from 'react';
import { motion } from 'framer-motion';
import ButtonReset from './ButtonReset';

const Modal = ({ onClick, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-[300px] flex flex-col p-6 bg-white border border-gray-700 shadow-lg rounded-2xl text-center"
      >
        <h2 className="text-xl text-black font-bold mb-4">{children}</h2>
        <ButtonReset onClick={onClick}>Volver a Jugar</ButtonReset>
      </motion.div>
    </div>
  );
};

export default Modal;