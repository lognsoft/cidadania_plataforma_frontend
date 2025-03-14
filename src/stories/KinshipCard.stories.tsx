import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type IKinshipCard from "@/types/IKinshipCard";
import KinshipCard from "@/components/common/card-kinship/CardKinship";

const dummyKinship: IKinshipCard = {
  title: "Pai",
  subtitle: "Exemplo de Parentesco",
};

const meta: Meta<typeof KinshipCard> = {
  title: "Components/KinshipCard",
  component: KinshipCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof KinshipCard>;

export const Default: Story = {
  args: {
    kinship: dummyKinship,
    selected: false,
    onSelect: () => console.log("KinshipCard clicado"),
  },
};

export const Selected: Story = {
  args: {
    kinship: dummyKinship,
    selected: true,
    onSelect: () => console.log("KinshipCard clicado"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <KinshipCard
        kinship={dummyKinship}
        selected={selected}
        onSelect={() => setSelected(!selected)}
      />
    );
  },
};
