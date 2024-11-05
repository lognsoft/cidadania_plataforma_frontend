import LocalStorageService from "@/app/services/LocalStorageService";

export function CreateLocalStorage() {
  let obj: User = {
    country: "",
    details: {
      youKnow: false,
      gender: 0,
    },
    parent: "",
    step: 1,
  };

  LocalStorageService.setItem<User>("userInfo", obj);
}
