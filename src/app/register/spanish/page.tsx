"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  initializeUserInfo,
  updateUserInfo,
  getUserInfo,
  handleClickGender,
  newUserInfo
} from "@/app/(ghest)/service/RegisterUser/UpdatedUserInfoLocalStorageService";
import ButtonBack from "@/components/ButtonBack";

const Spanish = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [response, setResponse] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const router = useRouter()
  
  useEffect(()=>{
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      initializeUserInfo(userInfoString)
      setUserInfo(getUserInfo())      
    }
  },[])

  useEffect(() => {
    if (userInfo && (response || gender)){
      const newInfo = newUserInfo(userInfo, 2, response, gender)
      updateUserInfo(newInfo);
    }
  }, [response, gender, userInfo]);




  return (
    <div className="page">
      <div>
        <h2>Você sabe quem é o espanhol?</h2>
        <button value="confirm" onClick={(event)=> handleClickGender(event, setResponse, setGender, router)}>
          Sim
        </button>
        {response === "confirm" ? (
          <div>
            <button value="man" onClick={(event)=> handleClickGender(event, setResponse, setGender, router)}>
              Homem
            </button>
            <button value="woman" onClick={(event)=> handleClickGender(event, setResponse, setGender, router)}>
              Mulher
            </button>
          </div>
        ) : (
          <button value="negative" onClick={(event)=> handleClickGender(event, setResponse, setGender, router)}>
            Não
          </button>
        )}
      </div>
      <ButtonBack/>
    </div>
  );
};

export default Spanish;
