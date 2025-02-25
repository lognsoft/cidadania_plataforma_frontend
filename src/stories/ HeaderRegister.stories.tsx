import HeaderRegister from "@/components/layout/header/HeaderRegister";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderRegister> = {
  title: "Components/HeaderRegister",
  component: HeaderRegister,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderRegister>;

export const Home: Story = {
  args: {
    pathname: "/",
  },
};
