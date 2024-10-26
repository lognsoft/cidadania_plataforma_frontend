"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Country = () => {
  const router = useRouter();

  function handleClick({ target }: any) {
    const value = (target as HTMLButtonElement).value;

    const userInfo = localStorage.getItem("userInfo") || null;

    let data = userInfo ? JSON.parse(userInfo) : {};

    data.country = value;
    localStorage.setItem("userInfo", JSON.stringify(data));
    router.push(value);
  }

  return (
    <div className="page flex gap-2">
      <button
        className="p-10 bg-green-400"
        value="italian"
        onClick={handleClick}
      >
        Italia
      </button>
      <button
        className="p-10 bg-green-400"
        value="spanish"
        onClick={handleClick}
      >
        espanha
      </button>
      <button
        className="p-10 bg-green-400"
        value="argentina"
        onClick={handleClick}
      >
        argentina
      </button>
      {/* <input style={{color: '#000'}} type="button" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/> */}
      {/* <button onClick={handlerClick}>next</button> */}
    </div>
  );
};

export default Country;
