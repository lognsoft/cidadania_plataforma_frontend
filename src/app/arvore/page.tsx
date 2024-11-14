"use client";

import React, { useState } from "react";
import Form from "./components/Form";
import InputFields from "./components/InputFields";
import { useEffectUpdateStepLocalStorage } from "../useEffects/useEffectUpdateStepLocalStorage";
import ModalForm from "./components/ModalForm";

const page = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [teste, setTeste] = useState<{ name: string; email: string }[]>([
    { name: "name", email: "email" },
  ]);

  useEffectUpdateStepLocalStorage(4);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function maisModal() {
    setTeste((testes) => [...testes, { name: "name", email: "email" }]);
  }

  return (
    <>
      {teste.map((bla, index) => (
        <div
          className="flex justify-center flex-col items-center h-[30vh]"
          key={index}
        >
          {!modalIsOpen && (
            <button onClick={handleModal} className="bg-pink-500 p-5"></button>
          )}
          <ModalForm isOpen={modalIsOpen} handleModal={handleModal}>
            <Form>
              <InputFields value={bla.name} />
              {/* <InputFields label="email" type="text" name="email" />
              <InputFields label="pdf" type="file" name="pdf" /> */}
            </Form>
          </ModalForm>
        </div>
      ))}
      <button onClick={maisModal}>mais</button>
    </>
  );
};

export default page;
