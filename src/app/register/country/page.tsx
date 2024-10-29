"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  initializeUserInfo,
  updateUserInfo,
  getUserInfo,
  handleClickCountry,
  newUserInfo
} from "@/app/(ghest)/service/RegisterUser/UpdatedUserInfoLocalStorageService";

const Country = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);

  

  // function handleClick({ target }: any) {
  //   const value = (target as HTMLButtonElement).value;

  //   userInfo.country = value;
  //   localStorage.setItem("userInfo", JSON.stringify(userInfo));
  //   router.push(value);
  // }
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

  return (
    <div className="page flex gap-2">
      <button
        className="p-10 bg-green-400"
        value="italian"
        onClick={(event)=> handleClickCountry(event, router)}
      >
        Italia
      </button>
      <button
        className="p-10 bg-green-400"
        value="spanish"
        onClick={(event)=> handleClickCountry(event, router)}
      >
        espanha
      </button>
      <button
        className="p-10 bg-green-400"
        value="argentina"
        onClick={(event)=> handleClickCountry(event, router)}
      >
        argentina
      </button>
      {/* <input style={{color: '#000'}} type="button" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/> */}
      {/* <button onClick={handlerClick}>next</button> */}
    </div>
  );
};

export default Country;
