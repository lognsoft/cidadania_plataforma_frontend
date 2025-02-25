import { ProgressWrapper } from "@/components/features/progress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressWrapper> = {
  title: "Components/ProgressWrapper",
  component: ProgressWrapper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressWrapper>;

export const Step1: Story = {
  args: {
    pathname: "/primeiro-caminho", // Simula o primeiro passo
  },
};
