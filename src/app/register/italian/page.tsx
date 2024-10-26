"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Italian = () => {
  const [respose, setResponse] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");
  const router = useRouter();

  function handleClick({ target }: any) {
    const value = (target as HTMLButtonElement).value;
    if (value === "man" || value === "woman") {
      setGender(value);
      router.push("parents");
    } else {
      setResponse(value);
    }
  }

  React.useEffect(() => {
    if (respose === "negative") {
      router.push("arvore");
    }
    const userInfo = localStorage.getItem("userInfo") || null;

    let data = userInfo ? JSON.parse(userInfo) : {};
    data.step = 2;
    data.details = {
      youKnowWho: respose,
      gender: gender,
    };
    localStorage.setItem("userInfo", JSON.stringify(data));
  }, [gender, respose]);

  return (
    <div className="page">
      <div>
        <h2>Voce sabe quem é o italiano</h2>
        <button value="confirm" onClick={handleClick}>
          Sim
        </button>
        {respose === "confirm" ? (
          <div>
            <button value="man" onClick={handleClick}>
              homem
            </button>
            <button value="woman" onClick={handleClick}>
              mulher
            </button>
          </div>
        ) : (
          <button value="negative" onClick={handleClick}>
            Nao
          </button>
        )}
      </div>
    </div>
  );
};

export default Italian;
