import { CardFamily } from "@/components/common/card-family";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardFamily> = {
  title: "Components/CardFamily",
  component: CardFamily,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardFamily>;

export const Default: Story = {
  args: {
    percentage: 0,
    title: "Bisavô",
    subtitle: "Nome e Sobrenome",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    percentage: 50,
    title: "Avô",
    subtitle: "Nome e Sobrenome",
    selected: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    percentage: 100,
    title: "Pai",
    subtitle: "Nome e Sobrenome",
    selected: false,
  },
};
