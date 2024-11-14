import { retry } from "@reduxjs/toolkit/query";
import React, { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleModal: () => void;
}

const ModalForm = ({ children, isOpen, handleModal }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      {children}
      <button onClick={handleModal}>fechar</button>
    </>
  );
};

export default ModalForm;
