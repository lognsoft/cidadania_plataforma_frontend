import LocalStorageService from "@/app/services/LocalStorageService";

export function GetCountryLocalStorage() {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    return User.country || null;
  }
}
