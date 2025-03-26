import { PercentageBar } from "@/components/features/percentage-bar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PercentageBar> = {
  title: "Components/PercentageBar",
  component: PercentageBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PercentageBar>;

export const Full: Story = {
  args: {
    percentage: 100,
  },
  decorators: [(Story) => <Story />],
};

export const Half: Story = {
  args: {
    percentage: 50,
  },
  decorators: [(Story) => <Story />],
};

export const Low: Story = {
  args: {
    percentage: 25,
  },
  decorators: [(Story) => <Story />],
};
