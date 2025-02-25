import { SelectLanguage } from "@/components/features/language-selection";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectLanguage> = {
  title: "Components/SelectLanguage",
  component: SelectLanguage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectLanguage>;

export const Default: Story = {};
