import LocalStorageService from "@/app/services/LocalStorageService";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Certifique-se de usar a importação correta

export function useEffectUpdateStepLocalStorage(step: number = 0) {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o router está montado e acessível
    if (!router) return;

    let _user: User = <User>LocalStorageService.getItem("userInfo");

    // Valida os parâmetros

    PropertiesValidation(step, _user, router);
  }, [step, router]);

  function PropertiesValidation(step: number, _user: User, router: Router) {
    if (step === 0 || !_user) {
      router.push("/");
      return;
    }
    UpdateLocalStorage(step, _user);
  }

  function UpdateLocalStorage(step: number, _user: User) {
    _user.step = step;
    LocalStorageService.updateItem("userInfo", _user);
  }
}
