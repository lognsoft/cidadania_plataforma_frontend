"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  initializeUserInfo,
  updateUserInfo,
  getUserInfo,
  handleClickParent,
  newUserInfo
} from "@/app/(ghest)/service/RegisterUser/UpdatedUserInfoLocalStorageService";
import ButtonBack from "@/components/ButtonBack";

const ParentsSpanish = () => {

  const router = useRouter()
  const [userInfo, setUserInfo] = useState<any>(null);
  const gender = userInfo?.questions?.gender;
  console.log(gender);
  
 

  React.useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      initializeUserInfo(userInfoString)
      setUserInfo(getUserInfo())      
    }
  }, []);

  useEffect(()=>{
    if (userInfo){
      userInfo.step = 3;
      updateUserInfo(userInfo)
    }
  },[userInfo])


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
  return (
    <div className="page flex gap-2">
      {gender === "man"
        ? ManGeneration.map((item) => <div key={item}>
          <button value={item} onClick={(event) => handleClickParent(event, router)}>
            {item}
          </button>
        </div>)
        : WomanGeneration.map((item) => <div key={item}>
          <button value={item} onClick={(event) => handleClickParent(event, router)}>
            {item}
          </button>
        </div>)}
        <ButtonBack/>
    </div>
  );
};

export default ParentsSpanish;
