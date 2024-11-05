import LocalStorageService from "@/app/services/LocalStorageService";

export function GetCountryLocalStorage() {
  let User = <User>LocalStorageService.getItem("userInfo");

  console.log(User, "dentro");
  if (User) {
    return User.country || null;
  }
}
