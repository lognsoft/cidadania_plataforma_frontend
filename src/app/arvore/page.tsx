"use client"
import { useEffect } from 'react'

const Arvore = () => {
  const userInfoString = localStorage.getItem("userInfo") || null;
  const userInfo = userInfoString ? JSON.parse(userInfoString) : new Object();
  
  useEffect(() =>{
    userInfo.step = 4
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [])
  return (
    <div>
      arvore
    </div>
  )
}

export default Arvore
