import { CardCountryApplication } from "@/components/common/card-country-application";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardCountryApplication> = {
  title: "Components/CardFamilyPais",
  component: CardCountryApplication,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardCountryApplication>;

export const Default: Story = {
  args: {
    icon: "/images/flags/flag-usa.svg",
    percentage: 25,
    title: "USA",
    subtitle: "Sobrenome",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    icon: "/images/flags/flag-italia.svg",
    percentage: 100,
    title: "Italiana",
    subtitle: "Sobrenome",
    selected: true,
  },
};
