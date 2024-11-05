import LocalStorageService from "@/app/services/LocalStorageService";

export function CheckParentGender() {
  const Woman = ["mãe", "avó", "bisavó", "trisavó", "tataravó"];
  const Man = ["pai", "avô", "bisavô", "trisavô", "tataravô"];

  let User = <User>LocalStorageService.getItem("userInfo");

  if (User) {
    return User.details?.gender === 0 ? Man : Woman;
  }
  return [];
}
