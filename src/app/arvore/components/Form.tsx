"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "error"),
});

type FormProps = z.infer<typeof schema>;

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  function teste(data: any) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(teste)}
      className="bg-green-400 p-10 text-black flex flex-col gap-10 min-w-[600px]"
    >
      <label htmlFor="" className="flex justify-between">
        nome
        <input type="text" {...register("name")} />
      </label>
      <label htmlFor="" className="flex justify-between">
        data nascimento
        <input type="text" {...register("name")} />
      </label>
      <label htmlFor="" className="flex justify-between">
        certidão de nascimento
        <input type="text" {...register("name")} />
      </label>

      <label htmlFor="" className="flex justify-between">
        sexo
        <input type="text" {...register("name")} />
      </label>
      <label htmlFor="" className="flex justify-between">
        certidão de casamento
        <input type="text" {...register("name")} />
      </label>
      <button type="submit" className="bg-white w-36 mx-auto">
        enviar
      </button>
      {/* {errors.name?.message && <p>{errors.name.message} </p>} */}
    </form>
  );
};

export default Form;
