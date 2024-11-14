import React, { ReactNode } from "react";
import { formHandler } from "./utils/formHandler";
import { useFormHandler } from "./hooks/useFormHandler";
import { FormProvider } from "react-hook-form";

const Form = ({ children }: { children: ReactNode }) => {
  const methods = useFormHandler();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(formHandler)}
        className="bg-green-400 p-10 text-black flex flex-col gap-10 min-w-[600px]"
      >
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
