import LocalStorageService from "@/app/services/LocalStorageService";

export function SaveParentLocalStorage(parent: string, router: any) {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    User.parent = parent;
    User.step = 4;
    LocalStorageService.updateItem("userInfo", User);
    router.push("/arvore");
  }
}
