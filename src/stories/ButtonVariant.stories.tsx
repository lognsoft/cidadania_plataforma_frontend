import ButtonVariant from "@/components/common/button-variant/ButtonVariantShadow";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonVariant> = {
  title: "Components/ButtonVariant",
  component: ButtonVariant,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonVariant>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    shadow: true,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    shadow: true,
  },
};

export const NoShadow: Story = {
  args: {
    children: "Button without shadow",
    variant: "default",
    shadow: false,
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive Button",
    variant: "destructive",
    shadow: true,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    shadow: true,
  },
};
