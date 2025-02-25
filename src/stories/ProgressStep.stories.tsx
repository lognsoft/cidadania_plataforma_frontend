import { ProgressStep } from "@/components/features/progress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressStep> = {
  title: "Components/ProgressStep",
  component: ProgressStep,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressStep>;

export const Default: Story = {
  args: {
    progress: 25,
  },
};

export const HalfProgress: Story = {
  args: {
    progress: 50,
  },
};

export const FullProgress: Story = {
  args: {
    progress: 100,
  },
};
