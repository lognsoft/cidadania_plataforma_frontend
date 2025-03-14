import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/components/common/icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    src: "/images/icons/icon-check.svg",
    alt: "Ícone de check",
    onClick: () => console.log("IconButton clicado"),
  },
};

export const WithCustomDimensions: Story = {
  args: {
    src: "/images/icons/icon-edit.svg",
    alt: "Ícone de editar",
    width: 40,
    height: 40,
    onClick: () => console.log("IconButton com dimensões customizadas clicado"),
  },
};
