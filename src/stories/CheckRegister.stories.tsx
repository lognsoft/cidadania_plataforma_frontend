import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckRegister } from "@/components/common/check-register";

const meta: Meta<typeof CheckRegister> = {
  title: "Components/CheckRegister",
  component: CheckRegister,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckRegister>;

export const Default: Story = {
  args: {
    label: "Nome do Registro",
    children: <span>Conteúdo do registro</span>,
    onCheck: () => console.log("Botão de check clicado"),
    onEdit: () => console.log("Botão de editar clicado"),
  },
};
