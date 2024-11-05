import { useEffect } from "react";
import { CreateLocalStorage } from "../services/CreateLocalStaregeService";

export function useEffectCreateLocalStorage() {
  useEffect(() => {
    CreateLocalStorage();
  }, []);
}
