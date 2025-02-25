import StyleGuide from "@/components/common/styles-guide/StyleGuide";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StyleGuide> = {
  title: "Design/StyleGuide",
  component: StyleGuide,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StyleGuide>;

export const Default: Story = {};
