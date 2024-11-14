import React, { InputHTMLAttributes, useEffect } from "react";
import { FormProps } from "./utils/formSchema";
import { useFormContext } from "react-hook-form";

interface InputFields extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: keyof FormProps;
}

const InputFields = ({ ...props }) => {
  // const {
  //   formState: { errors },
  // } = useFormContext();

  return (
    <div>
      <label className="flex justify-between">
        <input {...props} />
      </label>
      {/* {errors[name] && <span>{`${errors[name]?.message}`}</span>} */}
    </div>
  );
};

export default InputFields;
