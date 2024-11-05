import LocalStorageService from "@/app/services/LocalStorageService";

export function SaveGenderLocalStorage(gender: number, router: any) {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    User.details.gender = gender;
    User.step = 3;
    LocalStorageService.updateItem("userInfo", User);
    router.push("/register/parents");
  }
}
