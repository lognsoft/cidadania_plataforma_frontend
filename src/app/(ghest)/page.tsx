'use client';
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>('');

  function handlerClick(){
    const user_info = localStorage.getItem('user_info') || null;

    if(user_info === null){
      localStorage.setItem('user_info', JSON.stringify({ nome: name }));
      return;
    }

    let user_info_parse = JSON.parse(user_info);

    let data = {
      ...user_info_parse,
      nome: name,
    }

    localStorage.setItem('user_info', JSON.stringify(data));
  }

  return (
    <div className="page">
      <input style={{color: '#000'}} type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handlerClick}>next</button>
    </div>
  );
}
