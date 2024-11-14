import LocalStorageService from "@/app/services/LocalStorageService";

export function SaveKnowDecisionLocalStorage(know: boolean): void {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    User.details.youKnow = know;
    // User.step = 2;
    LocalStorageService.updateItem("userInfo", User);
  }
}
