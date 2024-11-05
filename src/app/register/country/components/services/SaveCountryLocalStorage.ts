import LocalStorageService from "@/app/services/LocalStorageService";


export function SaveCountryLocalStorage(children: string, router: any) {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    User.country = children;
    LocalStorageService.updateItem("userInfo", User);
    router.push("/register/youKnow");
  }
}
