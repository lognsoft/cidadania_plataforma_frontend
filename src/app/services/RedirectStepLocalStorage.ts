import LocalStorageService from "./LocalStorageService";

export function redirectStep(router: any) {
  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    const { step } = User;
    switch (step) {
      case 1:
        router.push("/register/country");
        break;
      case 2:
        router.push("/register/youKnow");
        break;
      case 3:
        router.push("/register/gender");

        break;
      default:
        break;
    }
  }
}
