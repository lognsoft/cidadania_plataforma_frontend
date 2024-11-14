"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps, Formschema } from "../utils/formSchema";

export const useFormHandler = () => {
  const methods = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(Formschema),
  });

  return methods;
};
