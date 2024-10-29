let userInfo: any = {};

export function initializeUserInfo(userInfoString: string) {
  try {
    userInfo = userInfoString ? JSON.parse(userInfoString) : {};
    console.log(userInfo);
    
  } catch (error) {
    console.error("Erro ao fazer parse do JSON na inicialização:", error);
    userInfo = {};
  }
}

export function updateUserInfo(newInfo: any) {  
  localStorage.setItem("userInfo", JSON.stringify(newInfo));
}

export function getUserInfo() {
  return userInfo;
}

export function newUserInfo(userInfo: any, step: number, response: string, gender: string) {
  return {
    ...userInfo,
    step: step,
    questions: {
      youKnowWho: response,
        gender: gender,
    }
  }
}

export function handleClickGender(event: React.MouseEvent<HTMLButtonElement>, setResponse: any, setGender: any, router: any){
  const value = event.currentTarget.value;

  if (value === "man" || value === "woman") {
    setGender(value);
    router.push(`${userInfo.country}/parents`);
    return
  } 
  setResponse(value);
}

export function handleClickParent(event: React.MouseEvent<HTMLButtonElement>, router: any){
    userInfo.parent = event.currentTarget.value;
    updateUserInfo(userInfo)
    router.replace("/arvore")

}

export function handleClickCountry(event: React.MouseEvent<HTMLButtonElement>, router: any){
  const country = event.currentTarget.value;

  userInfo.country = event.currentTarget.value;;
  updateUserInfo(userInfo)

  router.push(country);
}