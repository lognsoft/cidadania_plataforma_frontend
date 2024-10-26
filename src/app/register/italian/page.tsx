"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Italian: React.FC = () => {
  const [response, setResponse] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    if (value === "man" || value === "woman") {
      setGender(value);
      router.push("parents");
    } else {
      setResponse(value);
    }
  };

  useEffect(() => {
    if (response === "negative") {
      router.push("arvore");
      return;
    }

    const userInfo = localStorage.getItem("userInfo");
    const data = userInfo ? JSON.parse(userInfo) : {};

    const updatedData = {
      ...data,
      step: 2,
      details: {
        youKnowWho: response,
        gender: gender,
      },
    };

    localStorage.setItem("userInfo", JSON.stringify(updatedData));
  }, [gender, response, router]);

  return (
    <div className="page">
      <div>
        <h2>Você sabe quem é o italiano?</h2>
        <button value="confirm" onClick={handleClick}>
          Sim
        </button>
        {response === "confirm" ? (
          <div>
            <button value="man" onClick={handleClick}>
              Homem
            </button>
            <button value="woman" onClick={handleClick}>
              Mulher
            </button>
          </div>
        ) : (
          <button value="negative" onClick={handleClick}>
            Não
          </button>
        )}
      </div>
    </div>
  );
};

export default Italian;
