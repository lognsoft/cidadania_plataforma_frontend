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
    variant: "default-primary",
    shadow: true,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "default-quaternary",
    shadow: true,
  },
};

export const NoShadow: Story = {
  args: {
    children: "Button without shadow",
    variant: "default-pink",
    shadow: false,
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive Button",
    variant: "default-eighth",
    shadow: true,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "default-gray",
    shadow: true,
  },
};
