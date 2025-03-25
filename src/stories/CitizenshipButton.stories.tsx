import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CitizenshipButton } from "@/components/common/button-citizenship";

const meta: Meta<typeof CitizenshipButton> = {
  title: "Components/CitizenshipButton",
  component: CitizenshipButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CitizenshipButton>;

export const Default: Story = {
  args: {
    icon: "/images/icons/icone-mundo.svg",
    label: "Minhas Cidadanias",
    selected: false,
    onClick: () => console.log("Início clicado"),
  },
};

export const Selected: Story = {
  args: {
    icon: "/images/icons/icone-mundo.svg",
    label: "Selecionado",
    selected: true,
    onClick: () => console.log("Botão selecionado"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <CitizenshipButton
        icon={"/images/icons/icone-mundo.svg"}
        label="Clique aqui"
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    );
  },
};
