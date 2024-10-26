"use client";
import React from "react";

const Parents = () => {
  const userInfo = localStorage.getItem("userInfo") || null;
  const data = userInfo ? JSON.parse(userInfo) : new Object();
  const sex = "man";
  const ManGeneration: string[] = [
    "Pai",
    "Avô",
    "Bisavô",
    "Trisavô",
    "Tetravô",
  ];

  const WomanGeneration: string[] = [
    "Mãe",
    "Avó",
    "Bisavó",
    "Trisavó",
    "Tetravó",
  ];

  React.useEffect(() => {
    data.step = 3;
    localStorage.setItem("userInfo", JSON.stringify(data));
  }, []);

  function handleClick({ target }: any) {
    data.parent = (target as HTMLButtonElement).value;
    localStorage.setItem("userInfo", JSON.stringify(data));
  }

  return (
    <div>
      {sex === "man"
        ? ManGeneration.map((item) => <div key={item}>{item}</div>)
        : WomanGeneration.map((item) => <div key={item}>{item}</div>)}
    </div>
  );

  // <div className="page">
  //   <button value="pai" onClick={handleClick}>
  //     pai
  //   </button>
  //   <button value="vo" onClick={handleClick}>
  //     vo
  //   </button>
  //   <button value="bisavo" onClick={handleClick}>
  //     bisavo
  //   </button>
  //   <button value="trisavo" onClick={handleClick}>
  //     trisavo
  //   </button>
  // </div>
};

export default Parents;
