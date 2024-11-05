import { useEffect } from "react";
import { redirectStep } from "../../../services/RedirectStepLocalStorage";
import { useRouter } from "next/navigation";

export function useEffectRenderRedirectStep() {
  const router = useRouter();
  useEffect(() => {
    redirectStep(router);
  }, []);
}
